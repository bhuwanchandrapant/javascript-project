var index = 0;
show_image(index);
function show_image(i){
    index += i;
    var image = document.getElementsByClassName("image");
    var dot = document.getElementsByClassName("dot");
    for(i = 0; i< image.length;i++){
        image[i].style.display ="none";
    }
    for(i=0;i<dot.length;i++){
        dot[i].className = dot[i].className.replace("active","");
    }
    if(index>image.length - 1){
        index = 0;
    }
    if(index<0){
        index = image.length -1;
    }
    image[index].style.display = "block";
    debugger
    dot[index].className = dot[index].className + " active";
}