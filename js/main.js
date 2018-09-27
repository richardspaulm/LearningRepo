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

var data = [];
var myTable = document.getElementById("nestedTable");
for(var numRow = 0; numRow < 24; numRow++){
	var row = document.createElement("tr");
	myTable.append(row);

	for(var numCol = 0; numCol < 24; numCol++){
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
		data.push(col);
		row.append(col);
	}
}


var tableIndex;
function ColorfulTable(){
	tableIndex = Math.floor(Math.random() * data.length)
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	data[tableIndex].style.backgroundColor = "rgb( " + r + "," + g + "," + b + ")";
	setTimeout(ColorfulTable, 0);
}
ColorfulTable();












var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spec = ["!", "@", "#", "$", "%"];


function CheckPass(str){
	var condMet = 0;
	//Condition 1
	if(str.length >= 8)
		condMet +=1;
	//Condition 2
	for(var i = 0; i < nums.length; i++){
		if(str.includes(nums[i])){
			condMet += 1;
			break;
		}
	}
	//Condition 3
	for(var j = 0; j < spec.length; j++){
				if(str.includes(spec[j])){
					condMet +=1;
					break;
				}
			}
	if(condMet == 3)
		return true;
	else
		return false;
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

function CheckPhone(str){
	arr = str.split("");
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == "(" || arr[i] == ")" || arr[i] == "-")
			arr.splice(i, 1)
	}
	for(var i = 0; i < arr.length; i++){
		if(isNaN(arr[i]))
			return false;
	if(arr.length != 10)
		return false
	return true
	}
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

$("#hideButton").click(function(){
	$("h1").toggle(1000);
})
$("#alertP").click(function(){
	alert("You clicked me!")
})
console.log($(".colorChange").css("background-color"))
$("#changeStyle").click(function(){
	if($(".colorChange").css("background-color") == "rgba(0, 0, 0, 0)")
		$(".colorChange").css("background-color", "tomato");
	else
		$(".colorChange").css("background-color", "rgba(0, 0, 0, 0)");

})


var count = 0;
$("#addDate").click(function(){
	if(count % 2 == 0)
		$("#dateDiv").append("<p class='evenDate'>" + new Date() + "</p>");
	else 
		$("#dateDiv").append("<p class='oddDate'>" + new Date() + "</p>");

	count++
})




$("#clearDates").click(function(){
	$("#dateDiv").empty()
})


var t;
$("#ourButton").click(function(){
	clearTimeout(t);
	AddDate();
});


function AddDate(){
	if(count % 10 == 0){
		$("#dateDiv").empty();
	}
	var r = Math.floor(Math.random() * 256)       
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	if(count % 2 == 0)
		$("#dateDiv").append("<p class='evenDate' style='background-color: rgb(" + r + "," + g + "," + b + ")'>" + new Date() + "</p>");
	else 
		$("#dateDiv").append("<p class='oddDate' style='background-color: rgb(" + r + "," + g + "," + b + ")'>" + new Date() + "</p>");

	count++
	t = setTimeout(AddDate, 1000);
}


String.prototype.Jumble = function(){
	var jumbled = "";
	var arr = this.split("");
	while(arr.length > 0){
		randInt = 
		jumbled += 
		arr.splice(randInt, 1)
	}
	console.log(jumbled);
} 

function PlayGame(){
	var guess = 1
	var randNum = Math.ceil(Math.random() * 20)
	console.log(randNum)
	var userInput = window.prompt("Feed me a number between 1 and 20");
	while(userInput != randNum){
		if(userInput == null)
			return;
		if(userInput > randNum){
			userInput = window.prompt("Too high, try again");
			guess++;
		}
		else{
			userInput = window.prompt("Too low, try again")
			guess++;
		}
	}
	alert("You did it!\n Guesses: " + guess);
}
$(document).keydown(function(e){
	//up
	if(e.keyCode == 38){
		e.preventDefault();
		$("#move").animate({
			top: "-=4px"
		}, .1, 'linear')
	}
	//down
	if(e.keyCode == 40){
		e.preventDefault();
		$("#move").animate({
			top: "+=4px"
		}, .1, 'linear')
	}
	//left
	if(e.keyCode == 37){
		$("#move").animate({
			left: "-=4px"
		}, .1, 'linear')		
	}
	//right
	if(e.keyCode == 39){
		$("#move").animate({
			left: "+=4px"
		}, .1, 'linear')
	}
})
var x = 2;
var leftMove = 5
console.log($("#food").css("left"))
function MoveFood(){
	var w = document.documentElement.clientWidth;
	var leftVal = $("#food").css("left")
	var left = parseInt(leftVal.substr(0, (leftVal.length - 2)))
	if(left > (w - 50)){
		leftMove = -5
	} else if(left < 0){
		leftMove = 5
	}
	$("#food").animate({
		left: "+=" + leftMove.toString(),
		top: "+=" + (Math.cos(x) * 10).toString()	
	}, 0, 'linear')		
	x += .1;
	setTimeout(MoveFood, 10)
}
MoveFood();
var arrr = [1, 2, 3, 4];
var joined = arrr.join("");
console.log(joined)



$(document).keyup(function(){
	var fName = false;
	var lName = false;
	var phoneNum = true;
	var email = false;
	var password = false;

	if($("#fNameInput").val().length > 0)
		fName = true;
	if($("#lNameInput").val().length > 0)
		lName = true;
	phoneNum = CheckPhone($("#phoneInput").val())
	email = CheckEmail($("#emailInput").val())
	password = CheckPass($("#passInput").val())
	if(fName && lName && phoneNum && email && password){
		$("#formButt").removeAttr("disabled");
	} else {
		$("#formButt").attr("disabled", "disabled");
	}

})


