//function displayname(firstName, lastName, age=18, height=150) {
  // alert(firstName + " " + lastName + " " + age + " " + height)
//}

//displayname("Akinnuoye", "Oluwaseun")

//function sum() {
   // let result = 20 + 20;
    //console.log(`the result is ${result}`);
//}

//sum();
//sum();
//sum();//

function getFullName(firstName ="", lastName ="") {
    const fullName = firstName + " " + lastName
    return fullName
}

let fullName = getFullName("Timothy", "Akinnuoye")
let fullName2 = getFullName("Timothy", "oluwaseun")

console.log(fullName)
console.log(fullName2)