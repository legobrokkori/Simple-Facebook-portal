import { IPaging } from "./pagination";
import { IRootObject, IData } from "./root";


export interface ISummary {
    total_count: number;
    can_like: boolean;
    has_liked: boolean;
}

export interface ILikes {
    data: IData[];
    paging: IPaging;
    summary: ISummary;
}

export interface ICommentsAndLikes {
    likes: ILikes;
    created_time: Date;
    from: IData;
    message: string;
    id: string;
}

