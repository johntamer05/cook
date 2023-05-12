let price1=document.getElementById("price1")
let count1=0
document.getElementById("decreaseBtn1").onclick=function(){
    count1 -=1;
    document.getElementById("countLabel1").innerHTML = count1;
    if(count1<=0){
        document.getElementById("order1").style.display="none";
    }
    else{
        price1.innerHTML = count1*250;
    }
}

document.getElementById("resetBtn1").onclick=function(){
    count1 =0;
    document.getElementById("countLabel1").innerHTML = count1;
    if(count1==0){
        document.getElementById("order1").style.display="none";
    }
    else{
        price1.innerHTML = count1*250;
    }
}

document.getElementById("increaseBtn1").onclick=function(){
    count1 +=1;
    document.getElementById("countLabel1").innerHTML = count1;
    price1.innerHTML = count1*250;
}
let count2=0;
let price2=document.getElementById("price2")
document.getElementById("decreaseBtn2").onclick=function(){
    count2 -=1;
    document.getElementById("countLabel2").innerHTML = count2;
    if(count2<=0){
        document.getElementById("order2").style.display="none";
    }
    else{
        price2.innerHTML = count2*250;
    }
}

document.getElementById("resetBtn2").onclick=function(){
    count2 =0;
    document.getElementById("countLabel2").innerHTML = count2;
    if(count2==0){
        document.getElementById("order2").style.display="none";
    }
    else{
        price2.innerHTML = count2*250;
    }
}

document.getElementById("increaseBtn2").onclick=function(){
    count2 +=1;
    document.getElementById("countLabel2").innerHTML = count2;
    price2.innerHTML = count2*250;
}

let count3=0;
let price3= document.getElementById("price3");
document.getElementById("decreaseBtn3").onclick=function(){
    count3 -=1;
    document.getElementById("countLabel3").innerHTML = count3;
    if(count3<=0){
        document.getElementById("order3").style.display="none";
    }
    else{
        price3.innerHTML = count3*250;
    }
}

document.getElementById("resetBtn3").onclick=function(){
    count3 =0;
    document.getElementById("countLabel3").innerHTML = count3;
    if(count3==0){
        price3.style.display="none";
    }
    else{
        document.getElementById("price3").innerHTML = count3*250;
    }
}

document.getElementById("increaseBtn3").onclick=function(){
    count3 +=1;
    document.getElementById("countLabel3").innerHTML = count3;
    price3.innerHTML = count3*250;
}

let count4=0;
let price4= document.getElementById("price4");
document.getElementById("decreaseBtn4").onclick=function(){
    count3 -=1;
    document.getElementById("countLabel4").innerHTML = count4;
    if(count3<=0){
        document.getElementById("order4").style.display="none";
    }
    else{
        price3.innerHTML = count3*250;
    }
}

document.getElementById("resetBtn4").onclick=function(){
    count3 =0;
    document.getElementById("countLabel4").innerHTML = count4;
    if(count4==0){
        price4.style.display="none";
    }
    else{
        document.getElementById("price4").innerHTML = count4*250;
    }
}

document.getElementById("increaseBtn4").onclick=function(){
    count4 +=1;
    document.getElementById("countLabel4").innerHTML = count4;
    price4.innerHTML = count4*250;
}

let count5=0;
let price5= document.getElementById("price5");
document.getElementById("decreaseBtn5").onclick=function(){
    count5 -=1;
    document.getElementById("countLabel5").innerHTML = count5;
    if(count5<=0){
        price5.style.display="none";
    }
    else{
        price5.innerHTML = count5*250;
    }
}

document.getElementById("resetBtn5").onclick=function(){
    count5 =0;
    document.getElementById("countLabel5").innerHTML = count5;
    if(count5==0){
        document.getElementById("order5").style.display="none";
    }
    else{
        price5.innerHTML = count5*250;
    }
}

document.getElementById("increaseBtn5").onclick=function(){
    count5 +=1;
    document.getElementById("countLabel5").innerHTML = count5;
    price5.innerHTML = count5*250;
}
let count6=0;
let price6= document.getElementById("price6");
document.getElementById("decreaseBtn6").onclick=function(){
    count6 -=1;
    document.getElementById("countLabel6").innerHTML = count6;
    if(count6<=0){
        price6.style.display="none";
    }
    else{
        price5.innerHTML = count6*250;
    }
}

document.getElementById("resetBtn6").onclick=function(){
    count6 =0;
    document.getElementById("countLabel6").innerHTML = count6;
    if(count6==0){
        document.getElementById("order6").style.display="none";
    }
    else{
        price6.innerHTML = count6*250;
    }
}

document.getElementById("increaseBtn6").onclick=function(){
    count6 +=1;
    document.getElementById("countLabel6").innerHTML = count6;
    price6.innerHTML = count6*250;
}




document.getElementById("totalBtn5").onclick=function(){
    total=0
    total=parseInt(price6.innerText)+parseInt(price5.innerText)+parseInt(price4.innerText)+parseInt(price3.innerText)+parseInt(price2.innerText)+parseInt(price1.innerText);
    document.getElementById("totalPrice").innerHTML=total;
}