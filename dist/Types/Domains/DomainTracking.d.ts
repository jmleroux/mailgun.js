export declare type DomainTrackingData = {
    click: {
        active: boolean;
    };
    open: {
        active: boolean;
    };
    unsubscribe: {
        active: boolean;
        html_footer: string;
        text_footer: string;
    };
};
export declare type DomainTrackingResponse = {
    status: number;
    body: {
        tracking: DomainTrackingData;
    };
};
export declare type UpdatedOpenTracking = {
    message: string;
    open?: {
        active: boolean;
    };
    click?: {
        active: boolean | 'htmlonly';
    };
    unsubscribe?: {
        active: boolean;
        html_footer: string;
        text_footer: string;
    };
};
export declare type UpdateDomainTrackingResponse = {
    status: number;
    body: UpdatedOpenTracking;
};
export declare type OpenTrackingInfo = {
    active: 'yes' | 'no' | 'true' | 'false';
};
export declare type ClickTrackingInfo = {
    active: 'yes' | 'no' | 'true' | 'false' | 'htmlonly';
};
export declare type UnsubscribeTrackingInfo = {
    active: 'yes' | 'no' | 'true' | 'false';
    html_footer: string;
    text_footer: string;
};
