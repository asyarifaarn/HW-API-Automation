import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
import schema_user from "../Schema/tugasschema.test.js";

describe("API Test Suite Coba", function(){
    const baseURL = 'https://dummyjson.com'
    
    it("Get data user", async function(){
        // tembak url dummy
        const hasil = await fetch('https://dummyjson.com/api/carts/1')

        // validasi http status harus 200
        expect(hasil.status, "if false").to.equal(200)


        
    });

    it("Post_Add", async function(){
        const newPost = {
            title: "Tugas",
            userId: 2
        

        const hasilpost =  await fetch('https://dummyjson.com/api/posts/add', {
            method: "POST",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        
        })
        expect(hasilpost.status).to.equal(201)

        // validasi json schema
        const ajv = new ajv()
        const data = await hasilpost.json();
        const tes = ajv.compile(schema_user)
        const hasil_schema = tes(data)

        expect(hasil_schema, 'schema is not valid').to.be.true
       

    
        
    })

})



    
