import { Config } from './config';
import { pool } from './database';

export const CONFIG = Config.getConfig();

export const DB = pool;
