
const express = require ("express")
const app = express()

const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")

const usuario = require("./models/usuario")
const { removeData } = require("jquery")

//Configurar handlebar para
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

//Configurar o motor de tamplate handlebar
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/login',function(req,res){
    res.render('formulario')
})

app.use('/static', express.static(__dirname + '/public'));

app.listen(3000);


//esse bloco é disparado pelo enviar do formulário

app.post('/cadUsuario',function(req,res){
    usuario.create({
        nome:req.body.nome,
        senha:req.body.senha    
    }).then(function(){
        res.send("Cadastrado com Sucesso")
    }).catch(function(erro){
        res.send("Erro"+erro)
    })

})
app.get('/', function (req,res){
    res.render ('formulario')

})

app.get('/doeAgora', function(req,res){
    res.send ('Boa noite, doe agora')
})

app.get('/cadastro',function(req,res){
    res.send ('Faça seu Login')
})
