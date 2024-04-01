//Switch Case 

const seasons = ["Fall", "Spring", "Winter", "Summer"];
let randomIndex = Math.floor(Math.random() * seasons.length);

const season = seasons[randomIndex];

console.log(typeof season);

switch(season){
    case "Fall" :
        console.log("Season = Fall");
        break;
    case "Spring":
        console.log("Season = Spring");
        break;
    case "Winter":
        console.log("Season = Winter");
        break;
    case "Summer":
        console.log("Season = Summer");
        break;
}


