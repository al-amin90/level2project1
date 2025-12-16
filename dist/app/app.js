"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", userRouter);
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "Successfully",
        data: user,
    });
});
userRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Successfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    // console.log(req.url, req.method, req.cookies, req.hostname);
    next();
};
app.get("/", (req, res, next) => {
    try {
        res.send('Hello Worlds');
    }
    catch (error) {
        // console.log(error);
        // res.status(400).json({
        //     success: false,
        //     message: 'failed to get'
        // })
        next(error);
    }
});
app.post("/", logger, (req, res) => {
    console.log("body", req.body);
    res.json({ message: "got the data" });
});
//global error handler
app.use((error, req, res, next) => {
    console.log(error);
    res.status(400).json({
        success: false,
        message: "failed to get",
    });
});
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found'
    });
});
exports.default = app;
