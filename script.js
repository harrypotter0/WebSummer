
var arr=["blue","red","green","orange","purple","pink","magenta","white","yellow"];
var i,j,k,l;
l=1;
arr.sort();

j=Math.floor(Math.random()*arr.length);

function main(){
    k=guess();
    while(k!=j){
        if(k>=arr.length && k<0)
        alert("Sorry I didn't recognize your color :("+"\n\n"+"Please try again !!");
        else if(k>j)
        alert("Sorry,your guess is not correct."+"\n\n"+"Hint: Your color index is higher than mine ."+"\n\n"+"Please try again.");
        else if(k<j)
        alert("Sorry,your guess is not correct."+"\n\n"+"Hint: Your color index is lower than mine ."+"\n\n"+"Please try again.");        k=guess();
        l++;
    }
    if(j==k){
        document.body.style.backgroundColor = arr[k];
        alert("You did it !! Color is "+arr[k]+"\n\n"+"Total Guesses you took ::"+l);
    }
}
function guess(){
    i=prompt("I am thinking of these colors :"+"\n\n"+arr.sort()+"\n\n"+"What color I am thinking of ?");
    return arr.indexOf(i);
}
