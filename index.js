const request = require('request');
require('dotenv').config()

var post_data = {
    device: process.env.token,
    date: new Date().toGMTString(),
    signals: []
};

var signal_info = {
    name: "numeroCasuale",
    value: Math.random(0,100)
};
post_data.signals.push(signal_info);

var options = {
    uri: 'https://api.databoom.com/v1/signals/push',
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + process.env.chiaveAPI
    },
    json: post_data
};

request(options, (error, response, body) => {
    if (error){
        console.log(`ERRORE: ${error}`);
        return
    }
    console.log("RISPOSTA: ");
    console.log(body);
});