// PUSH METHOD (will add element at the end)

let cars = ["BMW", "Alto", "G-wagon", "Porche"];
cars.push("toyota", "ferari"); //it will add toyota at the end of the cars array

// output is :  ['BMW', 'Alto', 'G-wagon', 'Porche', 'toyota', 'toyota', 'ferari']

// POP METHOD  (will delete the last element and return it "ferari will delete from above list")
cars.pop();

// UNSHIFT METHOD

cars.unshift("Lamborgini"); //will add this to the start

// output: ["Lamborgini", "BMW", "Alto", "G-wagon", "Porche", "toyota", "toyota"];

// SHIFT METHOD

cars.shift();  //this will delete the first cars lambo and return it to us

