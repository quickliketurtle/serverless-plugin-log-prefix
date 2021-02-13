const chalk = require('chalk');

class LogPrefixPlugin {
  constructor(serverless, options) {
    serverless.cli.log = (message, entity, opts) => {
      const underline = opts ? opts.underline : false;
      const bold = opts ? opts.bold : false;
      const color = opts ? opts.color : null;

      let print = chalk.yellow;

      if (color) print = chalk.keyword(color);
      if (underline) print = print.underline;
      if (bold) print = print.bold;

      console.log(`${serverless.service.service} :: ${entity || 'Serverless'}: ${print(message)}`);
    };
  }
}

module.exports = LogPrefixPlugin;
