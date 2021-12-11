import { IData } from "./root";

export interface IComments {
    created_time: Date;
    from: IData;
    message: string;
    id: string;
}

// export interface IFrom {
//     name: string;
//     id: string;
// }