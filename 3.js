let editIndex = null;

// Load employees
function loadEmployees() {

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    let table = document.getElementById("empTable");

    table.innerHTML = "";

    employees.forEach((emp, index) => {

        table.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.dept}</td>
            <td>${emp.email}</td>
            <td>${emp.phone}</td>
            <td>
                <button onclick="editEmployee(${index})"
                style="background:blue;color:white;border:none;padding:5px 8px;cursor:pointer;">
                    Edit
                </button>

                <button onclick="deleteEmployee(${index})"
                style="background:red;color:white;border:none;padding:5px 8px;cursor:pointer;">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

// Delete employee
function deleteEmployee(index) {

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.splice(index, 1);

    localStorage.setItem("employees", JSON.stringify(employees));

    loadEmployees();
}

// Edit employee (fill data into form)
function editEmployee(index) {

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    let emp = employees[index];

    editIndex = index;

    // send data to add employee page (simple method)
    localStorage.setItem("editEmployee", JSON.stringify(emp));

    window.location.href = "add-employee.html";
}

loadEmployees();