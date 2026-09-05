// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => {
  // Combine both objects into a new object
  return { ...obj1, ...obj2 };
};

// --- Example Usage ---
const person = { name: "Fatima", age: 22 };
const job = { role: "Developer", company: "Google" };

const employee = mergeObjects(person, job);

console.log(employee);
// Output: { name: 'Fatima', age: 22, role: 'Developer', company: 'Google' }
