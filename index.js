/**
 * External libraries
 */
const
    express = require('express'),
    http = require('http'),
    app = express(),
    bodyParser = require('body-parser'),
    // When running the server can pass in the PORT as an argument (environment variable)
    port = process.env.PORT || 3000;
