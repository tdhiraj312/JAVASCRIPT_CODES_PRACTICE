const container = document.querySelector(".container");

colors=["red","green","blue","black","pink","violet","pink","yellow","purple"]
color=["orange","blue","green","violet","aqua"]
let count=0;

const changeColor = ()=>{
    container.style.backgroundColor = color[count];
    count++;
    if(count == color.length-1){
        count=0;
    }
}

const DoublechangeColor = ()=>{
    container.style.backgroundColor = colors[count];
    count++;
    if(count == colors.length-1){
        count=0;
    }
}