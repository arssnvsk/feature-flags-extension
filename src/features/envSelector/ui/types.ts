import type {SelectHTMLAttributes} from "react";
import {Environment} from "@/entities/environment";

export type EnvSelectorProps = SelectHTMLAttributes<HTMLSelectElement> & {
    options?: Array<Environment>
};