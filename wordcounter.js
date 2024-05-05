function counts(){
    var text=document.getElementById("words").value;

    var number=1;
    for(var i=0;i<text.length;i++){
        var currentcharacter=text[i];
        if(currentcharacter==" "){
            number+=1;
        }

    }
    // number+=1;
    document.getElementById("show").innerHTML=number;

}