import { AuthRequestDto, AuthResponseDto, IAuthRepository, IAuthService, IJsonWebTokenManager } from '..';
import { GetUserResponseDto } from '../../../users/domain/dtos/response/get-user-response-dto';
import { IUserRepository } from '../../../users/domain';

export class AuthService implements IAuthService {
    private readonly _authRepository: IAuthRepository
    private readonly _userRepository: IUserRepository
    private readonly _jwtManager: IJsonWebTokenManager

    constructor(authRepository: IAuthRepository, userRepository: IUserRepository, jwtManager: IJsonWebTokenManager) {
        this._authRepository = authRepository;
        this._userRepository = userRepository;
        this._jwtManager = jwtManager;
    }

    async login(body: AuthRequestDto): Promise<AuthResponseDto> {

        try {

            const { email, password } = body;

            const user: GetUserResponseDto = await this._userRepository.GetByEmail({ email });

            if (!user) throw new Error(`There is no user with email ${email}`);

            const passwordMatch: boolean = await this._userRepository.validatePassword({ uid: user.uid, password }); 

            if (!passwordMatch) throw new Error('The password is incorrect.');

            const token = await this._jwtManager.createJWT(user.uid);

            const response: AuthResponseDto = {
                user,
                token
            }

            return response;
        } catch (error) {
            console.log(error);
            throw new Error('Cannot login please try again');
        }
    }

    register(body: AuthRequestDto): Promise<AuthResponseDto> {
        throw new Error("Method not implemented.");
    }


}