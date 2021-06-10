const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const countriesRouter = require("./routes/countries")
const PORT = process.env.port || 4000

const app = express()

const options = {
    definition : {
        openapi: "3.0.0",
        info: {
            title: "Coutries Api",
            version: "1.0.0",
            description: "A simple express API to manipulate countries list"
        },
        servers : [
            {
                url : "http://localhost/4000"
            }
        ]
    },
    
        apis: ["./routes/*.js"]
}
app.use(cors())
const specs = swaggerJsDoc(options)
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))


app.use(morgan("dev"))
app.use(express.json())
app.use("/countries",countriesRouter)
app.listen(PORT,()=> console.log(`server is listning on port, ${PORT}`))
console.log(10)