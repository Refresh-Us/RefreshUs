const { getApp } = require("./app")

const startApp = async () => {
    try {
        const port = process.env.PORT || 7000
        const app = await getApp()

        app.listen(port, () => {
            console.log(`Server is running on port` + port)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()
