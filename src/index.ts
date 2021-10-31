import "dotenv/config";
import http from "http";
import app from "./app";

const App_Port = process.env.App_Port || 3000;
const http_ = new http.Server(app);

http_.listen(App_Port, () => {
    try {
        return console.log("Server started.");
    } catch (err) {
        console.log(err);
    }
});