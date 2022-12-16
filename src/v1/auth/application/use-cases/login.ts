import { AuthRequestDto, AuthResponseDto, IAuthService } from "../../domain";


export class LoginUseCase {


    private readonly _service: IAuthService;

    constructor(service: IAuthService ) {
        this._service = service;
    }

    async run(body: AuthRequestDto): Promise<AuthResponseDto> {
        return await this._service.login(body);
    }
}