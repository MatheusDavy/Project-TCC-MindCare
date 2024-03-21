export class AppError {
    public readonly message: string;
    public readonly statusCode: number;
    public readonly authorization: 'UNAUTHORIZED' | 'AUTHORIZED' | undefined;

    constructor(message: string, statusCode: number, authorization: 'UNAUTHORIZED' | 'AUTHORIZED' | undefined = 'AUTHORIZED'){
        this.message = message
        this.statusCode = statusCode
        this.authorization = authorization
    }
}
