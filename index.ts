#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Doller
let myPin = 1234;
console.log("Your current balance is " + myBalance);

let pinAnswer = await inquirer.prompt(
    [   
        {
            name: "pin",
            type: "number",
            message: "enter your pin",
        }
    ]
);

// 12345 === 1234 - false
if (pinAnswer. pin === myPin) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [   
            {
                name: "operation",
                type: "list",
                message: "please select option",
                choices: ["withdraw", "check balance"]
            }
        ]
    );
    
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [   
                {
                    name: "amount",
                    type: "number",
                    message: "enter your amount",
                }
            ]
        );
        // =, -=, +=
        myBalance -= amountAns.amount;

        console.log("Your remaining balance is: " + myBalance);

    } else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalance)
    };

}

else {
    console.log("Incorrect pin number");
};



