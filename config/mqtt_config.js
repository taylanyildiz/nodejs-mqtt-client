const mqtt = require('mqtt');
const config = require('./config.js');


const mqttClient = mqtt.connect(config.env.mqtt.host,config.env.mqtt.options);

mqttClient.on('connect',()=>{
    console.log('Connected Mqtt');
    mqttClient.subscribe('taylan/#',function(err){
        if(!err){
            console.log('Subscribed taylan/#');
        }
    });
});

mqttClient.on('message',(topic,message)=>{
    console.log(message.toString());
});


module.exports = mqttClient;