import { AuthRequestDto, AuthResponseDto } from ".."

export interface IAuthService {

    login(body: AuthRequestDto): Promise<AuthResponseDto>
    register(body: AuthRequestDto): Promise<AuthResponseDto>
}