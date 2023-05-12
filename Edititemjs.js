let product1 = document.getElementById("product1");
let product2 = document.getElementById("product2");
let product3 = document.getElementById("product3");
let product4 = document.getElementById("product4");
let product5 = document.getElementById("product5");
let product12 = document.getElementById("product12");
let product22 = document.getElementById("product22");
let product32 = document.getElementById("product32");
let product42 = document.getElementById("product42");
let product52 = document.getElementById("product52");
let edit1 =document.getElementById("Edit1");
let edit2 =document.getElementById("Edit2");
let edit3 =document.getElementById("Edit3");
let edit4 =document.getElementById("Edit4");
let edit5 =document.getElementById("Edit5");
let save1 =document.getElementById("Save1");
let save2 =document.getElementById("Save2");
let save3 =document.getElementById("Save3");
let save4 =document.getElementById("Save4");
let save5 =document.getElementById("Save5");
let product11 = document.getElementById("product11");
let product21 = document.getElementById("product21");
let product13 = document.getElementById("product13");
let product14 = document.getElementById("product14");
let product15 = document.getElementById("product15");
let product16 = document.getElementById("product16");
let product112 = document.getElementById("product112");
let product121 = document.getElementById("product121");
let product132 = document.getElementById("product132");
let product142 = document.getElementById("product142");
let product152 = document.getElementById("product152");
let edit11 =document.getElementById("Edit11");
let edit21 =document.getElementById("Edit21");
let edit13 =document.getElementById("Edit13");
let edit14 =document.getElementById("Edit14");
let edit15 =document.getElementById("Edit15");
let edit16 =document.getElementById("Edit16");
let save11 =document.getElementById("Save11");
let save21 =document.getElementById("Save21");
let save13 =document.getElementById("Save13");
let save14 =document.getElementById("Save14");
let save15 =document.getElementById("Save15");
let save16 =document.getElementById("Save16");
let product111 = document.getElementById("product111");
let product222 = document.getElementById("product222");
let product333 = document.getElementById("product333");
let product444 = document.getElementById("product444");
let product555 = document.getElementById("product555");
let product666 = document.getElementById("product666");
let product1111 = document.getElementById("product1111");
let product2222 = document.getElementById("product2222");
let product3333 = document.getElementById("product3333");
let product4444 = document.getElementById("product4444");
let product5555 = document.getElementById("product5555");
let product6666 = document.getElementById("product6666");
let edit111 =document.getElementById("Edit111");
let edit222 =document.getElementById("Edit222");
let edit333 =document.getElementById("Edit333");
let edit444 =document.getElementById("Edit444");
let edit555 =document.getElementById("Edit555");
let edit666 =document.getElementById("Edit666");
let save111 =document.getElementById("Save111");
let save222 =document.getElementById("Save222");
let save333 =document.getElementById("Save333");
let save444 =document.getElementById("Save444");
let save555 =document.getElementById("Save555");
let save666 =document.getElementById("Save666");
edit1.onclick = function(){
    product1.style.display="none";
    product12.style.display="flex";
}
save1.onclick = function(){
    product1.style.display="flex";
    product12.style.display="none";
}
edit2.onclick = function(){
    product2.style.display="none";
    product22.style.display="flex";
}
save2.onclick = function(){
    product2.style.display="flex";
    product22.style.display="none";
}

edit3.onclick = function(){
    product3.style.display="none";
    product32.style.display="flex";
}
save3.onclick = function(){
    product3.style.display="flex";
    product32.style.display="none";
}
edit4.onclick = function(){
    product4.style.display="none";
    product42.style.display="flex";
}
save4.onclick = function(){
    product4.style.display="flex";
    product42.style.display="none";
}
edit5.onclick = function(){
    product5.style.display="none";
    product52.style.display="flex";
}
save5.onclick = function(){
    product5.style.display="flex";
    product52.style.display="none";
}
edit11.onclick = function(){
    product11.style.display="none";
    product112.style.display="flex";
}
save11.onclick = function(){
    product11.style.display="flex";
    product112.style.display="none";
}
edit21.onclick = function(){
    product21.style.display="none";
    product121.style.display="flex";
}
save21.onclick = function(){
    product21.style.display="flex";
    product121.style.display="none";
}

