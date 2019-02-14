const express = require('express');
const router = express.Router();
const Todos=require('../models/Todos');

/* POST Save Todo listing. */
router.post('/', function(req, res, next) {


    const todo= new Todos( {
        "name": req.body.name,
        "time": new Date(req.body.time),
        "status": false
    });

    todo.save().then((result)=>{

        res.status(200).send(result);

    }).catch((err)=>{

       res.status(500).send(err);

    })

});

// get all doc todo
router.get('/',(req,res,next)=>{
    Todos.find({}).then((data)=>{

        res.status(200).json(data);

    }).catch((err)=>{

        console.log(err)

    })
});

//get 1 doc  from data

router.get('/:id',(req, res, next)=>{
   const {id}=req.params;

   Todos.findOne({ _id:id }).then((data)=>{
       res.status(200).send(data);
   }).catch((err)=>{
       res.status(404).send(err);
   })
});


//edit a doc
router.put('/:id',(req, res, next)=>{
    const doc=req.body;

    Todos.findOneAndUpdate({ doc }).then((data)=>{

        res.status(200).send(data);

    }).catch((err)=>{

        res.status(404).send(err);
    })
});


// delete 1 doc by id
router.delete('/:id',(req,res,next)=>{
        Todos.deleteOne({ _id:req.params.id }).then((data)=>{


            if (data){
                res.status(200).send('Delete Successful');
            }


        }).catch((err)=>{

            console.log(err);

        });
});



module.exports = router;
