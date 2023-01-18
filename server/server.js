import { app } from "./app.js";
import {config} from "dotenv"
import { connectionDatabase } from "./config/database.js";

config({
    path:"./config/config.env"
})


connectionDatabase();

app.listen(process.env.PORT, ()=>{
    console.log("Server Is running on port " + process.env.PORT);
});