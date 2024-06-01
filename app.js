var userData = [
    {
      name: 'John Doe',
      fatherName: 'Richard Doe',
      age: 16,
      rollNo: '101',
      class: '10th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Jane Smith',
      fatherName: 'Robert Smith',
      age: 15,
      rollNo: '102',
      class: '9th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Michael Johnson',
      fatherName: 'James Johnson',
      age: 17,
      rollNo: '103',
      class: '11th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Emily Davis',
      fatherName: 'William Davis',
      age: 14,
      rollNo: '104',
      class: '8th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Jessica Brown',
      fatherName: 'Charles Brown',
      age: 16,
      rollNo: '105',
      class: '10th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Daniel Wilson',
      fatherName: 'Thomas Wilson',
      age: 15,
      rollNo: '106',
      class: '9th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Sarah Taylor',
      fatherName: 'Andrew Taylor',
      age: 17,
      rollNo: '107',
      class: '11th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'David Lee',
      fatherName: 'George Lee',
      age: 14,
      rollNo: '108',
      class: '8th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Laura Martin',
      fatherName: 'Paul Martin',
      age: 16,
      rollNo: '109',
      class: '10th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Kevin White',
      fatherName: 'Mark White',
      age: 15,
      rollNo: '110',
      class: '9th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Anna Harris',
      fatherName: 'Steven Harris',
      age: 17,
      rollNo: '111',
      class: '11th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Brian Clark',
      fatherName: 'Edward Clark',
      age: 14,
      rollNo: '112',
      class: '8th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Sophia Lewis',
      fatherName: 'Henry Lewis',
      age: 16,
      rollNo: '113',
      class: '10th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Christopher Walker',
      fatherName: 'Frank Walker',
      age: 15,
      rollNo: '114',
      class: '9th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Grace Hall',
      fatherName: 'Peter Hall',
      age: 17,
      rollNo: '115',
      class: '11th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Justin Allen',
      fatherName: 'Patrick Allen',
      age: 14,
      rollNo: '116',
      class: '8th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Olivia Young',
      fatherName: 'Bruce Young',
      age: 16,
      rollNo: '117',
      class: '10th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Nathan Hernandez',
      fatherName: 'Larry Hernandez',
      age: 15,
      rollNo: '118',
      class: '9th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Mia King',
      fatherName: 'Joe King',
      age: 17,
      rollNo: '119',
      class: '11th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Ethan Wright',
      fatherName: 'Stanley Wright',
      age: 14,
      rollNo: '120',
      class: '8th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Ava Lopez',
      fatherName: 'Timothy Lopez',
      age: 16,
      rollNo: '121',
      class: '10th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Jacob Scott',
      fatherName: 'Chris Scott',
      age: 15,
      rollNo: '122',
      class: '9th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Samantha Green',
      fatherName: 'Shawn Green',
      age: 17,
      rollNo: '123',
      class: '11th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Andrew Adams',
      fatherName: 'Jason Adams',
      age: 14,
      rollNo: '124',
      class: '8th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
    {
      name: 'Ella Baker',
      fatherName: 'Ryan Baker',
      age: 16,
      rollNo: '125',
      class: '10th Grade',
      present: 'P',
      absent: 'A',
      leave: 'L',
    },
  ];
  
  var userTable = document.getElementById("userTable");
  var userName = document.getElementById("name");
  var fatherName = document.getElementById("fatherName");
  var grade = document.getElementById("class");
  var rollno = document.getElementById("rollno");
  var age = document.getElementById("age");
  
  function addData() {
    userTable.innerHTML = "";
    for (var i = 0; i < userData.length; i++) {
      console.log(userTable.innerHTML)
        userTable.innerHTML += `
      
      <tr>
              <td>0${i + 1}</td>
              <td>${userData[i].name}</td>
              <td>${userData[i].fatherName}</td>
              <td>${userData[i].class}</td>
              <td>${userData[i].rollNo}</td>
              <td>${userData[i].age}</td>
              <td onclick="likeUser(this)"><i class="fa-regular fa-heart"></i></td>
              <td onclick="updateAttendance(this, 'present')">${userData[i].present}</td>
              <td onclick="updateAttendance(this, 'absent')">${userData[i].absent}</td>
              <td onclick="updateAttendance(this, 'leave')">${userData[i].leave}</td>
          </tr>
      `;
    }
  }
  addData();
  
  function addUser() {
    var obj = {
      name: userName.value,
      fatherName: fatherName.value,
      rollNo: rollno.value,
      age: age.value,
      present: 'P', // Default values
      absent: 'A',
      leave: 'L'
    };
  
    userData.push(obj);
    console.log(userData);
    addData();
  }
  
  function likeUser(element) {
    if (element.firstElementChild.className === "fa-regular fa-heart") {
      element.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
      element.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  }


  function updateAttendance(element, status) {
    var row = element.parentElement;
    var rowIndex = row.rowIndex - 1; // Adjusting for header row
    switch (status) {
        case 'present':
            userData[rowIndex].present = 'P';
            userData[rowIndex].absent = '';
            userData[rowIndex].leave = '';
            break;
        case 'absent':
            userData[rowIndex].present = '';
            userData[rowIndex].absent = 'A';
            userData[rowIndex].leave = '';
            break;
        case 'leave':
            userData[rowIndex].present = '';
            userData[rowIndex].absent = '';
            userData[rowIndex].leave = 'L';
            break;
        default:
            break;
    }
    addData(); // Update the table with new data
    updateStatusBoxes();
}

function updateStatusBoxes() {
  var presentBox = document.getElementById("presentBox");
  var absentBox = document.getElementById("absentBox");
  var leaveBox = document.getElementById("leaveBox");

  var presentList = [];
  var absentList = [];
  var leaveList = [];

  userData.forEach(function (user) {
      if (user.present === 'P') {
          presentList.push(user.name);
      } else if (user.absent === 'A') {
          absentList.push(user.name);
      } else if (user.leave === 'L') {
          leaveList.push(user.name);
      }
  });

  presentBox.innerHTML = "<h3>Present</h3>" + presentList.join("<br>");
  absentBox.innerHTML = "<h3>Absent</h3>" + absentList.join("<br>");
  leaveBox.innerHTML = "<h3>Leave</h3>" + leaveList.join("<br>");
} 