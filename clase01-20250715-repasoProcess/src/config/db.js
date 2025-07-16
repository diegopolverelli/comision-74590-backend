import mongoose from "mongoose"
export const connDB=async(urlMongo, databaseName)=>{
    try {
        await mongoose.connect(
            urlMongo,
            {
                dbName: databaseName
            }
        )
        console.log(`DB ${databaseName} conectada...!!!`)
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
}
