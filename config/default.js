module.exports = {
  port: 4001,
  session: {
    secret: 'yueblog',
    key: 'yueblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/yueblog'
};
