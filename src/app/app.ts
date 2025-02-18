import express, { NextFunction, Request, Response } from 'express'
const app = express()

//parsers
app.use(express.json())
app.use(express.text())

//middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next()
}

app.get('/', logger, (req: Request, res: Response) => {
    console.log(req.query.email);
    res.send('this is the real path')
})


app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send({
        message: "successfully receive data"
    })
})

export default app;