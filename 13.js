/*var currentDiv = document.getElementById("div1"); 
var newDiv = document.createElement("div"); 
newDiv.className="krug" 
newDiv.style='border-radius: '+100+'%+'+199+'px;'
document.body.insertBefore(newDiv, currentDiv);
but=document.getElementById('but')
but.onclick = function(){
    let s=0
    }
}*/
var currentDiv = document.getElementById("div1"); 
var newDiv = document.createElement("div"); 
newDiv.id='newDiv'
but=document.getElementById('but')
newDiv.className="krug" 
newDiv.style='border-radius: '+100+'%+'+199+'px;'
document.body.insertBefore(newDiv, currentDiv);
let i = 1;       
//newDiv.style='left:'+String(i)+'px;'          
function myLoop(i) {         
    setTimeout(function() {  
    //newDiv.style='border-radius: '+100+'%+'+i+'px;' 

    i=i+1;
    newDiv.style = 'border-radius:100%'+i+'px;' 
    if ((Math.random()*10)<=5){
        newDiv.style = "border-radius:100%"+i+"px; box-shadow: "+Math.floor(Math.random()*30)+"px "+Math.floor(Math.random()*30)+"px "+Math.floor(Math.random()*30)+"px rgba("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", 1.15);"
    }
    //else{newDiv.style = "border-radius:100%"+i+"px; box-shadow: 0px -30px 10px rgba(250, 30, 120, 1.15);"}
    else{newDiv.style = "border-radius:100%"+i+"px; box-shadow: "+Math.floor(Math.random()*30)+"px -"+Math.floor(Math.random()*30)+"px "+Math.floor(Math.random()*30)+"px rgba("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", 1.15);"
    }
    //if (i%1000==0){console.log(i)}
    if (i>1600){i=-1000} 
    myLoop(i);
    }, 1)
}       
function myLoops(forx) {         
    setTimeout(function() {  
    forx=forx + 1;
    if (forx<500){myLoops(forx);}
    myLoop(i)
    },Math.floor(Math.random()*2003) )
}   
myLoops(1)
