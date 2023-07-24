class Command {
  constructor(name, aliases) {
    this.name = name;
    this.aliases = aliases;
  }

  init() {
    console.log("Common command is called");
  }
}

module.exports = Command;
