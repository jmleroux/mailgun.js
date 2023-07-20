/* global page, beforeAll, afterAll */
const { default: mockServer } = require('pptr-mock-server');
const BrowserClient = require('../helpers/BrowserClient');
const NodeClient = require('../helpers/NodeClient');

const launchType = process.env.LAUNCH_TYPE;
beforeAll(async function () {
  global.MailgunClient = null;
  if (typeof page !== 'undefined') { // browser environment
    const mockRequest = await mockServer.init(page, {
      // By default all requests matching baseAppUrl are continued.
      baseAppUrl: 'http://localhost:3000/',
    });
    const browserClient = new BrowserClient(mockRequest);
    browserClient.setLaunchType(launchType);
    await browserClient.initiateClient();
    global.MailgunClient = browserClient;
  } else {
    const nodeClient = new NodeClient();
    nodeClient.setLaunchType(launchType);
    await nodeClient.initiateClient();
    global.MailgunClient = nodeClient;
  }
  return global.MailgunClient;
});
