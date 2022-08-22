
// All variables and constants   
var canvas=$('canvas')[0];
var ctx =canvas.getContext('2d'); // to select 2d context of canvas
var score =0;
var snake=
 [
     {x:50,y:100, oldX:0, oldY:0},
     {x:50,y:90, oldX:0, oldY:0},
     {x:50,y:80, oldX:0, oldY:0}
 ]
var food ={x:200,y:200, eaten:false}
var snakeWidth= snakeHeight=10;
const LEFT=37
const UP=38
const RIGHT=39
const DOWN=40
var keyPressed =RIGHT
var blockSize=10
game = setInterval(gameLoop,100);



// functions
function reset()
{  
 clearCanvas();
 score=0;
 keyPressed =RIGHT
 game = setInterval(gameLoop,100);
 // snake
 snake=
 [
     {x:50,y:100, oldX:0, oldY:0},
     {x:50,y:90, oldX:0, oldY:0},
     {x:50,y:80, oldX:0, oldY:0}
 ] 
food ={x:200,y:200, eaten:false}
$('#gameOver').text(" ")   
$('#score').text(" ")   
gameloop();

}


function gameLoop()
{   clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();  
}

// functions  related  to snake
function moveSnake()
{
    $.each(snake,function(index,value)
    {   snake[index].oldX=value.x
         snake[index].oldY=value.y
        if(index==0)
        {
           if(keyPressed==DOWN)
           {
               snake[index].y=value.y+ blockSize
           }
            else if(keyPressed==UP)
           { snake[index].y=value.y- blockSize}
           else if(keyPressed==RIGHT)
           {  snake[index].x=value.x+ blockSize}
            else if(keyPressed==LEFT)
           {snake[index].x=value.x-blockSize}
        }
        else
        {
           snake[index].x=snake[index-1].oldX
           snake[index].y=snake[index-1].oldY
        }
    })
}

function drawSnake()
{
    $.each(snake,function(index,value)
    {
     
      ctx.fillStyle= ' rgb(26, 82, 12)'
      ctx.fillRect(value.x,value.y,snakeWidth,snakeHeight) 
      ctx.strokeStyle='black'
      ctx.strokeRect(value.x,value.y,snakeWidth,snakeHeight)   
      if(index==0)
      {    if(collapse(value.x,value.y))
            { gameover();}

          if(foodeaten(value.x,value.y))
          {  score++;
             $('#score').text("Score : "+ score)
             snakesizeinc();
             food.eaten=true;
            //  console.log("foodeaten")
            }
      }
    })
}

// to check collision
function collapse(x,y)
{    
    return   snake.filter(function(value,index)
    {
        return (index!==0) && (value.x===x) && (value.y===y)
    }).length>0 || (x<0) || x>canvas.width || (y<0) || y>canvas.height; }
    


// to increase snake size
function snakesizeinc()
{
    snake.push(
        {   // to get last index of snake
            x:snake[snake.length-1].oldX, 
            y:snake[snake.length-1].oldY
        }
    );
}

// function related  to snake food
function foodeaten(x,y)
{
    return (food.x===x)&&(food.y===y)
}

// to draw food
function drawFood()
{    if(food.eaten===true)
    {
        food=newposition();
    }
    ctx.fillStyle= 'black'
    ctx.fillRect(food.x,food.y,snakeWidth,snakeHeight) 
}



// function to give new position to food
function newposition()
{
    // new posiion should not override snake position
    // for this condition we have to check all the x and y from snake 
    let xArray=yArray=[],xy;
    $.each(snake, function(index, value)
    {     // to get all x position and  y positions of snake
        if($.inArray(value.x, xArray)!== -1)
        { 
            xArray.push(value.x)
        }
        if($.inArray(value.y, yArray)!==-1)
        {
            yArray.push(value.y)
        }
    })
    // to create new x and y position for food
    xy= getnewXY(xArray,yArray);
    return xy;
}


// function to get new x and y values for food
function getnewXY(xArray,yArray)
{
    let newX, newY;
    newX= getRandomNumber(canvas.width-10,10);
    newY= getRandomNumber(canvas.height-10,10);
    if($.inArray(newX,xArray)===-1 && $.inArray(newY,yArray)===-1 )
    {
        return { x: newX,
                y: newY,
                eaten:false}
    }
    else
    {
        return getnewXY(xArray,yArray)
    }
}
// function to get random numbers
function getRandomNumber(max, multiple)
{
    let result=Math.floor(Math.random()*max);
    result=(result%10===0)? result : result+ (multiple- result%10);
    return result
}

function clearCanvas()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)

}
function gameover()

{
    $('#gameOver').text("Game Over :( ")    
    clearInterval(game);
  
}


// function for the function of arrow keys
$(document).keydown(function(e)
{   if($.inArray(e.which,[DOWN,UP,LEFT,RIGHT])!=-1)
   {  keyPressed=check(e.which);}

})
let key;
function check(temp)
{   if(temp===DOWN)
    {
        key= (keyPressed!==UP)? temp : keyPressed;
        return key;
    }
    if(temp===UP)
    {
        key=(keyPressed!==DOWN)? temp : keyPressed;
        return key;
    }
    if(temp===RIGHT)
    {
        key=(keyPressed!==LEFT)? temp:keyPressed;
        return key;
    }
    if(temp===LEFT)
    {
        key = (keyPressed!==RIGHT)? temp:keyPressed;
        return key;
    }

    return key;
}
