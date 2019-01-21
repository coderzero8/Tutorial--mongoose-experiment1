var mongoose = require('mongoose');
var db= mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/mycustomers',{useNewUrlParser:true},(err,db)=>{
   if(err){
       return console.log("error present")
   }else{
       console.log("Mongo db connected");
   }
   //db.close();

});


db.on('error', console.error.bind(console,' connection error;'));

db.once('open', function(){
   console.log(" Connection Successfully")
  // Define Schema
   var BookSchema = mongoose.Schema({
     name:String,
     price:Number,
     quantity:Number,
   })
  // compile schema model
   var Book = mongoose.model('Book', BookSchema,'bookstore')
   var books =[
      {name:'Book4',price:12.5,quantity:3   },
      {name:'Book5',price:12.5,quantity:3   },
      {name:'Book6',price:12.5,quantity:3   }
  ];

  // save multiple documents to colletions

  Book.collection.insertMany(books,function(err,docs){
    if(err){
      return console.error(err)
    }else{
      console.log("Multiple Documents Inserted in the collection")
    }
  })

});
