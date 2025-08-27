import { describe, it } from "mocha"
import supertest from "supertest"
import {expect,} from "chai"
import fs from "fs"

import mongoose, { isValidObjectId } from "mongoose"
const requester=supertest("http://localhost:8080")

await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas')


describe("Pruebas router pets", function(){
    this.timeout(10_000) // 2.000 ms

    after(async()=>{
        await mongoose.connection.collection("pets").deleteMany({specie:"test"})
    })

    describe("Test basicos router /api/pets", async()=>{
        it("Si envío los datos correctos de una mascota al /api/pets metodo POST, da de alta la mascota en DB", async()=>{
            let petMock={
                name: "Rocky", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(isValidObjectId(body.payload._id)).to.be.equal(true)
        })
        
        it("Si envío los datos incompletos de una mascota al /api/pets metodo POST, me retorna un error", async()=>{
            let petMock={
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status}=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(400)

        })

    })

    describe("Test complejos router /api/pets", ()=>{



        it("Si envío los datos correctos de una mascota al /api/pets/withimage (incluyendo una imagen valida) metodo POST, da de alta la mascota en DB", async()=>{
            let petMock={
                name: "Roger", 
                specie: "test", 
                birthDate: new Date(2025, 11, 18).toUTCString()
            }

            // let resultado=await requester.post("/api/pets").send(petMock)
            let {status, body}=await requester.post("/api/pets/withimage")    //.send(petMock)
                                              .field("name", petMock.name)
                                              .field("specie", petMock.specie)
                                              .field("birthDate", petMock.birthDate)
                                              .attach("image", "./img-roger.jpg")
            // console.log(resultado)

            // console.log(body)

            expect(status).to.be.eq(200)
            expect(body.payload).to.has.property("_id")
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(isValidObjectId(body.payload._id)).to.be.equal(true)
            expect(body.payload.image).to.be.ok
            expect(fs.existsSync(body.payload.image)).to.be.true
            fs.unlinkSync(body.payload.image)
        })
        
    })

    describe("Sessions router tests", ()=>{
        let variableCookie
        it("La ruta /api/sessions/login permite autenticar un user, y retorna una cookie conteniendo un token", async()=>{

            let userMock={email:"diegopolverelli80@gmail.com", password:"123"}

            let {headers, body}=await requester.post("/api/sessions/login").send(userMock)
                                                                           .set("Authorization","prueba de envio de header")
                                                                           .set("Cookie","Valor cookie...!!!")

            // console.log(body)
            console.log(headers)
            let nombreCookie=headers["set-cookie"][0].split("=")[0]

            console.log(nombreCookie)
            expect(nombreCookie).to.be.equal("coderCookie")

        })
    })
    
})
