import { ReactElement } from "react";

export interface ITemplateProps {
    children: ReactElement[] | ReactElement | any[];
    title: string;
}