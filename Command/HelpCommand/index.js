const Command = require("../");

class HelpCommand extends Command {
  init() {
    super.init();
    console.log('command "help" is called');
  }
}

module.exports = HelpCommand;
