// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
const webdesign = {
  grades: [9,10,11],
  period: 3,
  instructor: `Dominguez`,
  subject: `elective`,
  semester: 2,
  title: `webdesign`
};

console.log(webdesign);
// 2. Write a statement that will log some information about your course to the console using dot-notation.
console.log(`i am in the ${webdesign.grades[2]} grade`);
// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
const studyhall = {
  grades: [10,11],
  period: 7,
  instructor: `Sydnor`,
  subject: `elective`,
  semester: 2,
  title: `studyhall`
};

console.log(studyhall);
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!
function compareClass (anyCourse) {
  console.log(`${anyCourse.teacher} is the teacher of this class`);
  return anyCourse;
};

compareClass(webdesign);
compareClass(studyhall);

// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.
function updateCourse(aCourse, newName){
  //modify name of courses
  aCourse.name = newName
  //console.log abt update
  console.log(`the course name has changed to: ${aCourse.name}`);
}
updateCourse(webdesign, `computer science`);
// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function talkAboutMyCourses(anyCourse) {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.
const myCourses = [webdesign,studyhall];

myCourses.map((course) => {
  talkAboutMyCourses(course);
})
