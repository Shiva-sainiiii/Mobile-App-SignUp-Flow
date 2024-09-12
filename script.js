



var password = document.querySelector("#password");
var eyes = document.querySelector("#eyes");
var flag = 0;

eyes.addEventListener("click", function(){
if(flag == 0){
password.type ="text";
eyes.innerHTML=`<i id="eye" class="fa-solid fa-eye"></i>`;
flag = 1;
}
else{

eyes.innerHTML=`<i id="eye" class="fa-solid fa-eye-slash"></i>`;
password.type ="password";
flag=0;
}
});


