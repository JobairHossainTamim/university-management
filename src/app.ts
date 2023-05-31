import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app: Application = express()

//
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }))
app.use(bodyParser.raw({ type: 'application/json' }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app
