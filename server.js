/*
    http -> modulo indispensabile se voglio creare una comunicazione client-server
    require -> come una comune import
*/
const http = require("http");

/*
    1° parametro -> richiesta arrivata dal client
    2° parametro -> risposta che verrà inviata al client
*/
var server = http.createServer(function(richiesta, risposta){
    /*
        INTESTAZIONE DELLA RISPOSTA
        1* parametro -> numero -> codice di risposta -> 200/404/...
        2* parametro -> oggetto JSON -> insieme di optioni che vogliamo inserire nell'intestazione
    */
    let header = {"Content-Type":"text/plain"};
    risposta.writeHead(200, header);

    //Modificare il contenuto del pacchetto (Posso richiamare write anche più di una volta)
    risposta.write("Hello world!");

    //Informo il server che ho terminato di preparare il pacchetto di risposta
    risposta.end();
});

/*
    FONDAMENTALE SE VOGLIO AVVIARE IL SERVER
*/
server.listen(1337);
console.log("Il server è stato avviato sulla porta 1337");