edit13.onclick = function(){
    product13.style.display="none";
    product132.style.display="flex";
}
save13.onclick = function(){
    product13.style.display="flex";
    product132.style.display="none";
}
edit14.onclick = function(){
    product14.style.display="none";
    product142.style.display="flex";
}
save14.onclick = function(){
    product14.style.display="flex";
    product142.style.display="none";
}
edit15.onclick = function(){
    product15.style.display="none";
    product152.style.display="flex";
}
save15.onclick = function(){
    product15.style.display="flex";
    product152.style.display="none";
}
edit16.onclick = function(){
    product16.style.display="none";
    product162.style.display="flex";
}
save16.onclick = function(){
    product16.style.display="flex";
    product162.style.display="none";
}
edit111.onclick = function(){
    product111.style.display="none";
    product1111.style.display="flex";
}
save111.onclick = function(){
    product111.style.display="flex";
    product1111.style.display="none";
}
edit222.onclick = function(){
    product222.style.display="none";
    product2222.style.display="flex";
}
save222.onclick = function(){
    product222.style.display="flex";
    product2222.style.display="none";
}

edit333.onclick = function(){
    product333.style.display="none";
    product3333.style.display="flex";
}
save333.onclick = function(){
    product333.style.display="flex";
    product3333.style.display="none";
}
edit444.onclick = function(){
    product444.style.display="none";
    product4444.style.display="flex";
}
save444.onclick = function(){
    product444.style.display="flex";
    product4444.style.display="none";
}
edit555.onclick = function(){
    product555.style.display="none";
    product5555.style.display="flex";
}
save555.onclick = function(){
    product555.style.display="flex";
    product5555.style.display="none";
}
edit666.onclick = function(){
    product666.style.display="none";
    product6666.style.display="flex";
}
save666.onclick = function(){
    product666.style.display="flex";
    product6666.style.display="none";
}
$("button.Remove1").click(function(){
    $("div.product1").hide( function(){
    alert("remove done");
    });
    });
$("button.Remove2").click(function(){
    $("div.product2").hide( function(){
    alert("remove done");
    });
    });
$("button.Remove3").click(function(){
    $("div.product3").hide( function(){
    alert("remove done");
    });
    });
$("button.Remove4").click(function(){
    $("div.product4").hide( function(){
    alert("remove done");
    });
    });
$("button.Remove5").click(function(){
    $("div.product5").hide( function(){
    alert("remove done");
    });
    });
$("button.Remove6").click(function(){
    $("div.product62").hide( function(){
    alert("remove done");
    });
    });
    $("button.Remove11").click(function(){
        $("div.product11").hide( function(){
        alert("remove done");
        });
        });
    $("button.Remove21").click(function(){
        $("div.product21").hide( function(){
        alert("remove done");
        });
        });
    $("button.Remove13").click(function(){
        $("div.product13").hide( function(){
        alert("remove done");
        });
        });
    $("button.Remove14").click(function(){
        $("div.product14").hide( function(){
        alert("remove done");
        });
        });
    $("button.Remove15").click(function(){
        $("div.product15").hide( function(){
        alert("remove done");
        });
        });
    $("button.Remove16").click(function(){
        $("div.product16").hide( function(){
        alert("remove done");
        });
        });
        $("button.Remove111").click(function(){
            $("div.product111").hide( function(){
            alert("remove done");
            });
            });
        $("button.Remove222").click(function(){
            $("div.product222").hide( function(){
            alert("remove done");
            });
            });
        $("button.Remove333").click(function(){
            $("div.product333").hide( function(){
            alert("remove done");
            });
            });
        $("button.Remove444").click(function(){
            $("div.product444").hide( function(){
            alert("remove done");
            });
            });
        $("button.Remove555").click(function(){
            $("div.product555").hide( function(){
            alert("remove done");
            });
            });
        $("button.Remove666").click(function(){
            $("div.product666").hide( function(){
            alert("remove done");
            });
            });        