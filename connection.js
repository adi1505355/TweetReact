//In this module we are establishing the connection to DB Server on mlab
const mongoose = require('mongoose');

var connection = function(){
console.log("Connecting to MLab Servers...");

mongoose.connect("mongodb://AddURL_AND_PASSWORD", //adding %40 instead of @  in password
{
  useNewUrlParser : true,
  useUnifiedTopology: true
},function(error){
  if(error){
    console.log("Connection failed with the following error :: "+error);
  }
})};

module.exports = connection;
