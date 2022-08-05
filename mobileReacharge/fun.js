var submittext=document.getElementById("submittext");
submittext.addEventListener('click',func1);
var submitbutton=document.getElementById("submitbutton")
submitbutton.addEventListener("click",func5);
function func2(e){
	location.href="payment.html";
	e.preventDefault();
}
function func1(e){
	location.href="plan.html";
    e.preventDefault();
}
function func5(e){
	location.href="home.html";
	e.preventDefault();
}