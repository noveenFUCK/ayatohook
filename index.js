var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded((extended: true)));


var webhook = process.env.AYATO_WEBHOOK;

app.get('/', (req, res) => {
	res.sendFile(__dirname = '/index.htm');
});

app.post('/webhook', (req,res) => {
	request({
		method: 'POST',
		url: webhook,
		json: {
			"content": req.body.msg,
			"username": "ORE SAMA!"
		}
	})

	res.redirect('/');
});


app.listen(80, () => {
	conssole.log("ORE SAMA!");
});