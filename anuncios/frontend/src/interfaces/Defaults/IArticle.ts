export interface IArticle {
    label: string;
    id: number;
    title: string;
    description: string;
    fk_user: string;
    created_at: string;
    updated_at: string;
    images: IArticleImage[];
    imagesList: IArticleImage[];
    category: string;
    is_featured: boolean;
    tags: string[];
}

export interface IArticleImage {
    image: string;
}