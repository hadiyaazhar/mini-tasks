// css 
// game styling
$('.box').css(
    {  "border": "2px solid black" ,  "font-size": "3vw" ,  "cursor":"pointer" ,  "display": "flex",  "justify-content": "center", "align-items": "center"}
    )

$('.br-0').css(  "border-right", "0")
$('.bb-0').css(  "border-bottom", "0")
$('.bl-0').css(  "border-left", "0")
$('.bt-0').css(  "border-top", "0")

$('.gameContainer').css({ 
    "display": "flex",
    'margin': 'auto',
    'justify-content': 'center',
    'margin-top': '50px',
    'size': '1000px'
  })



// behaviour of  game
let turn ="X"
let gameover=false



//to change the turn
const changeTurn=()=>
{
if(turn==="X"){return "0"}
else if(turn==="0"){return "X"}
}

//function to display turn
//box 1
$('#box1').click(function()
{
    $('#boxText1').text(turn);
    turn=changeTurn();
    win();
})
//box 2
$('#box2').click(function()
{
    $('#boxText2').text(turn);
    turn=changeTurn();
    win();
})
//box 3
$('#box3').click(function()
{
    $('#boxText3').text(turn);
    turn=changeTurn();
    win();
})
//box 4
$('#box4').click(function()
{
    $('#boxText4').text(turn);
    turn=changeTurn();
    win();
})
//box 5
$('#box5').click(function()
{
    $('#boxText5').text(turn);
    turn=changeTurn();
    win();
})
//box 6
$('#box6').click(function()
{
    $('#boxText6').text(turn);
    turn=changeTurn();
    win();
})
//box 7
$('#box7').click(function()
{
    $('#boxText7').text(turn);
    turn=changeTurn();
    win();
})
//box 8
$('#box8').click(function()
{
    $('#boxText8').text(turn);
    turn=changeTurn();
    win();
})
//box 9
$('#box9').click(function()
{
    $('#boxText9').text(turn);
    turn=changeTurn();
    win();
})


// reset button
$('.reset').click(function()
{
    $('.boxText').text(" ");
    $('.info').text(" ");
    turn="X";
    gameover=false;

})

// win check
const win=()=>
{ let boxtext=$(".boxText")
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
    $('.info').text(boxtext[e[0]].innerText + " Won ") 
    gameover=true;
    } 
    })
}

