function whoAmI(name, age){
	var yob = yearOfBirth(age);
    console.log("Hi, my name is " + name + " and I'm " + age + " years old");
    console.log("I was born in " + yob + "!");   
}

function yearOfBirth(age) {
	try {
		if(age < 0) {
			throw new Error("Age can't be negative");
		}
	}
	catch(e) {
		console.log(e.message);
	}

 }

whoAmI("Jake", 21);

