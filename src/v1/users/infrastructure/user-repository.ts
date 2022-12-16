import bcrypt from "bcrypt"

import { GetUserRequestDto, GetUserResponseDto, IUserRepository, User } from "../domain";
import { User as Db }  from "./models/user";

export class UserRepository implements IUserRepository 
{
    async validatePassword(filters: GetUserRequestDto): Promise<boolean> {
        try {

            const { uid, password } = filters;
            const user = await Db.findById<User>( uid );
            
            if(user === null) throw new Error(`Cannot find user with id: ${uid}`)

            return bcrypt.compareSync(password || '', user.password)
        } 
        catch (error) {
            console.log(error)
            throw new Error('Internal server error');
        }
    }
    async GetByEmail(filters: GetUserRequestDto): Promise<GetUserResponseDto> {
        
        try {

            const { email } = filters;
            const user = await Db.findOne<User>({ email })
    
            if(user === null) throw new Error(`Cannot find user with email: ${email}`)
                
            const response: GetUserResponseDto = {
                email: user.email,
                name: user.name,
                uid: user.uid!,
                role: user.role,
            } 

            return response;


        } catch (error) {
            console.log(error)
            throw new Error('Internal server error');
        }

    }
    
}