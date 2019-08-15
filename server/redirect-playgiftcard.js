module.exports = (req, res, next) => {
  if (req.hostname === 'playgiftcard.com') {
    res.redirect('https://rapido.com/en-us/google-play-gift-card');
  } else {
    next();
  }
};
