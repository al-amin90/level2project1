"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
//router
const userRouter = express_1.default.Router();
userRouter.get('/api/v1');
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// params
app.get('/', logger, (req, res) => {
    // console.log(req.query);         
    res.send('Hello wdd d orld');
});
app.post('/', logger, (req, res) => {
    console.log(req);
    res.json({
        message: "Successfully Received data "
    });
});
// i am preparaning for my exam 
exports.default = app;
