var textTitle = "Testing Jasmine";
function helloWorld() {
  return "hello world";
}

function titulo  (){
	 document.getElementById("titleDiv").innerHTML= textTitle;
};
titulo();


function suma (n1, n2){
	if(isNaN(n1)|| isNaN(n2)){
		return null;

	}else{
		n1 = parseInt(n1);
		n2 = parseInt(n2);
		return n1 + n2 ;

	};
};
suma();
