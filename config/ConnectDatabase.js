var mongoose= require('mongoose');


const mongoDbUri='mongodb://localhost:27017/TodoDB';

mongoose.connect(mongoDbUri,{ useNewUrlParser: true }).then(()=>{
    console.log('*************Connect Successful!**************')
}).catch((error)=>{
    console.log(error)
});



