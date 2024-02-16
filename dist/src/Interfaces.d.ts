/// <reference types="node" />
import * as http from 'http';
import { AS2MimeNode } from './AS2MimeNode';
export declare type AS2Headers = Array<{
    key: string;
    value: string | string[];
}> | {
    [key: string]: string | string[];
};
export interface RequestOptions extends http.RequestOptions {
    url: string | URL;
    body?: string | Buffer;
    params?: {
        [key: string]: string | boolean | number;
    };
}
export interface IncomingMessage extends http.IncomingMessage {
    mime: () => Promise<AS2MimeNode>;
    json: () => any;
    rawResponse: Buffer;
    rawBody: Buffer;
}
