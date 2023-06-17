import { AppDataSource } from "./data-source"
import {Resource } from "./entity/Resource"
import * as express from "express"
import router from './routes/resourceRoute'



AppDataSource.initialize().then(async () => {
const app:express.Application  = express()
app.use(express.json())

app.use('/', router)


app.listen(3000, ()=>{
    console.log('listening on port 3000 ')
})

}).catch(error => console.log(error))
