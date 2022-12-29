import MgRequest from './common/Request';
import { IpData, IpsListResponseBody } from '../Types/IPs';
export default class IpsClient {
    request: MgRequest;
    constructor(request: MgRequest);
    list(query: any): Promise<IpsListResponseBody>;
    get(ip: string): Promise<IpData>;
    private parseIpsResponse;
}
