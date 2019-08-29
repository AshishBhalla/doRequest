// ****************************************************************************
// This is the main processing module
// Based upon the arguement passed from input, it will either fecth a particular
// id(getFilteredData) or will fetch top 10 records(getTopTen).
// ****************************************************************************


var { getFilteredData, getTopTen, writeData} = require('./middle');


if(process.argv[2] === 'filterData')
{
    getFilteredData((err, data) => 
    {
        if (err) 
        {
            console.log('Not able to fecth data from api call!')
            console.log(err);
        }
        else{
            writeData('filteredData.json',data, (error, message) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(message);
                }
            })
        }
    })
}
else if(process.argv[2] === 'topTen')
{
    getTopTen((err, data) => 
    {
        if (err) 
        {
            console.log('Not able to fecth data from api call!')
            console.log(err);
        }
        else{
            writeData('topTen.json',data,(error,message) =>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(message);
                }
            })
        }
    })
}
else
{
    console.log('Invalid Function!')
    return;
}