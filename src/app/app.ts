import  express, { Request, Response } from 'express'
const app = express()
app.use(express.json())
app.use(express.text())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello DEvs./.!')
})

app.post('/', (req: Request, res: Response) => {
    console.log('body', req.body);
    res.json({message:'got the data'})
})

export default app