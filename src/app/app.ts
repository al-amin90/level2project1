import { error } from 'console'
import express, { NextFunction, Request, Response } from 'express'
const app = express()

//parsers
app.use(express.json())
app.use(express.text())

//middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method);
    next()
}

// creating diffarent route useing express.Router 
const userRouter = express.Router();
const coursesRouter = express.Router();

app.use('/api/v1', userRouter)
app.use('/api/v1/courses', coursesRouter)

userRouter.get('/users', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
        success: true,
        message: "user is created successfully",
        data: user
    })
})

coursesRouter.post('/create-course', (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);

    res.json({
        success: true,
        message: "user is created successfully",
        data: course
    })
})


// the error
app.get('/', logger, async (req: Request, res: Response, next: NextFunction) => {

    try {
        res.send(something)

    } catch (error) {

        next(error)
    }
})


app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send({
        message: "successfully receive data"
    })
})



// wrong route error show
app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    })
})

//global error
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if(error){
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
})

export default app;