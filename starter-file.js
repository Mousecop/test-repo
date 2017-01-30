function whoAmI(name, age){
	var yob = yearOfBirth(age);
    console.log("Hi, my name is " + name + " and I'm " + age + " years old");
    console.log("I was born in " + yob + "!");   
}

function yearOfBirth(age) {

    if(age < 0){
        throw new Error("Age cannot be negative!");
    }else{
        return (2017 - age);   
    }
}

whoAmI("Jake", 21);

