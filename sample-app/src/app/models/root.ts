import { IPaging } from "./pagination";

export interface IRootObject<T> {
    data: T[];
    paging: IPaging;
}