import { GetUserRequestDto, GetUserResponseDto } from ".";

export interface IUserRepository {
    GetByEmail(filters: GetUserRequestDto): Promise<GetUserResponseDto>
    validatePassword(filters: GetUserRequestDto): Promise<boolean>
}