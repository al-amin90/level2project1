import  express, { NextFunction, Request, Response } from 'express'
const app = express()
app.use(express.json())
app.use(express.text())

const logger = (req: Request, res: Response, next:NextFunction) => {
    console.log(req.url, req.method, req.cookies, req.hostname);

    next()
}

app.get('/',logger, (req: Request, res: Response) => {
    // console.log('params', req.params);
        console.log('query', req.query);
  res.send('Hello DEvs./.!')
})

app.post('/',logger, (req: Request, res: Response) => {
    console.log('body', req.body);
    res.json({message:'got the data'})
})

export default app