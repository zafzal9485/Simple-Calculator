#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome To My Calculator.\n");
let answers = await inquirer.prompt([
    { message: "Enter The First Number:", type: "number", name: "number1" },
    { message: "Enter The Second Number:", type: "number", name: "number2" },
    { message: "Choose The Operation Between These 2 Numbers:", type: "list", name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponent"]
    }
]);
console.log(answers);
if (answers.operator === "Addition") {
    console.log(`The Sum of These 2 Numbers is: ${answers.number1 + answers.number2}`);
}
else if (answers.operator === "Subtraction") {
    console.log(`The Difference Between These 2 Numbers is: ${answers.number1 - answers.number2}`);
}
else if (answers.operator === "Multiplication") {
    console.log(`The Product Of These 2 Numbers is: ${answers.number1 * answers.number2}`);
}
else if (answers.operator === "Division") {
    console.log(`The Quotient Of These 2 Numbers is: ${answers.number1 / answers.number2}`);
}
else if (answers.operator === "Modulus") {
    console.log(`The Remainder After Dividing These These 2 Numbers is: ${answers.number1 % answers.number2}`);
}
else if (answers.operator === "Exponent") {
    console.log(`The Result of Putting The Second Number As Exponent Of The First Number is: ${answers.number1 ** answers.number2}`);
}
else
    (console.log("Invalid Operation"));
