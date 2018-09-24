function SplitString(str, splitAt){
	var output = [];
	var lastIndex = 0;
	if(!str.includes(splitAt)){
		output.push(str);
		return output;
	}
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) == splitAt){
			var addString = str.slice(lastIndex, i);
			output.push(addString);
			lastIndex = i + 1;
		}
	}
	var lastString = str.slice(lastIndex, str.length);
	if(lastString.length != 0)
		output.push(lastString);
	return output;
}
"use strict";


var specialChars = ["a", "b", "c", "d", "e", "f", "g", "h"," i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"[", "]", ";", "/","@","#","$","%","&","(", ")", "{", "}"]


var pass = "";
for(var i = 0; i < 12; i++){
	var index = Math.floor(Math.random() * specialChars.length);
	if(Math.random() > 0.5){
		pass += specialChars[index].toUpperCase();
	} else {
		pass += specialChars[index];
	}
}
//console.log(pass);


var myTable = document.getElementById("nestedTable");
for(var numRow = 0; numRow < 8; numRow++){
	var row = document.createElement("tr");
	myTable.append(row);

	for(var numCol = 0; numCol < 8; numCol++){
		var col = document.createElement("td");
		if(numRow % 2 == 0){
			if(numCol % 2 == 0)
				col.setAttribute("class", "tableData1");
			else
				col.setAttribute("class", "tableData2");
		} else if(numRow % 2 != 0){
			if(numCol % 2 != 0)
				col.setAttribute("class", "tableData1");
			else
				col.setAttribute("class", "tableData2");
		}
		row.append(col);
	}
}
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spec = ["!", "@", "#", "$", "%"];


function CheckPass(){
	var passToCheck = document.getElementById("passCheck").value;
	var condMet = 0;
	//Condition 1
	if(passToCheck.length >= 8)
		condMet +=1;
	//Condition 2
	for(var i = 0; i < nums.length; i++){
		if(passToCheck.includes(nums[i])){
			condMet += 1;
			break;
		}
	}
	//Condition 3
	for(var j = 0; j < spec.length; j++){
				if(passToCheck.includes(spec[j])){
					condMet +=1;
					break;
				}
			}
	if(condMet == 3)
		alert("It worked");
	else
		alert("no.");
}


function CheckEmail(str){
	str = str.toLowerCase();
	if(str.charAt(0) == "@")
		return false
	if(str.includes(" "))
		return false;
	var arr1 = str.split("@");
	if(arr1.length != 2)
		return false;
	if(!arr1[1].includes("."))
		return false;
	for(var i = 0; i < 26; i++){
		if(str.endsWith(specialChars[i]))
			return true;
	} 
	return false;
}

function EmailAlert(){
	var emailEntry = document.getElementById("emailEntry").value;
	if(CheckEmail(emailEntry))
		alert("Good");
	else
		alert("Valid email please");
}

//Logs first index of char in string
function IndexAt(str, char){
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) == char)
			console.log(i);
			return;
	}
	console.log("Char not found");
}

function IncludesChar(str, char){
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) == char)
			return true;
	}
	return false;
}

function SliceString(str, start, stop){
	var word = "";
	for(var i = start; i <= stop; i++){
		word += str[i];
	}
	return word;
}

function ModString(val){
	//Check if assigned value is a string, otherwise return early
	if(typeof val != "string"){
		console.log("Please use a string");
		return;
	}
	this.val = val,
	this.ModSlice = function(start, stop){
		var newVal = "";
		for(var i = start; i <= stop; i++){
			newVal += this.val[i];
		}
		this.val = newVal;
	},
	this.LastIndex = function(char){
		for(var i = this.val.length; i >= 0; i++){
			if(this.val.charAt(i) == char){
				console.log(i);
				return;
			}
		}
	},
	this.CountLength = function(){
		var count = 0;
		while(this.val[count] != undefined){
			count++;
		}
		console.log(count)
	}
}


var babyCat = new ModString("kitten");
var myString = new ModString("This is a string");


babyCat.CountLength();
