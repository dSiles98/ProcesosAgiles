const express=require('express');
const router=express.Router();
const mysqlConection= require('../conexion');

var app = express();
var path = require('path');
var fs = require('fs');
var mediaserver = require('mediaserver');
var multer = require('multer');

//aqui empieza el codigo para mostrar imagenes y audio

var opcionesMulter = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../audio'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: opcionesMulter
})

app.use(express.static('public'));
app.use('/jquery', express.static(path.join(__dirname, '../node_modules', '../jquery', '../dist')));

// la ruta debe ser por ejemplo: http://localhost:3000/audio/Michael Jackson Billie Jean.mp3
// y para imagenes lo mismo: http://localhost:3000/imagenes/enrique-cosasdelamor.jpg

router.get('/audio/:nombre', (req,res) =>{
    var cancion = path.join(__dirname, '../audio', req.params.nombre);
    console.log(req.params.nombre);
    mediaserver.pipe(req, res, cancion);
});


router.get('/imagenes/:nombre', (req,res) =>{
    var imagen = path.join(__dirname, '../imagenes', req.params.nombre);
    console.log(req.params.nombre);
    mediaserver.pipe(req, res, imagen);
});


//fin codigo iamgenes y audio









//aqui empiezan las consultas

// Seleccionar TODOS LOS ARTISTAS es la pagina de inicio

router.get('/', (req,res) =>{
    mysqlConection.query('SELECT * FROM artista ORDER BY nombreArt', (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//SELECCIONA los ALBUNES del artista con ID: algo
router.get('/album/:idArtista', (req,res) =>{
    const {idArtista}= req.params;
    mysqlConection.query('SELECT * FROM album WHERE idArtista=? ORDER BY nombreAlb',[idArtista], (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//SELECCIONA las canciones del album perteneciente a un artista con IDALBUM: algo
router.get('/cancion/:idAlbum', (req,res) =>{
    const {idAlbum}= req.params;
    mysqlConection.query('SELECT * FROM cancion WHERE idAlbum=? ORDER BY titulo',[idAlbum], (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// Filtra los artistas con el nombre: algo , se usa en el buscador de artistas
router.get('/artista/:nombreArt', (req,res) =>{
    const {nombreArt}= req.params;
    mysqlConection.query('SELECT * FROM artista WHERE nombreArt like ? ORDER BY nombreArt',['%'+nombreArt+'%'], (err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


module.exports=router;