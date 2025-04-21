class OtpMiddleware {
  use(req, res, next) {
    const otp = req.headers['x-otp'];
    if (!otp || otp !== '123456') { // For demo, OTP is hardcoded. Replace with real validation.
      return res.status(401).json({ message: 'Invalid or missing OTP' });
    }
    next();
  }
}

module.exports = { OtpMiddleware };
