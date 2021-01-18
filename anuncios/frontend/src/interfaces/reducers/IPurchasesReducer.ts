import { IProject } from "@interfaces/Defaults/IProject";
import { IArticle } from "@interfaces/Defaults/IArticle";

export interface IPurchasesReducer {
    projects: IProject[];
    articles: IArticle[];
}