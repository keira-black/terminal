    $(document).keypress (function(e){
        e.preventDefault();
        getInput(e);
    });



var myText = "";
var prompt = "user@wherever>&zwnj;"

function keyP(e){
console.log(String.fromCharCode(e.keyCode));
            var keynum;

            if(window.event){ 
            	keynum = e.keyCode;
            }else
                if(e.which){ 					
            		keynum = e.which;
                 }
            return keynum;
        }
var specials = ["&lt;","&gt;","<br>"];


function isEscapee(key, escapees){
    if (escapees.indexOf(String.fromCharCode(key)) !== -1){
        return true;
    }
    return false;
}

function getInput(e){
    if (e.keycode == 39){

    }
    var escapees = "\.\'\"\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:\-\\\&";
	var key = keyP(e);
	if (key === 13){
		myText= myText+"<br>"+prompt;
        
	}
    else if (key == 60){
        myText = myText+"&lt;";
    } else if (key == 62){
        myText = myText+"&gt;";
    } else if (key == 8){
        if (specials.indexOf(myText.substring(myText.length-4, myText.length)) !== -1){
            myText= myText.substring(0, myText.length-4);
        }else if (prompt.indexOf(myText.substring(myText.length-prompt.length, myText.length)) !== -1){
            //do nothing for now I guess.
        }else if (isEscapee(myText.substring(myText.length-1, myText.length), escapees)){
            myText= myText.substring(0, myText.length-2);
        } else {
        myText = myText.substring(0, myText.length - 1);
    }
    } else {
        if (isEscapee(key, escapees)){
            myText= myText+String.fromCharCode(key)+"&zwnj;";
        }
            else{
		myText = myText+String.fromCharCode(key);
    }

	}
    $("#terminal").scrollTop($("#terminal")[0].scrollHeight);
}

function writeFlashOff(){
    $("#terminal").html(prompt+myText+"&zwnj;");	
    setTimeout(writeFlashOn, 500);
}

function writeFlashOn(){
$("#terminal").html(prompt+myText+"&#x25a0");
setTimeout(writeFlashOff, 500);
}

writeFlashOff();










