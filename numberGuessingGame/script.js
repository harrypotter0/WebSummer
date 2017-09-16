var guesss;
var target;
var n;
function guess(){
    n=prompt("enter the number between 0 and 99::");
    return n;
}
random_number=Math.random()*100;
target = Math.floor(random_number);

var i=1;
function main(){
    guesss=guess();
    while(target!=guesss){
      if(guesss>=100 && guesss<0)
      alert("Enter within range");
      else if(guesss>target)
      alert("Number is too large :(");
      else if(guesss<target)
      alert("Number is too small :(");
      guesss=guess();
      i++;
    }
    if(target==guesss)
    alert("You did it !! Number is "+target+"\n\n"+"Total Guesses took ::"+i);

}
