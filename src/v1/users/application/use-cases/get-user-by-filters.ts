import { IUserRepository, User } from '../../domain';


export class GetUserByFiltersUseCase {

    private readonly _repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this._repository = repository;
    }
    
    async run(body: User) : Promise<User>{
        return await this._repository.GetByFilters(body)
    }

}