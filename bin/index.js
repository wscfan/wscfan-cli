#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const args = hideBin(process.argv);
const cli = yargs(args);
const dedent = require("dedent");

cli
  .usage("Usage: wscfan-cli [command] <options>")
  .demandCommand(
    1,
    "A command is required. Pass --help to see all available commands and options."
  )
  .fail((err) => {
    console.log(err);
  })
  .strict()
  .recommendCommands()
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .epilogue(
    dedent` for more information, see https://github.com/wscfan/wscfan-cli`
  )
  .options({
    debug: {
      type: "boolean",
      describe: "Bootstrap debug mode",
      alias: "d",
    },
  })
  .option("registry", {
    type: "boolean",
    // hidden: true,
    type: "string",
    describe: "Define global registry",
    alias: "r",
  })
  .group(["debug"], "Dev Options:")
  .group(["registry"], "Extra Options")
  .command(
    "init [name]",
    "Do init a project",
    (yargs) => {
      yargs.option("name", {
        type: "string",
        describe: "Name of a project",
        alias: "n",
      });
    },
    (argv) => {
      console.log(argv);
    }
  )
  .command({
    command: "list",
    aliases: ["ls", "la", "ll"],
    describe: "List local packages",
    builder: (yargs) => {},
    handler: (argv) => {
      console.log(argv);
    },
  }).argv;
