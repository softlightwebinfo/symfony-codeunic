export type TInputProps = {
    onChange(evt: any);
    type?: TInputType;
    value: string;
    placeholder: string;
    name: string;
};
export type TInputType = "text" | "email" | "password";
