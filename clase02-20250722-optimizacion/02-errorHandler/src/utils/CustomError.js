export class CustomError{
    static createError(name, message, code, cause){
        let error=new Error(message, {cause})
        error.name=name
        error.code=code
        error.custom=true

        throw error
    }
}