import { EntityBase } from "../../../../shared";
import { GetUserResponseDto } from "../../../../users/domain";

export interface AuthResponseDto extends EntityBase {
    user?: GetUserResponseDto; 
    token?: string;
}