import chalk, { Chalk } from "chalk";

console.log(chalk.red("hello"));
console.log(chalk.red("hello") + "!" + chalk.blue(" world"));
console.log(chalk.red.bgGreen.bold("hello"));
console.log(chalk.red("hello", "world"));
console.log(chalk.red("hello", chalk.underline("world")));
console.log(chalk.rgb(255, 255, 0).underline("wscfan"));
console.log(chalk.hex("#f0f").bold("wscfan"));

const cuscomChalk = new Chalk({ level: 1 });
console.log(cuscomChalk.hex("#f20000")("good"));
