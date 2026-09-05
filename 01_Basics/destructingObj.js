const students = {
    name: "fatima",
    age: 22,
    class: 15,
    subjects: ["urdu", "eng", "maths"],
    username: "fatima2110",
    password: "abcd123"
};

// let username = students.username;
// let password = students.password;


// can be done be destructuring

let { username:user, password:secret, city: location=Islamabad } = students;

