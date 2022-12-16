import jwt from 'jsonwebtoken';

import { IJsonWebTokenManager } from '../../domain';


export class JsonWebTokenManager implements IJsonWebTokenManager {

    validateJWT(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

    createJWT(uid: string): Promise<string | undefined> {
        
        return new Promise((resolve, reject) => {

            const payload = { uid }

            jwt.sign(payload, process.env.secretOrPublicKey || '',
                { expiresIn: '4h' },
                (error, token) => {

                    if (error) {
                        console.log(error)
                        reject('Cannot sign token')
                    }
                    else {
                        resolve(token)
                    }
                });
        });
    }
} 