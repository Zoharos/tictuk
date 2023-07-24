const commands = require("./CommandFactory");

commands.buildCommands();

commands.getCommand("help").init();
commands.getCommand("sos").init();

console.log("------------------------");

commands.getCommand("example").init();
commands.getCommand("demo").init();
