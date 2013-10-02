exports.getCapitalxcommunity = function(req, res){
  //res.send("respond with a resource cars");
  console.log('getCapitalxcommunity');
  var json = JSON.stringify({
    "capitalsByAutonomies": [
        {
            "Autonomie": "Castilla-La Mancha",
            "provincialCapital": [
                "Toledo",
                "Ciudad Real",
                "Albacete",
                "Cuenca",
                "Guadalajara"
            ],
            "images":[
                "./img/toledo.jpg",
                "./img/ciudad-real.jpg",
                "./img/albacete.jpg",
                "./img/cuenca.jpg",
                "./img/guadalajara.jpg"
            ]
        },
        {
            "Autonomie": "Aragón",
            "provincialCapital": [
                "Teruel",
                "Zaragoza"
            ]
        }
    ]
}
);
   res.header("Access-Control-Allow-Origin", "*");
   res.send(json);
};


//Otra construccion de JSON
/*
{
               "Castilla-La Mancha": [
                    {
                        "Capital": "Toledo",
                        "Habitantes": 26,
                        "Foto": "ccc"
                    },
                    {
                        "Capital": "Ciudad Real",
                        "Habitantes": 26,
                        "Foto": ""
                    },
                    {
                        "Capital": "Cuenca",
                        "Habitantes": 26,
                        "Foto": ""
                    },
                    {
                        "Capital": "Albacete",
                        "Habitantes": 26,
                        "Foto": ""
                    },
                    {
                        "Capital": "Guadalajara",
                        "Habitantes": 26,
                        "Foto": ""
                    }
                ]
            }

*/