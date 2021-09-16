  
var str= prompt("enter string");
var leng=str.length;
leng-=1;
var half=leng/2;
var ans=true;
for(var i=0;i<half;i++,leng--)
{
  if(str.charAt(i)!=str.charAt(leng))
  {
        ans=false;
        break;
  }
}
if(ans==true)
  alert("Palindrome");
else {
  alert("Not a palindrome")
}