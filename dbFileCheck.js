import fs from "fs";
import {exit} from "process";

export default function dbFileCheck()
{
    if(!fs.existsSync("db.json"))
    {
        console.log("The file doesnot exists");
        exit(1);
    }
}