const request = require('request');
require('dotenv').config()
deviceToken = process.env.token;
OAuth = process.env.OAuth;

function generaPostData(){
    data = new Date().toGMTString()
    var post_data = {
        device: deviceToken,
        date: data,
        signals: []
    };
    return post_data;
}

function inserisciValore(post_data){
    valore = Math.floor(Math.random()*100);
    var signal_info = {
        name: "numeroCasuale",
        value: valore
    };
    post_data.signals.push(signal_info);
    return valore;
}

function generaOpzioni(post_data){
    var options = {
        uri: 'https://api.databoom.com/v1/signals/push',
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + OAuth
        },
        json: post_data
    };
    return options;
}

function invia(options){
    request(options, (error, response, body) => {
        if (error){
            console.log(`ERRORE: ${error}`);
            return
        }
        //console.log("ok");
    });
}

loop = setInterval(()=>{
    post_data = generaPostData();
    for (i=0;i<1;i++){
        valore = inserisciValore(post_data);
        console.log(valore);
    }
    opzioni = generaOpzioni(post_data);
    invia(opzioni);
}, 10000)

