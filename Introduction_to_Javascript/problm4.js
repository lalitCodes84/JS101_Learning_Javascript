let student = {
    name: "Lalit Sharma",
    school: "SARDAR PATEL ACADEMY",
    grade: "A",
    section: "A",
    rollno: "208020",
    marks: {
        math: 72,
        science: 85,
        english: 77,
    }
};


console.log(`School: ${student.school}`);
console.log("REPORT CARD");
console.log(`name: ${student.name}`);
console.log(`Grade: ${student.grade}`);
console.log(`Section: ${student.section}`);
console.log(`Roll No: ${student.rollno}`);

console.log("Subject\t\tMarks");
console.log("#################################################");
console.log(`Math\t\t${student.marks.math}`);
console.log(`Science\t\t${student.marks.science}`);
console.log(`English\t\t${student.marks.english}`);
console.log("##################################################");
