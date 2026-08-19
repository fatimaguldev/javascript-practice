let clr = ["orange", "blue", "green", "red", "pink", "yellow"];
clr.splice(4); // pink and yellow will be return and will be deleted from the array like its start from 4 and end to 5 which is yellow and start 4 options will be present

clr.splice(0, 1); //orange will be deleted from the list

clr.splice(1, 0, "brown");
//output : ['brown', 'olive', 'olive', 'blue', 'green', 'red']


