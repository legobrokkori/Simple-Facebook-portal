import { IPaging } from "./pagination";

export interface IRootObject<T> {
    data: T[];
    paging: IPaging;
}

export interface IData {
    name: string;
    id: string;
}
