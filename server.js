var express = require('express');
var app = express();

// Para llamar los archivos css y js públicos desde tu index.html debes
// declarar las rutas como estáticas de la siguiente forma
app.use('/public/css', express.static(__dirname + '/css'));
app.use('/public/js', express.static(__dirname + '/js'));
app.use('/public/img', express.static(__dirname + '/img'));
app.use('/public/views', express.static(__dirname + '/views'));
app.use('/public/node_modules', express.static(__dirname + '/node_modules'));

app.get('/',function(request,res){
    // el método es sendFile (con F mayúscula) y debes agregar
    // la variable de entorno llamada __dirname que te da la ruta de
    // de la raíz en tu actual proyecto
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
  console.log('El servidor Esta En llamas!');
});
