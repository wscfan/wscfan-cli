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

program.parse(process.argv);

// program.parse();

// addCommand注册命令

// console.log(program.getOptionValue("debug"));
// console.log(program.getOptionValue("envName"))
// program.outputHelp();
// console.log(program.opts());
