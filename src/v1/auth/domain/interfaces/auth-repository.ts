import { AuthRequestDto, AuthResponseDto } from "..";

export interface IAuthRepository {

    login(body: AuthRequestDto): Promise<AuthResponseDto>;
    register(body: AuthRequestDto): Promise<AuthResponseDto>;
    renewToken(): Promise<AuthResponseDto>;

}