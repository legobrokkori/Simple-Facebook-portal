

export interface ICategoryList {
    id: string;
    name: string;
}

export interface IRootObject<T> {
    data: T[];
    paging: IPaging;
}

export interface ICursors {
    before: string;
    after: string;
}

export interface IPaging {
    cursors: ICursors;
}


export class Account {
    access_token: string;
    category: string;
    category_list: ICategoryList[];
    name: string;
    id: string;
    tasks: string[];
}