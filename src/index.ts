import { AppDataSource } from "./data-source"
import * as express from "express"
import router from './routes/employeeRoute'
import entryrouter from './routes/apiRoute'
import * as dotenv from 'dotenv'
import * as morgan from 'morgan'




AppDataSource.initialize().then(async () => {
const app:express.Application  = express()
app.use(express.json())
app.use(morgan('dev'))
dotenv.config()

app.use('/', router)
app.use('/api', entryrouter)


app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT} `)
})

}).catch(error => console.log(error))
