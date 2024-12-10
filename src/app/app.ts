import express, { NextFunction, Request, Response } from 'express'
const app = express()

// parser
app.use(express.json())
app.use(express.text())

//router
const userRouter = express.Router()

userRouter.get('/api/v1')

//middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);

    next()
}

// params
app.get('/', logger, (req: Request, res: Response) => {
    // console.log(req.query);         
    res.send('Hello wdd d orld')
})

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req);
    res.json({
        message: "Successfully Received data "
    })
})
// start new way this
export default app;