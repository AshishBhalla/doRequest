// ****************************************************************************
// This module will process the data received from the api call
// Functions exported - 
// getFilteredData - To get data for a particular id
// getTopTen - To get top ten records
// writeData -  To write data in a file
// ****************************************************************************


const _ = require('underscore');

const fs = require('fs');
var {getData} = require('./helper');


var userName = 'mralexgray'; 
var id = 6104546;

var options = {
    url: 'https://api.github.com/users/mralexgray/repos',
    headers: {
        'User-Agent': 'request'
    }
};

var getFilteredData = callback =>{
    getData(options, (err, data) => {
        if (err) {
            callback(err)
        }
        else {
            var dataObj = JSON.parse(data);

            // To get data for id 6104546
            // to find id using inbuilt filter
            // var filterData = dataObj.filter(element => element.id === id)

            //to find id using _.findWhere(array,property)
            var filterData = _.findWhere(dataObj,{id:id})

            if(filterData){
                callback(undefined, filterData);
            }
            else{
                callback(`ID ${id} not found!`)
            }
        }
    })
} 

var getTopTen = callback =>{
    getData(options, (err, data) => {
        if (err) {
            callback(err)
        }
        else {
            var dataObj = JSON.parse(data);

            // To get first 10 elements

            var filterData = _.first(dataObj, 10);

            callback(undefined,filterData);
        }
    })
}


var writeData = (filename,data,callback) =>{
    fs.writeFile(filename, JSON.stringify(data), (err) => {
        if (err) {
            callback('Not able to write data in file!');
        }
        else{
            callback(undefined,'Successfully wrote data in file!');
        }
    })
}



module.exports ={
    getFilteredData,
    getTopTen,
    writeData
}