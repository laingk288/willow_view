const express = require('express'); //importing module
const app = express() //define that app is using the function of express 
config =require('./config'); //want to connect database to index.js
const RotationPlanner= require('./models/rotationplanner'); //importing the models folder
const Advertisement = require('./models/advertisement');//imported advertisement in models folder
const GalleryPhoto = require('./models/gallery');
const cors = require('cors');
const multer  = require('multer');

//add a middleware for cors
app.use(cors());
app.use(express.static('uploads')); //made uploads folder public 
//Created the server, moved to the bottom of the code

//Test the database connection
config.authenticate().then(()=>{
    console.log('Database is connected!')
}).catch((err)=>{
    res.status(500).send(err);
});

//Adding a middleware
    //for requests that go through the body w urlencoded//
app.use(express.urlencoded(({extended:false})));
    //for requests that go through the body in JSON format
app.use(express.json());

//config multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/forsalepics')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage: storage })

//Add HTTP Routes   

    //Add a HOME route to know when our application is failing due to a database problem
app.get('/', function(req, res){
    res.send('Welcome to my server');
});

//GET ALL
    //Add GET route, ROTATION PLANNER to retrieve info to be shown on the browser
app.get('/rotationplanner', (req,res) => {
    RotationPlanner.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err)
    });
});
    //Add GET route, ADVERTISEMENT (FORSALE) to retrieve info to be shown on the browser
app.get('/forsale', (req, res) => {
    Advertisement.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err)
    });
} );
    //Add GET route, GALLERY to retrieve info to be shown on the browser
app.get('/gallery', (req,res) => {
    GalleryPhoto.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err)
    });
});

//GET by ID
    //Add GET route, ROTATION PLANNER to retrieve info by Field ID
app.get('/rotationplanner/:field_id', (req,res)=> {

    let id = req.params.field_id;

    RotationPlanner.findByPk(id).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err)
    });
});
    //Add GET route, ADVERTISEMENT (FORSALE) to retrieve info by Equipment ID
app.get('/forsale/:equipment_id', (req, res) => {

    let ad = parseInt(req.params.equipment_id);

    Advertisement.findByPk(ad).then((result) =>{
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err)
    });
});
    //Add GET route, GALLERY to retrieve info by Image ID
app.get('/gallery/:image_id', (req,res) => {

    let mediaId = req.params.image_id;

    GalleryPhoto.findByPk(mediaId).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//PATCH by ID
    //Add PATCH Route, ROTATION PLANNER to update some information about an entity
app.patch('/rotationplanner/:field_id', (req,res)=>{

    let fieldId = parseInt(req.params.field_id);

    RotationPlanner.findByPk(fieldId).then((result)=> {
        if(result) {
            Object.assign(result,req.body)
            result.save().then(()=>{
                res.status(200).send(result);
            })
        }
    }).catch((err)=>{
        res.status(500).send(err);
    })
});
    //Add PATCH Route, ADVERTISEMENT (FOR SALE) to update some information about an entity
app.patch('/forsale/:equipment_id', (req, res) =>{

    let equipmentId = parseInt(req.params.equipment_id);

    Advertisement.findByPk(equipmentId).then((result) =>{
        if(result) {
            Object.assign(result,req.body)
            result.save().then(() => {
                res.status(200).send(result);
            })
        }
    }).catch((err) => {
        res.status(500).send(err);
    })
});

  //Add POST Route, ADVERTISEMENT(FOR SALE) to ADD some information about advertisement
app.post('/forsale',upload.single('image'), function(req,res){
    
    let advertisementData = req.body;

    if(req.file) {
        advertisementData.image = req.file.filename;
    }
    console.log(advertisementData);

    Advertisement.create(advertisementData).then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Add DELETE Route, ADVERTISEMENT(FOR SALE) to REMOVE some information about advertisement
app.delete('/forsale/:equipment_id', function (req, res) {

    let saleData = parseInt(req.params.equipment_id);

    //First, need to find equipment item by equipment_id
    Advertisement.findByPk(saleData).then((result) => {
        if(result) {
            //Delete Equipment Item
            result.destroy().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            })
        } else { 
            //Equipment Item Not Found
            res.status(404).send('Equipment item not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Created the server on PORT 3006
app.listen(3006, function(){
    console.log('Server running on port 3006');
});
