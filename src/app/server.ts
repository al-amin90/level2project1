import { Server } from "http";
import app from "./app";

const PORT = 5000;

let server: Server;

function bootstrap() {
  const server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}
bootstrap();
