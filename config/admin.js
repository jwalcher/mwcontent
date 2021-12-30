module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8819c8baca0fc16ee97f60e73c0ece04'),
  },
});
