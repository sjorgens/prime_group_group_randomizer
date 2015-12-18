var NUMBER_STUDENTS = 20;
var NUMBER_BUTTONS = 11;
var groupNumber = 0;
var studentArray = [];

var scott = new Student('scott', 1);
var kenzie = new Student('kenzie', 2);
var matthew = new Student('matthew', 3);
var joe = new Student('joe', 4);
var altamir = new Student('altamir', 5);
var mark = new Student('mark', 6);
var amber = new Student('amber', 7);
var anthony = new Student('anthony', 8);
var brooks = new Student('brooks', 9);
var natalie = new Student('natalie', 10);
var charlie = new Student('charlie', 11);
var chris = new Student('chris', 12);
var eric = new Student('eric', 13);
var jeremy = new Student('jeremy', 14);
var nathan = new Student('nathan', 15);
var robby = new Student('robby', 16);
var zach = new Student('zach', 17);
var sam = new Student('sam', 18);
var liz = new Student('liz', 19);
var paul = new Student('paul', 20);

var studentArray = [scott, kenzie, matthew, joe, altamir, mark, amber, anthony,
	brooks, natalie, charlie, chris, eric, jeremy, nathan, robby, zach, sam, liz,
	paul];

/////////////////////////////////////////////////////////////////////////////////
////////////  Broken - failed constructor to build array of objects  ////////////
/////////////////////////////////////////////////////////////////////////////////
// var studentList = ["scott", "kenzie", "matthew", "joe", "altamir", "mark",
// 	"amber", "anthony",	"brooks", "natalie", "charlie", "chris", "eric",
// 	"jeremy", "nathan", "robby", "zach", "sam", "liz", "paul"];

// Studentarraybuilder();

// console.log(robby);

// function Studentarraybuilder(){
// 	var studentCount = 0;
// 	for(var i = 0; i < studentList.length; i++) {
// 		studentCount++;
// 		// studentArray.push((Student(studentList[i], studentCount));
// 		Student(studentList[i], studentCount);
// 	}
// }

/////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
	for (var i = 1; i <= NUMBER_BUTTONS; i++){
		$("#container").append("<button id='group' class='" + i + "'>" + i + "</button>");
	}
	$("#container").append("<div><button class='refresh'>Refresh</button></div>");
	$("#container").on("click", "#group", createGroups);
	$("#container").on("click", ".refresh", refreshGroups);
});

////////////////  Determine Number of Groups  //////////////////
function createGroups(){
	groupNumber = parseInt($(this).attr('class'));
	
	//  Clear groups from the DOM
	$("#groups").empty();
}

////////////////  Refresh Group Lists   //////////////////
function refreshGroups(){

	//  Clear groups from the DOM
	$("#groups").empty();

	// Shuffling the student Array
	var tempArray = studentArray.slice(0);
	tempArray = buildRandomArray(tempArray);

	//  Console log current order of objects in tempArray
	for (var i = 0; i <= tempArray.length; i++){
		console.log(tempArray[i]);	
	}
	
	//  Build groups and append to DOM
	for (var i = 1; i <= groupNumber; i++){
		var numberperGroup = NUMBER_STUDENTS / groupNumber;
		console.log(numberperGroup);
		$("#groups").append("<div class='group" + i + "'>Group " + i + "</div>");
		for (var j = 1; j <= numberperGroup; j++){
			if (tempArray.length > 0){
				$("#groups").children().last().append("<div>" + tempArray[0].name + "</div>");
				tempArray.shift();
			}
		}
	}
}

//////////////  Constructor  ////////////////
function Student (name, id){
	this.name = name;
	this.id = id;
}

//////////////  Generate Random Number  /////////////////
function randomNumber (min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

//////////////  Shuffle the Array order  ////////////////
function buildRandomArray(array){
	var tmp, current, top = array.length;
  	if(top) while(--top) {
    	current = Math.floor(Math.random() * (top + 1));
    	tmp = array[current];
    	array[current] = array[top];
    	array[top] = tmp;
	}
  	return array;
}