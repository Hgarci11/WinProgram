console.log(course.name[0]);
console.log(course.teachers[1]);
console.log(course.student[0].name);
console.log(course.student[1].computer.type);
console.log(course.preReqs[1]);
console.log(course.preReqs[1].equiptment.OSOption[1])
console.log(course)
var i = 0;
var osxList = [];
while(i < course.students.length){
    if(course.students[i].computer.OS === 'OSX'){
        osxList.push(course.students[i].name);
    }
    i++;
}

console.log(osxList);