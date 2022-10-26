import Service from "@framework/server/service"
export interface RouterType {
    url: string,
    service: Promise<{ default: Service }>
}

export enum RequsetMode {
    GET,
    POST
}