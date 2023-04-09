import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";
import dbFileCheck from "./dbFileCheck.js";

export default async function removeData(info)
{
    dbFileCheck();
    try{

        const answers = await inquirer.prompt([{
            type:"input",
            name:"recordID",
            message:"Enter the recordID",},]);
        
                
        let current;
        info.forEach((element) => {
            if (element.id === answers.recordID) 
            {
                current = element;
                deleteDetails(current, info);
            }
        });
        if(current == undefined)
        {
            console.log("Monisha is cool");
        }
    }
    catch(error)
    {
        console.log("Something wrong ", error);
    }
}


async function deleteDetails(current, info) {
    try {
            let index=info.indexOf(current);
            info.splice(index,1);
            await fs.writeFile("db.json", JSON.stringify(info), function (err) {
            if (err) {
              console.log(err);
            }
            console.log("updated");
          });
      
    } catch (error) {
      console.log("Something went wrong!", error);
    }
  }

  
  

  queryDB(removeData);
