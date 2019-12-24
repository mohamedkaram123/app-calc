
export const calculaters = (text)=>{ 
let opts = "";
let abbst = [];

let optsArr  = [];
let optsArr1  = [];
let optsArr2 = [];

for (var i = 0; i < text.length; i++) {



if( text.indexOf("*") < text.indexOf("/")  && text.indexOf("*") > -1 && text.indexOf("/") > -1  ||   text.indexOf("*") > -1 && text.indexOf("/") == -1 ){


	opts = "*"

	
}else if(text.indexOf("/") < text.indexOf("*") &&  text.indexOf("*") > -1 && text.indexOf("/") > -1 ||  text.indexOf("/") > -1 && text.indexOf("*") == -1 ){

	opts = "/"

	
}else{



	if(text.indexOf("+") != -1){
      opts = "+";
	}else{
		if(text.indexOf("-") != -1){
      opts = "-";
	}
	}
}


}


calc =(text,opts)=>{ 

	let beforeText = [];
	let afterText = [];
	let opreationAfterText = [];
    let opreationBeforeText = [];
	let arraynum2 = [];
    let arraynum1 = [];
   let result = "";

	for (var i = text.indexOf(opts)+1; i < text.length; i++) {

     afterText.push(text[i]);
		    
	    }

	    	for (var i = text.indexOf(opts)-1; i > -1; i--) {


         beforeText.push(text[i]);
		     
	    }
         
        //=====================================================================================
for (var i = 0; i > afterText.length; i--) {

	if(isNaN(afterText[i])){
		opreationAfterText.push(afterText[i])
	}
}

let indexopreationAfterText = opreationAfterText[0];
if(indexopreationAfterText === undefined){
	for (var i = 0; i < afterText.length; i++) {
		arraynum2.push(afterText[i])
	}
}else{
		for (var i = afterText.indexOf(indexopreationAfterText)-1; i > -1; i--) {


        arraynum2.push(afterText[i]);
		     
	    }

}

	    

//===========================================================================================================================
	   let joinArrayNum2 = arraynum2.join("");
	   let num2 = parseFloat(joinArrayNum2);
	  // console.log(num2);

//============================================================================================
        
for (var i = 0; i < beforeText.length; i++) {
	if(isNaN(beforeText[i])){
		opreationBeforeText.push(beforeText[i]);
	}
}

let indexopreationBeforeText = opreationBeforeText[0];

if(indexopreationBeforeText === undefined){
	for (var i = 0; i < beforeText.length; i++) {
		
	arraynum1.push(beforeText[i])

}

arraynum1.reverse();

}else{

		for (var i = beforeText.indexOf(indexopreationBeforeText)-1; i > -1; i--) {


     arraynum1.push(beforeText[i]);
		    
	    }
}
	    
//==========================================================================================
   let joinArrayNum1 = arraynum1.join("");
	   let num1 = parseFloat(joinArrayNum1);
	  // console.log(num2);

//=========================================================

if(opts == "*"){
	 result = num1 * num2;
}
else if(opts  == "+"){
	 result = num1 + num2;
}
else if(opts  == "/"){
	 result = num1 / num2;
}
else if(opts  == "-"){
	 result = num1 - num2;
}



let containt = num1 + opts + num2;


 let newText =  text.replace(containt.toString(),result.toString());



return newText;

}





for (var i = 0; i < text.length; i++) {

if(isNaN(text[i]) && text[i] != '+' && text[i] != '-'){

	optsArr.push(text[i]);

}


if(isNaN(text[i]) && text[i] != '*' && text[i] != '/' && text[i] != '-'){

	optsArr1.push(text[i]);

}

if(isNaN(text[i]) && text[i] != '*' && text[i] != '/' && text[i] != '+'){

	optsArr2.push(text[i]);

}


}
 let optsArr3 = optsArr.concat(optsArr1); 
 let optsArrCollect = optsArr3.concat(optsArr2); 




	let newText = calc(text,opts);
		 let optsarray = optsArrCollect.slice(1);
let res = [];
let EndResult1 = [];
let EndResult2 = [];
let EndResult = ""
	
	if(optsArrCollect.length > 1){

 for (var i = 0; i < optsarray.length; i++) {
 	
 	res[0] = newText;
 	 	  EndResult1[0] = calc(res[0],optsarray[0]);
 	   EndResult1[i+1]= calc(EndResult1[i],optsarray[i+1])
 	  
 	 //   let EndResult = calc(arrtext[i],optsarray[i])


 }

   EndResult = EndResult1[EndResult1.length -1];

}else{


 EndResult = newText;
}
/*if(opts == "*"){

	

let newText3 = calc(newText2,"+");

 EndResult = calc(newText3,"-")
}else if(opts == "/"){
let newText = calc(text,opts);

let newText2 = calc(newText,"+");

EndResult = calc(newText2,"-")
}else if(opts == "+"){
let newText = calc(text,opts);


 EndResult = calc(newText,"-")
}else if(opts == "-"){

 EndResult = calc(text,opts);



}*/







return EndResult;
}