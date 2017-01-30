function whoAmI(name, age){
	var yob = yearOfBirth(age);
    console.log("Hi, my name is ${name}, and I'm ${age} years old");
    console.log("I was born in ${yob}");

    
}

function yearOfBirth(age) {
	var yob = (2017 - age);
	return yob;
}

whoAmI("Jake", 23);

