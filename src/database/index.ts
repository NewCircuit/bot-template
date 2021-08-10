import { Pool } from 'pg';
import { CONFIG } from '../globals';
import * as utils from '../utils';

export const pool = new Pool({
  host: CONFIG.database.host,
  database: CONFIG.database.database,
  port: CONFIG.database.port,
  user: CONFIG.database.user,
  password: CONFIG.database.password,
  max: CONFIG.database.max,
});

pool.connect(async (error: Error) => {
  if (error) {
    utils.getLoggerModule('pool')
      .error('Error acquiring client', error.stack);
  }
});
