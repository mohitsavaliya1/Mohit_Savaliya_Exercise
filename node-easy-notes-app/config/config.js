
let config = {
  production: {
    url: 'mongodb://<user>:<pwd>@apollo.modulusmongo.net:27017/db'
  },
  default: {
    url: 'mongodb://127.0.0.1:27017/db'
  }
};

exports.get = (env) => {
  return config[env] || config.default;
}
