const Command = require("../Command");
const HelpCommand = require("../Command/HelpCommand");
const ExampleCommand = require("../Command/ExampleCommand");
const util = require("util");

class CommandFactory {
  createCommand(type, name, aliases) {
    switch (type) {
      case "help":
        return new HelpCommand(name, aliases);
      case "example":
        return new ExampleCommand(name, aliases);
      default:
        return new Command(name, aliases);
    }
  }
}

class CommandsManager {
  constructor() {
    this.commandsHashMap = {};
    this.factory = new CommandFactory();
  }

  getCommand(name) {
    const com = this.commandsHashMap[util.isString(name) ? name.toLowerCase().trim() : name];
    if (com) {
      return com;
    }
    return false;
  }

  buildCommands() {
    this.addCommand("help", "help", ["sos", "issue"]);
    this.addCommand("example", "example", ["demo", "test"]);
  }

  addCommand(type, name, aliases) {
    const command = this.factory.createCommand(type, name, aliases);
    this.commandsHashMap[name] = command;
    for (const alias of aliases) {
      this.commandsHashMap[alias] = command;
    }
    console.log(this.commandsHashMap);
  }
}

const commands = new CommandsManager();

module.exports = commands;
