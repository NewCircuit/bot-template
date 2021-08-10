import { LogLevel, SapphireClient } from '@sapphire/framework';
import { CONFIG } from './globals';
import * as utils from './utils';

const bot = new SapphireClient({
  logger: {
    level: LogLevel.Info,
  },
  defaultPrefix: CONFIG.bot.prefix,
  id: CONFIG.bot.id,
});

bot.once('ready', async () => {
  bot.logger.info(`${bot?.user?.username} is online!`);
});

bot.login(CONFIG.bot.token).catch((err) => {
  utils.getLoggerModule('login').error(err);
});
