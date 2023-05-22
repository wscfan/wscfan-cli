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
  .strict()
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .epilogue(
    dedent` for more information, see https://github.com/wscfan/wscfan-cli`
  ).argv;
