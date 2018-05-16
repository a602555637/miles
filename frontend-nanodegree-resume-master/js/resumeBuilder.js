/*
This is empty on purpose! Your code to build the resume will go here.
 */



 var age = 25;
 var awesomeThoughts = "Miles Tien is awesome";
 console.log(awesomeThoughts + "I am");
 
 $("#main").append(awesomeThoughts + " " +"E am ");

 var funThoughts = awesomeThoughts.replace("awesome","fun");

 $("#main").append(funThoughts);

 var name = "Miles Tien";
 var formattedName = HTMLheaderName.replace("%data%",name);
 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%",role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


/*
 var a = "audacity";
 var s = a[1].toUpperCase() + a.slice(2);

var sampleArray = [0,0,7];
function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}
console.log(incrementLastArrayElement(sampleArray));
*/

/*
var name = "AlbERt EINstEiN";
function nameChange(oldName){
	var finalName = oldName;
	var names = oldName.split(" ");
	names[1] = names[1].toUpperCase();
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	finalName = names.join(" ");


	return finalName;
};
console.log(nameChange(name));
*/


var bio = {
	"name" : "Miles Tien",
	"role" : "Web developer",
	"contact info" : "18589654",
	"picture URL" : "images/fry.jpg",
	"welcome message" : "hello",
	"skills" : ["daima","madai"]
}
$("#header").append(bio.name);


var work = {};
work.name = "Sence Pills";


if (document.getElementsByClassName("education-entry").length === 0) {
    document.getElementById("education").style.display = "none";
}
document.getElementById("education").style.backgroundColor = "black";

if (document.getElementsByTagName('h1').length === 0){
	document.getElementById('header').style.display = 'none';
}

var namee = document.getElementById('name').getElementsByTagName('names');

// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');


if (bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);

}
















