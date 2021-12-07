
export interface IPaging {
    cursors: ICursors;
}

export interface ICursors {
    before: string;
    after: string;
}