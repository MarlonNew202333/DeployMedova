const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcryptjs');
const schemasUsuario =  require('../schemas/schemasUsuario');
const { compare } = require('bcryptjs');
router.get('/registro', (req,res) =>{
    res.render('registro');
})

router.post('/registro', async(req,res) =>{
    try{
        
        console.log(req.body);
        const { error } = schemasUsuario.validate(req.body) ;
        if (error) {
            req.flash('error', error.details[0].message);
            res.redirect('/registro');
        }
        else {


            const hashContraseña = bcrypt.hashSync(req.body.password, 10);
            const { nombre, codigo, username, rol } = req.body
           const usuario = {
            nombre,
            codigo,
            username,
            password: hashContraseña,
            rol
           }
      
    
        await pool.query('INSERT INTO usuario set ?', [usuario])
        req.flash('success', 'Usuario registrado correctamente')
        res.redirect('/login');
        
        }}
     
       

    catch(error){
        res.status(400).send('Error FATAL:' + error)
    }
 
})

module.exports = router;