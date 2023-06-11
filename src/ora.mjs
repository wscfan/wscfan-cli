import ora from "ora";

const spinner = ora("Loading0%").start();
spinner.color = "red";
let percent = 0;

let task = setInterval(() => {
  percent += 10;
  spinner.text = "Loading" + percent + "%";
  if (percent >= 100) {
    spinner.stop();
    clearInterval(task);
  }
}, 2000);
