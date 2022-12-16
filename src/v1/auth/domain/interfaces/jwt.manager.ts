
export interface IJsonWebTokenManager {
    validateJWT(): Promise<Boolean>;
    createJWT( uid: string ): Promise<string | undefined>;
}