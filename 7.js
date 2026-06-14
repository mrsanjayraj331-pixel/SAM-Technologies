<script>
document.addEventListener("DOMContentLoaded", function () {

    // Always get fresh data
    function getEmployees() {
        return JSON.parse(localStorage.getItem("employees")) || [];
    }

    // Load table
    function loadDashboard(data) {

        let table = document.getElementById("dashTable");
        table.innerHTML = "";

        data.forEach(emp => {

            table.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.dept}</td>
                <td>${emp.email}</td>
                <td>${emp.phone}</td>
            </tr>
            `;
        });
    }

    // LIVE SEARCH (SAFE VERSION)
    let searchBox = document.getElementById("dashSearch");

    if (searchBox) {

        searchBox.addEventListener("input", function () {

            let value = this.value.toLowerCase();

            let employees = getEmployees();

            let filtered = employees.filter(emp =>
                emp.id.toLowerCase().includes(value) ||
                emp.name.toLowerCase().includes(value) ||
                emp.dept.toLowerCase().includes(value) ||
                emp.email.toLowerCase().includes(value) ||
                emp.phone.toLowerCase().includes(value)
            );

            loadDashboard(filtered);
        });
    }

    // INITIAL LOAD
    loadDashboard(getEmployees());

});
</script>