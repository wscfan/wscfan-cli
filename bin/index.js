#!/usr/bin/env node

const commander = require("commander");
const pkg = require("../package.json");

// 获取commander单例
// const { program } = commander;

const program = new commander.Command();
program
  .name(Object.keys(pkg.bin)[0])
  .usage("<command> [options]")
  .version(pkg.version)
  .option("-d, --debug", "是否开启调试模式", false)
  .option("-e, --envName <envName>", "获取环境变量名称");

// command注册命令
const clone = program.command("clone <source> [destination]");
clone
  .description("clone a repository")
  .option("-f, --force", "是否强制克隆")
  .action((source, destination, cmdObj) => {
    console.log("do clone", source, "to", destination, cmdObj.force);
  });

// addCommand注册子命令
const service = new commander.Command("service");
service
  .command("start [port]")
  .description("start service at some port")
  .action((port) => {
    console.log("do service start", port);
  });
service
  .command("stop")
  .description("stop service")
  .action(() => {
    console.log("stop service");
  });
program.addCommand(service);

program
  .command("install [name]", "install package", {
    // executableFile: "wscfan-cli",
    // isDefault: true,
    // hidden: true
  })
  .alias("i");

program
  .argument("<cmd>", "command to run")
  .argument("[options]", "options for command")
  .action((cmd, options) => {
    console.log(cmd, options);
  });

program.parse(process.argv);

// console.log(program.getOptionValue("debug"));
// console.log(program.getOptionValue("envName"))
// program.outputHelp();
// console.log(program.opts());
