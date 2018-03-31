var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = prompt ('Please enter your name?');
 
//I don't understand why === -1?
if (allNames.indexOf(newName) === -1)  {
    console.log(allNames.push(newName));
} else if (allNames.indexOf(newName) > -1) {
    alert('Name already exist');
}

document.getElementById('newName').innerHTML = newName;

console.log(allNames);
