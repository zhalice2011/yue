module.exports = {
  port: 4002,
  session: {
    secret: 'yueblog',
    key: 'yueblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/yueblog'
};
