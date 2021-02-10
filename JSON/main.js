var person = {
    name: "Bombadillo",
    age: 36,
    address:{
        street:"Emmakade 96",
        city: "Leeuwarden"
    },
    children:["Nico", "David", "Benazir"]
    }


person = JSON.stringify(person);
person = JSON.parse(person);

var people = [
    {
        name: "Crankjohre the Magician",
        age: 36
    },
    {
        name: "Benazir the African Flower",
        age: 29
    },
    {
        name: "Sara the Unknown",
        age: 25
    }

];


let output = "";

for(let i = 0; i < people.length; i++){
    output += '<li>'+people[i].age+'</li>';
    output += '<h5>'+people[i].name+'</h5>';

}

document.getElementById('person').innerHTML = output;
 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  // onreadystatechange is an event handler that is called whenever the readystate attribute changes
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    
    var people = response.people;

    var output = "";
    for(var i = 0; i < people.length; i++){
        output += '<li>'+people[i].name+'</li>';
    }
    document.getElementById('people').innerHTML = output;
  }
};

xhttp.open("GET", "peeps.json", true);
xhttp.send();