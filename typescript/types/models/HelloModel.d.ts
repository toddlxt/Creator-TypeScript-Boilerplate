declare interface IFetchResult<TData> {
    code: number;
    data: TData | null;
}

declare interface IPData {
    ip: string;
}

declare interface IPFetchResult extends IFetchResult<IPData> {
}

declare interface IPInfoData {
    area: string;
    area_id: string;
    city: string;
    city_id: string;
    country: string;
    country_id: string;
    county: string;
    county_id: string;
    ip: string;
    isp: string;
    isp_id: string;
    region: string;
    region_id: string;
}

declare interface IPInfoFetchResult extends IFetchResult<IPInfoData> {
}