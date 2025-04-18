export interface IItem {
    icon?: string;
    name: string;
    count: number;
}

export interface IProduct {
    id: number;
    name: string;
    location: string;
    price?: number;
    imgUrl?: string;
    isRecommended?: boolean;
}

export interface IListProduct {
    name: string;
    category: string;
    items: IProduct[];
}