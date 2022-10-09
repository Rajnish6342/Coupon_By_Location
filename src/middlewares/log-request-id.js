const logRequest = () => (req, res, next) => {
  const reqIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip || 'NA';

  const ctx = {
    reqIp,
  };

  req.ctx = ctx;

  next();
};

module.exports = { logRequest };
