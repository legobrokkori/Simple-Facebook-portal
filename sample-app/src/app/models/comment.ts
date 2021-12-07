
export interface IComments {
    created_time: Date;
    from: IFrom;
    message: string;
    id: string;
}

export interface IFrom {
    name: string;
    id: string;
}