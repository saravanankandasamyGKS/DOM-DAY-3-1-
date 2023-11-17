function addRow() {
    var table = document.getElementById("dataTable");
    var row = table.insertRow(-1);

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.getElementById("gender").value;
    var food = Array.from(document.querySelectorAll('input[name="foodCheckbox"]:checked')).map(checkbox => checkbox.value).join(", ");
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var rowData = [firstName, lastName, address, pincode, gender, food, state, country];

    for (var i = 0; i < rowData.length; i++) {
        var cell = row.insertCell(i);
        cell.innerHTML = rowData[i];
    }

    // Clear form fields
    document.getElementById("myForm").reset();
}
