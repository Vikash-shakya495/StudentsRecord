let students = [
    {"Student Name": "Salmaan Ahmed",Marks: "38%",Class: "3rd",Address: "India"},
    {"Student Name": "Riya Sharma",Marks: "85%",Class: "10th",Address: "123, ABC Colony, Delhi"},
    {"Student Name": "Rohan Patel",Marks: "70%",Class: "12th",Address: "456, XYZ Street, Mumabi"},
    {"Student Name": "Priya Singh",Marks: "95%",Class: "8th",Address: "789, PQR Nagar, Banglore"},
    {"Student Name": "Ankit Gupta",Marks: "60%",Class: "9th",Address: "101, LMN Road, Kolkata"},
    {"Student Name": "Neha Verma",Marks: "80%",Class: "11th",Address: "222, DEF Avenue, Chennai"},
    {"Student Name": "Manoj Kumar",Marks: "75%",Class: "10th",Address: "333, GHI Lane, Hyderabad"},
    {"Student Name": "Pooja Mishra",Marks: "88%",Class: "12th",Address: "444, STU Colony, Pune"},
    {"Student Name": "Rajesh Singhania",Marks: "92%",Class: "9th",Address: "555, VWX Street, Jaipur"},
    {"Student Name": "Sunita jain",Marks: "78",Class: "11th",Address: "666, RST Road, Ahmedabad"},
    {"Student Name": "Jennifer Smith",Marks: "87%",Class: "10th Grade",Address: "123 Maple Street, Anytown, USA"},
    {"Student Name": "Michael Johnson",Marks: "75%",Class: "9th Grade",Address: "456 Oak Avenue, Smailvill, U..."},
];
// objectLength = Object.keys(students).length;
// const names = students.map((curValue,index,students)=>{
//     for(const i = 3; i < students.length; i++){ 
//             return `<li>Student name: ${students[i]["Student Name"]}</li><li>Marks: ${students[i]["Marks"]}</li><li>Class: ${students[i]["Class"]}</li><li>Address: ${students[i]["Address"]}</li>`;
//         }
// });
//         const div = document.querySelector('.students_record');

//         div.innerHTML = `<ul>${names.join('')}</ul>`;
const div = document.querySelector('.students_record');

if (div) {
  const ul = document.createElement('ul');

  students.forEach((student) => {
    const liStudentName = document.createElement('li');
    liStudentName.textContent = `Student name: ${student['Student Name']}`;
    ul.appendChild(liStudentName);

    const liMarks = document.createElement('li');
    liMarks.textContent = `Marks: ${student['Marks']}`;
    ul.appendChild(liMarks);

    const liClass = document.createElement('li');
    liClass.textContent = `Class: ${student['Class']}`;
    ul.appendChild(liClass);

    const liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${student['Address']}`;
    ul.appendChild(liAddress);
  });

  div.innerHTML = '<div class="you"></div>';
  div.appendChild(ul);
  div.style.border = "1px solid green"; 

}