var out,
  	offset,
  	str,
  	i,
  	code,
  	a,
    char,
    numberReg;

document.getElementById('offset').oninput = function () {
  var numberReg =  /^[0-9]+$/;
  offset = +document.getElementById('offset').value;
    if (!numberReg.test(offset)) {
      $('#valid').html('Отстъпа може да съдържа само числа');
      $('#valid').css('color', '#f44256'); 
    } else {
      $('#valid').html('');
    }    
  console.log(offset);	
}

document.getElementById('in').oninput = function () {
  str = this.value;
  out = '';
    for (i = 0; i < str.length; i++) {
    	code = str.charCodeAt(i);
      char = str.charCodeAt(i);
      console.log (char);
      if (code > 31 && code <65) {
        out += String.fromCharCode(code);
      } else {
        code += offset;
        	if (code > 122 && (char >=97 && char <=122)) {
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
  str = this.value;
  out = '';
    for (i = 0; i < str.length; i++) {
      code = str.charCodeAt(i);
      char = str.charCodeAt(i);
      console.log (char);
      if (code > 31 && code <65) {
        out += String.fromCharCode(code);
      } else {
        code -= offset;
          if (code < 97 && (char >=97 && char <=122) ) {
            a = 97 - code;
            code = 123 - a;
          } else if (code < 65 && (char >=65 && char <=90)) {
            a = 65 - code;
            code = 91 - a;
          } else if (code < 1040 && (char >=1040 && char <=1071)) {
            a = 1040 - code;
            code = 1072 - a;
          } else if (code < 1072 && (char >=1072 && char <=1103)) {
            a = 1072 - code;
            code = 1104 - a;
          }
      out += String.fromCharCode(code);
    }
    console.log(str.charCodeAt(i));
  }
  document.getElementById('out3').innerHTML = out; 
}

function myFunction() {
    document.getElementById("myForm").reset();
    document.getElementById("out").innerHTML = "";
    document.getElementById("out3").innerHTML = "";
    document.getElementById("valid").innerHTML = "";
}