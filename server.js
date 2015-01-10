// create simple web server with node 
 /*var http=require('http');
http.createServer( function (req,res){   // takes request and response bjects
res.writeHead(200,{'contentType':'text/plain'});  // 200 is the state of normal request  content type is pure text not html 
res.end("hello");                   // every request must end 
}).listen(1337,'127.0.0.1');         // port number and ip address of local host
console.log(' node server started ');  // to be viewed in the cmd
// if U press F12 in your chrome and select network Tab U 'll see these data */


var http=require('http');
var fs= require('fs');
http.createServer( function (req,res){  

fs .readFile('index.html',function(err,data){
res.writeHead(200,{'contentType':'text/html'});  
res.end(data); 
}); 
                  
}).listen(1337,'127.0.0.1');         
console.log(' node server started  reading html');
