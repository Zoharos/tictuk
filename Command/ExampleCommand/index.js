const Command = require("../");

class ExampleCommand extends Command {
  init() {
    super.init();
    console.log('command "example" is called');
  }
}

module.exports = ExampleCommand;
