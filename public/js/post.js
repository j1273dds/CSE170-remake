function lost() {
	$("#lost_found").val("lost");
	document.getElementById("LostBtn").style.backgroundColor = "#11D4FF";
  document.getElementById("LostBtn").style.color = "white";
  document.getElementById("FoundBtn").style.color = "#11D4FF";  
	document.getElementById("FoundBtn").style.backgroundColor = "";

}

function found() {
	$("#lost_found").val("found");
	document.getElementById("FoundBtn").style.backgroundColor = "#11D4FF";
  document.getElementById("FoundBtn").style.color = "white";
  document.getElementById("LostBtn").style.color = "#11D4FF";  
	document.getElementById("LostBtn").style.backgroundColor = "";
}

function date() {

}

var outImage ="imagenFondo";
function preview_2(obj)
{
  if (FileReader)
  {
    var reader = new FileReader();
    reader.readAsDataURL(obj.files[0]);
    reader.onload = function (e) {
    var image=new Image();
    image.src=e.target.result;
		
    // image.onload = function () {
    //   document.getElementById(outImage).src=image.src;
    // };
    }
  }
  else
  {
        // Not supported
  }
}