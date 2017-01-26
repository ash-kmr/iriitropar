var open, c=document.querySelectorAll(".tab-down");

for(i=0;i<c.length;i++){
    open=false;
    c[i].addEventListener("click", toggle);
}

function toggle(){
    if(!open){
    this.className="tab-up";
    open=true;
    }
    else{
        this.className="tab-down";
        open=false;
    }
}
