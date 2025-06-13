const allowedIp = '123.45.67.89'; // Replace this with your allowed IP

app.use((req, res, next) => {
  const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (userIp === allowedIp) {
    next();
  } else {
    res.status(403).sendFile(__dirname + '/403.html'); // Serve your 403.html file
  }
});
