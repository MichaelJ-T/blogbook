$(document).ready(function(){
    
 $('#allselectbox').click(function(event){
     
     
     if(this.checked){
         
       $('.selectbox').each(function(){
           
           this.checked=true;
           
       });  
         
         
     }else{
         
            $('.selectbox').each(function(){
           
           this.checked=false;
           
       });  
         
     }
     
 });   

// var div_box="<div id='load-screen'><div id='loading1'><div id='loading'></div></div></div>";
//     $("body").prepend(div_box);
//     $('#load-screen').delay(500).fadeOut(600,function(){
//         $(this).remove();

//     });
    
    
});

function loadusers(){
    if (!checkIfWindowIsHidden()) {
        $.get("functions.php?useronline=result",function(data){
            $(".useronline").text(data);        
        });
        setTimeout(function(){loadusers()},1000);
    }else {
        setTimeout(function(){loadusers()}, 3000);
    }
}

function checkIfWindowIsHidden() {
    return document.hidden || document.msHidden || document.webkitHidden || document.mozHidden;
}

window.setTimeout(function(){loadusers();},500);
