const fs = require('fs')
const dataPlayer = require('./data/players')
module.exports = {
    login,
    
    getSegments,
    updateScore
}


//var myJson = {
    //key: "myvalue"
//};

//fs.writeFile( "filename.json", JSON.stringify( myJson ), "utf8", yourCallback );

// And then, to read it...
//myJson = require("./filename.json");
    function login (data) {
        console.log(data)
      const {name, password} = data
      const player = searchPlayer(name, password)
      if(player.length == 0) return createPlayer(name, password)
      return player[0]
    }
   
    function getSegments () {
        const segments = []
        for (let i = 0; i<16; i++){
            const count = rand()
            segments.push(count)
        }
        return segments
    }
    function updateScore (data) {
        const {id, score} = data
        let player;
        dataPlayer.forEach((pl) => {
            if(pl.id == id){
                pl.score = score
                player = pl
            } 
        })
        return player
    }

    function searchPlayer(name, password) {
       return dataPlayer.filter(player => {
            if(player.name == name && player.password == password) return player
        })
    }

    function createPlayer(name, password) {
        const player = {
            id: Date.now(),
            name,
            password,
            score: 0
        }
        dataPlayer.push(player)
        return player
    }
    function rand() {
        return 100 * Math.floor(900 * Math.random() + 10); 
    }