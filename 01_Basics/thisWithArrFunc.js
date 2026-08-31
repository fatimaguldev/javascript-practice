const student = {
  name: "fatima gul",
  marks: 99,
  prop: this, //will be window object //golbal scope

  //NORMAL FUNCTION

  getName: function () {
    console.log(this);

    return this.name;
  },

  //ARROW FUNCTION

  getMarks: () => {
    console.log(this); //parent scope -> WINDOW object

    return this.marks;
  },

  // the above 2 methods are not good as is...bcz through this...we can access our marks now lets do another method

  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //student 
    }, 2000);
  },

  getInfo2: function () {
    setTimeout( function() {
      console.log(this); //window
    }, 2000);
  },
};