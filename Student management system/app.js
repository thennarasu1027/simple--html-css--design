function getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

function saveStudents(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;

    if(id === "" || name === "" || dept === "") {
        alert("Fill all fields");
        return;
    }

    let students = getStudents();

    students.push({ id, name, dept });
    saveStudents(students);

    alert("Student Added Successfully");

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
}

function viewStudents() {
    let students = getStudents();
    let table = document.getElementById("table");

    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Action</th>
        </tr>
    `;

    students.forEach((s, index) => {
        table.innerHTML += `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.dept}</td>
            <td><button onclick="deleteStudent(${index})">Delete</button></td>
        </tr>
        `;
    });
}

function deleteStudent(index) {
    let students = getStudents();
    students.splice(index, 1);
    saveStudents(students);
    viewStudents();
}