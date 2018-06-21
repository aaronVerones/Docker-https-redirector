const express = require('express');
const https = require('http-to-https');
const debug = require('debug')('https-redirector');

const app = express();
const port = 80
// don't listen on localhost or any routes under /insecure
app.use(https([/localhost(:\d{1,5})?/], [/\/insecure/], 301));
app.listen(port);
debug(`redirector listening on port ${port}`);
module.exports = app;
