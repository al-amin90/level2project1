import express, { NextFunction, Request, Response } from "express";
const app = express();
app.use(express.json());
app.use(express.text());

const userRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", userRouter);

userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "Successfully",
    data: user,
  });
});

userRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "Successfully",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.url, req.method, req.cookies, req.hostname);

  next();
};

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('Hello Worlds');
  } catch (error) {
    // console.log(error);
    // res.status(400).json({
    //     success: false,
    //     message: 'failed to get'
    // })
    next(error);
  }
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log("body", req.body);
  res.json({ message: "got the data" });
});

//global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  res.status(400).json({
    success: false,
    message: "failed to get",
  });
});

app.all('*', (req:Request, res:Response) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found'
    })
})

export default app;
