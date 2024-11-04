import { ErrorOption } from "react-hook-form";

export type InputT = {
    type: string;
    placeholder: string;
    label: string;
    name: string;
    register: any;
    error: undefined | ErrorOption;
}