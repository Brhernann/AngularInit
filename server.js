var express = require('express');
var app = express();

// Para llamar los archivos css y js públicos desde tu index.html debes
// declarar las rutas como estáticas de la siguiente forma
app.use(express.static('public'));



app.get('/',function(request,res){
    // el método es sendFile (con F mayúscula) y debes agregar
    // la variable de entorno llamada __dirname que te da la ruta de
    // de la raíz en tu actual proyecto
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
  console.log('El servidor Esta En llamas!');
});
