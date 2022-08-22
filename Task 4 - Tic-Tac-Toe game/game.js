
let turn ="X";
let gameover=false;
// win function
const win=()=>
{ let boxtext=document.getElementsByClassName('boxText')
let wins =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
          ]

   wins.forEach( e =>
   {        
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
    document.querySelector('.info').innerHTML= boxtext[e[0]].innerText + " Won ";
    gameover=true;
    } 
    })
}


// Function to change the turn
const changeTurn = ()=>
{
if(turn==="X"){return "0"}

else {return "X";}
}



// function to display turn
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>
{
    let boxtext= element.querySelector('.boxText');
    element.addEventListener('click',()=>
    {
        boxtext.innerText=turn;
        turn = changeTurn();
        win();
   })
})

// reset game
reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element =>
        {
            element.innerText=""
            turn= "X";
            gameover=false;
            document.querySelector('.info').innerHTML= " ";

        })
})
