let screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue=  0;
screenValue= " ";

for(items of buttons)
{ 
    items.addEventListener('click',(event)=>{
        buttonText= event.target.innerText;
        if(buttonText!=='=')
        {
            screenValue += buttonText;
            screen.value=screenValue;
        }
        if(buttonText=='C')
        {
            screenValue = " ";
            screen.value=screenValue;
        }
        if(buttonText  == '=')
        {
            screen.value=eval(screenValue);
        }
        else{
            screen.value=screenValue;   
        }
    2})
}