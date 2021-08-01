const request = require("supertest")
const mongoose = require("mongoose")
const { getApp } = require("../app")

jest.setTimeout(50000)

let app

beforeEach(async () => {
    app = await getApp()
})

test("Building the server", async () => {
    await request(app).get("/").expect(200)
})

afterAll(async () => {
    await mongoose.connection.close(/*force:*/ true)
})
