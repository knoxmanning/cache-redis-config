const config = require('./config');

function parseConfig(redisConfig) {
  const parsedConfig = {};

  if (redisConfig.host) {
    parsedConfig.host = redisConfig.host;
  } else if (process.env.REDIS_HOST) {
    parsedConfig.host = process.env.REDIS_HOST;
  }

  if (redisConfig.port) {
    parsedConfig.port = redisConfig.port;
  } else if (process.env.REDIS_PORT) {
    parsedConfig.port = parseInt(process.env.REDIS_PORT, 10);
  }

  if (redisConfig.db) {
    parsedConfig.db = redisConfig.db;
  } else if (process.env.REDIS_DB) {
    parsedConfig.db = parseInt(process.env.REDIS_DB, 10);
  }

  if (redisConfig.password) {
    parsedConfig.password = redisConfig.password;
  } else if (process.env.REDIS_PASSWORD) {
    parsedConfig.password = process.env.REDIS_PASSWORD;
  }

  if (redisConfig.tls) {
    parsedConfig.tls = redisConfig.tls;
  } else if (config.useTls) {
    parsedConfig.tls = {
      enabled: true,
      insecureSkipVerify: false,
    };
  }

  return parsedConfig;
}

module.exports = parseConfig;