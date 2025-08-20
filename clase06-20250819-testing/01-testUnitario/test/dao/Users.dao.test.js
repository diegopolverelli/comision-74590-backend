import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose"

import {describe, it} from "mocha"
import Assert from "assert"

const assert=Assert.strict
const usersDao=new Users()

await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')

describe("Tests dao Users", function(){
    this.timeout(10_000)

    after(async()=>{
        await mongoose.connection.collection("users").deleteMany({email:"test@test.com"})
    })

    it("El dao con su método get, retorna un array", async()=>{
        let resultado=await usersDao.get()

        assert.equal(Array.isArray(resultado), true)
    })

    it("El dao con su método get, retorna un array de objetos, objetos con propiedad _id", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0]._id)
        }
    })

    it("El dao con su método get, retorna un array de objetos, objetos con propiedad first_name", async()=>{
        let resultado=await usersDao.get()

        if(Array.isArray(resultado) && resultado.length>0){
            assert.ok(resultado[0].first_name)
        }
    })

    it("El dao con su método save, graba un usuario en db", async()=>{

        let userMock={
            first_name:"juan", 
            last_name:"lopez", 
            email:"test@test.com", 
            password:"123"
        }

        let resultado=await usersDao.save(userMock)

        assert.ok(resultado._id)
        assert.equal(isValidObjectId(resultado._id), true)
        assert.ok(resultado.first_name)
        assert.equal(resultado.first_name, userMock.first_name)
    })
})


