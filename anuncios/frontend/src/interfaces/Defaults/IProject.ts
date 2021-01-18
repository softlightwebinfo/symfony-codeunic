export interface IProject {
    id: number;
    title: string;
    description: string;
    imagePreview: string;
    user: IProjectUser;
    currentPrice: string;
    currentTimeHours: string;
    updatedAt: string;
}

export interface IProjectUser {
    id: number;
    userName: string;
}