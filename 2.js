document.addEventListener("DOMContentLoaded", function () {

    let editData = JSON.parse(localStorage.getItem("editEmployee"));

    if (editData) {
        document.getElementById("empId").value = editData.id;
        document.getElementById("empName").value = editData.name;
        document.getElementById("empDept").value = editData.dept;
        document.getElementById("empEmail").value = editData.email;
        document.getElementById("empPhone").value = editData.phone;
        document.getElementById("empGender").value = editData.gender || "";
    }

    document.getElementById("empForm").addEventListener("submit", function (e) {

        e.preventDefault();

        let employees = JSON.parse(localStorage.getItem("employees")) || [];

        let employee = {
            id: document.getElementById("empId").value,
            name: document.getElementById("empName").value,
            dept: document.getElementById("empDept").value,
            email: document.getElementById("empEmail").value,
            phone: document.getElementById("empPhone").value,
            gender: document.getElementById("empGender").value
        };

        if (editData) {

            let index = employees.findIndex(emp => emp.id === editData.id);

            if (index !== -1) {
                employees[index] = employee;
            }

            localStorage.removeItem("editEmployee");

        } else {

            employees.push(employee);

        }

        localStorage.setItem("employees", JSON.stringify(employees));

        alert("Employee Saved Successfully!");

        window.location.href = "Employee List.html";

    });

});