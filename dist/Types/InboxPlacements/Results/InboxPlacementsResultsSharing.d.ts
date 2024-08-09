export type IPRSharingApiShape = {
    result_id: string;
    expires_at: string;
    enabled: boolean;
    url_id: string;
    url: string;
    api_url: string;
};
export type IPRSharingAPIResponse = {
    body: {
        sharing: IPRSharingApiShape;
    };
    status: number;
};
export type IPRSharingResult = Omit<IPRSharingApiShape, 'expires_at'> & {
    expires_at: Date;
};
export type IPRSharingUpdateData = {
    enabled: true;
};
export type IPRSharingUpdateAPIResponse = IPRSharingAPIResponse;
export type IPRSharingUpdateResult = IPRSharingResult;
