import { EntityBase } from "../../../../shared";

export interface AuthRequestDto extends EntityBase {
    email: string;
    name?: string;
    password: string;
    isGoogleUser?: boolean;
}