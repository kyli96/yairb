/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Sequelize from 'sequelize';
import config from '../config';
import logger from '../logger';

const mysql = config.mysql;
mysql.logging = sql => {
  logger.debug(sql);
};
const sequelize = new Sequelize(
  mysql.database,
  mysql.username,
  mysql.password,
  mysql,
);

export default sequelize;
