import  express, { NextFunction, Request, Response } from 'express'
const app = express()
app.use(express.json())
app.use(express.text())

const userRouter = express.Router()

app.use('/api/v1/users', userRouter)
app.use('/api/v1/courses', userRouter)

userRouter.get('/create-user', (req:Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
        success: true,
        message: 'Successfully',
        data: user
    })
})
userRouter.post('/create-course', (req:Request, res: Response) => {
    const course = req.body;
    console.log(course);

    res.json({
        success: true,
        message: 'Successfully',
        data: course
    })
})




const logger = (req: Request, res: Response, next:NextFunction) => {
    // console.log(req.url, req.method, req.cookies, req.hostname);

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