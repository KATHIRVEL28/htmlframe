let outputScreen=document.getElementById("kathir");
function Display(num){
outputScreen.value +=num;
}
function Calculate()
{
try
{
outputScreen.value=eval(outputScreen.value);
}
catch(err)
{
alert("invalid syntex");
}
}
function Clear()
{
outputScreen.value="";
}
function Del()
{
outputScreen.value=outputScreen.value.slice(0,-1);
}