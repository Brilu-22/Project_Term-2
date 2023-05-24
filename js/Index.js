createYourHero = () =>{
    let SubName = document.getElementById("SubName").value
    let size = document.getElementById("size").value

    let baseOption = document.getElementsByName("baseRadio");
    let baseValue; 
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
            baseValue = baseOption[i].value
        }
    }

    let salami = document.getElementById("salami").checked

    if (salami){
        alert("Hero Order:" + SubName + " -Size: " + size + " - Base: " + baseValue + " with Salami!" )

    }else{
        alert("Hero Order:" + SubName + " -Size: " + size + " - Base: " + baseValue + " with NO Salami!" )
    }



}