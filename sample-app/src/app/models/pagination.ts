
export interface IPaging {
    cursors: ICursors;
    next: string;
}

export interface ICursors {
    before: string;
    after: string;
}
