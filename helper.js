// ****************************************************************************
// This module will only be used to reuest data from the API
// Functions exported - 
// getData - To fetch data from api
// ****************************************************************************

const request = require('request');

var getData = (options,callback) =>{
    request(options,  (err, res, body) => {
        if (err) {
            callback(err)
        }
        else {
            callback(undefined, body)
        }
    })
}



module.exports = {
    getData
}