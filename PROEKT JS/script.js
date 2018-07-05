var out,
	offset,
	str,
	help,
	i,
	code,
	a,
  char;
document.getElementById('offset').oninput = function () {
	offset = +document.getElementById('offset').value;
	console.log(offset);
}


document.getElementById('in').oninput = function () {
 
help = document.getElementById('help')
str = this.value;
out = '';
  for (i = 0; i < str.length; i++) {
  	code = str.charCodeAt(i);
    char = str.charCodeAt(i);
    console.log (char);
   if (code > 31 && code <66) {
    out += String.fromCharCode(code);
   }
   else {
    code += offset;
    	if (code > 122 && (char >=97 && char <=122) ) {
    		a = code - 122;
    		code = a + 96;
    	} else if (code > 90 && (char >=65 && char <=90)) {
    		a = code - 90;
    		code = a + 64;
    	} else if (code > 1071 && (char >=1040 && char <=1071)) {
        a = code - 1071;
        code = a + 1039;
      } else if (code > 1103 && (char >=1072 && char <=1103)) {
        a = code - 1103;
        code = a + 1071;
      }
    out += String.fromCharCode(code);
   }
   console.log(str.charCodeAt(i));
  }
 document.getElementById('out').innerHTML = out; 
}﻿

document.getElementById('out2').oninput = function(){
	
	// str = this.value;
	// out = '';
	// for (i=0; i< str.length; i++){
	// 	code = str.charCodeAt(i);
	// 	code = code - offset;
	// 	out += String.fromCharCode(code);
	// }
	// document.getElementById('out3').innerHTML = out;
  help = document.getElementById('help')
str = this.value;
out = '';
  for (i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    char = str.charCodeAt(i);
    console.log (char);
   if (code > 31 && code <66) {
    out += String.fromCharCode(code);
   }
   else {
    code -= offset;
      if (code > 122 && (char >=97 && char <=122) ) {
        a = code - 122;
        code = a + 96;
      } else if (code > 90 && (char >=65 && char <=90)) {
        a = code - 90;
        code = a + 64;
      } else if (code > 1071 && (char >=1040 && char <=1071)) {
        a = code - 1071;
        code = a + 1040;
      } else if (code > 1103 && (char >=1072 && char <=1103)) {
        a = code - 1103;
        code = a + 1072;
      }
    out += String.fromCharCode(code);
   }
   console.log(str.charCodeAt(i));
  }
 document.getElementById('out3').innerHTML = out; 
}