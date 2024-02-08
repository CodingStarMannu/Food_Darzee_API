const express = require('express');
const app = express();





const port =  4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes'));


app.listen(port,(error)=>{
    if(error){
        console.log(`Error in running Server, Error: ${error}`);
    }
    console.log(`Server is running on port ${port}`);

})