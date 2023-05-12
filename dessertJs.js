let AddProduct1=document.getElementById("AddProduct1");
let AddProduct2=document.getElementById("AddProduct2");
let AddProduct3=document.getElementById("AddProduct3");
let AddProduct4=document.getElementById("AddProduct4");
let AddProduct5=document.getElementById("AddProduct5");
let AddProduct6=document.getElementById("AddProduct6");
let order1=document.getElementById("order1");
let order2=document.getElementById("order2");
let order3=document.getElementById("order3");
let order4=document.getElementById("order4");
let order5=document.getElementById("order5");
let order6=document.getElementById("order6");

AddProduct1.onclick=function(){
    order1.style.display="flex";
}
AddProduct2.onclick=function(){
    order2.style.display="flex";
}
AddProduct3.onclick=function(){
    order3.style.display="flex";
}
AddProduct4.onclick=function(){
    order4.style.display="flex";
}
AddProduct5.onclick=function(){
    order5.style.display="flex";
}
AddProduct6.onclick=function(){
    order6.style.display="flex";
}




let price1=document.getElementById("price1")
let count1=0
document.getElementById("decreaseBtn1").onclick=function(){
    count1 -=1;
    document.getElementById("countLabel1").innerHTML = count1;
    if(count1<=0){
        document.getElementById("price1").innerHTML =0;
        document.getElementById("order1").style.display="none";
    }
    else{
        price1.innerHTML = count1*25;
    }
}

document.getElementById("resetBtn1").onclick=function(){
    count1 =0;
    document.getElementById("countLabel1").innerHTML = count1;
    if(count1==0){
        document.getElementById("price1").innerHTML =0;
        document.getElementById("order1").style.display="none";
    }
    else{
        price1.innerHTML = count1*25;
    }
}

document.getElementById("increaseBtn1").onclick=function(){
    count1 +=1;
    document.getElementById("countLabel1").innerHTML = count1;
    price1.innerHTML = count1*25;
}
let count2=0;
let price2=document.getElementById("price2")
document.getElementById("decreaseBtn2").onclick=function(){
    count2 -=1;
    document.getElementById("countLabel2").innerHTML = count2;
    if(count2<=0){
        document.getElementById("price2").innerHTML =0;
        document.getElementById("order2").style.display="none";
    }
    else{
        price2.innerHTML = count2*40;
    }
}

document.getElementById("resetBtn2").onclick=function(){
    count2 =0;
    document.getElementById("countLabel2").innerHTML = count2;
    if(count2==0){
        document.getElementById("price2").innerHTML =0;
        document.getElementById("order2").style.display="none";
    }
    else{
        price2.innerHTML = count2*40;
    }
}

document.getElementById("increaseBtn2").onclick=function(){
    count2 +=1;
    document.getElementById("countLabel2").innerHTML = count2;
    price2.innerHTML = count2*40;
}

let price3=document.getElementById("price3")
let count3=0
document.getElementById("decreaseBtn3").onclick=function(){
    count3 -=1;
    document.getElementById("countLabel3").innerHTML = count3;
    if(count3<=0){
        document.getElementById("price3").innerHTML =0;
        document.getElementById("order3").style.display="none";
    }
    else{
        price3.innerHTML = count3*50;
    }
}

document.getElementById("resetBtn3").onclick=function(){
    count3 =0;
    document.getElementById("countLabel3").innerHTML = count3;
    if(count3==0){
        document.getElementById("price3").innerHTML =0;
        document.getElementById("order3").style.display="none";
    }
    else{
        price3.innerHTML = count3*50;
    }
}

document.getElementById("increaseBtn3").onclick=function(){
    count3 +=1;
    document.getElementById("countLabel3").innerHTML = count3;
    price3.innerHTML = count3*40;
}
let price4=document.getElementById("price4")
let count4=0
document.getElementById("decreaseBtn4").onclick=function(){
    count4 -=1;
    document.getElementById("countLabel4").innerHTML = count4;
    if(count4<=0){
        document.getElementById("price4").innerHTML =0;
        document.getElementById("order4").style.display="none";
    }
    else{
        price4.innerHTML = count4*40;
    }
}

document.getElementById("resetBtn4").onclick=function(){
    count4 =0;
    document.getElementById("countLabel4").innerHTML = count4;
    if(count4==0){
        document.getElementById("price4").innerHTML =0;
        document.getElementById("order4").style.display="none";
    }
    else{
        price4.innerHTML = count4*40;
    }
}

document.getElementById("increaseBtn4").onclick=function(){
    count4 +=1;
    document.getElementById("countLabel4").innerHTML = count4;
    price4.innerHTML = count4*40;
}

let count5=0;
let price5= document.getElementById("price5");
document.getElementById("decreaseBtn5").onclick=function(){
    count5 -=1;
    document.getElementById("countLabel5").innerHTML = count5;
    if(count5<=0){
        document.getElementById("price5").innerHTML =0;
        document.getElementById("order5").style.display="none";
    }
    else{
        price5.innerHTML = count5*35;
    }
}

document.getElementById("resetBtn5").onclick=function(){
    count5 =0;
    document.getElementById("countLabel5").innerHTML = count5;
    if(count5==0){
        price5.innerHTML =0
        document.getElementById("order5").style.display="none";
    }
    else{
        price5.innerHTML = count5*35;
    }
}

document.getElementById("increaseBtn5").onclick=function(){
    count5 +=1;
    document.getElementById("countLabel5").innerHTML = count5;
    price5.innerHTML = count5*35;
}

let count6=0;
let price6= document.getElementById("price6");
document.getElementById("decreaseBtn6").onclick=function(){
    count6 -=1;
    document.getElementById("countLabel6").innerHTML = count6;
    if(count6<=0){
        document.getElementById("price6").innerHTML =0;
        document.getElementById("order6").style.display="none";
    }
    else{
        price5.innerHTML = count6*45;
    }
}

document.getElementById("resetBtn6").onclick=function(){
    count6 =0;
    document.getElementById("countLabel6").innerHTML = count6;
    if(count6==0){
        price5.innerHTML =0
        document.getElementById("order6").style.display="none";
    }
    else{
        price6.innerHTML = count6*45;
    }
}

document.getElementById("increaseBtn6").onclick=function(){
    count6 +=1;
    document.getElementById("countLabel6").innerHTML = count6;
    price6.innerHTML = count6*45;
}





document.getElementById("totalBtn5").onclick=function(){
    total=0
    total=parseInt(price6.innerText)+parseInt(price5.innerText)+parseInt(price4.innerText)+parseInt(price3.innerText)+parseInt(price2.innerText)+parseInt(price1.innerText);
    document.getElementById("totalPrice").innerHTML=total;
}