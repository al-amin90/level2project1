"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = 5000;
let server;
app_1.default.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`);
});
// async function bootstrap() {
//     server = app.listen(PORT , () => {
//         console.log(`Example app listening on PORT ${PORT}`)
//     })
// }
// bootstrap();
