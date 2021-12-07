export interface ICategoryList {
    id: string;
    name: string;
}

export class Account {
    access_token: string;
    category: string;
    category_list: ICategoryList[];
    name: string;
    id: string;
    tasks: string[];
}