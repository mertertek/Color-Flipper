

let color;

function randomNumber(){
    
    random = parseInt(Math.random()*10)
    console.log(random)
    if(random == 0){    
        color="white"
    }else if (random == 1){
        color="gray"
    }else if (random == 2){
        color="blue"
    }else if (random == 3){
        color="cyan"
    }else if (random == 4){
        color="red"
    }else if (random == 5){
        color="green"
    }else if (random == 6){
        color="purple"
    }else if (random == 7){
        color="yellow"
    }else if (random == 8){
        color="pink"
    }else if (random == 9){
        color="aqua"
    }
    console.log(color)
}

function changeColor(){
    randomNumber()
    change= document.querySelector(".background").innerHTML=`Background Color : ${color.toUpperCase()}`
    bodyColor = document.querySelector("body").style.backgroundColor=`${color}`
}

