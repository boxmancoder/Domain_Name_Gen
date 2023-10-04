// Hello

let pronoun = ["the", "your", "their", "this","whos"];
let adj = ["big", "nice", "handsome", "strong", "beautiful", "bad", "happy", "friendly", "smart", "calm", "tall", "dark", "cute"];
let noun = ["pizza", "house", "florida", "hamburger", "human", "plate", "shoe", "puupy", "kitty", "fire", "flower", "fish", "egg"];

 function generateDomain(){
    for(let p = 0; p < pronoun.length; p++){
        for(let a = 0; a < adj.length; a++){
            for( let n = 0; n < noun.length; n++){
               console.log(pronoun[p] + adj[a] + noun[n] + ".com");
            }
        }
    }
 }

 generateDomain();