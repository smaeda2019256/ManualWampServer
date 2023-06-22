function agregarFichaje() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var nacionalidad = document.getElementById('nacionalidad').value;
    var ultimoClub = document.getElementById('ultimoClub').value;
    var nuevoClub = document.getElementById('nuevoClub').value;

    var table = document.getElementById('fichajesTable');
    var row = table.insertRow(table.rows.length);

    var nombreCell = row.insertCell(0);
    var edadCell = row.insertCell(1);
    var nacionalidadCell = row.insertCell(2);
    var ultimoClubCell = row.insertCell(3);
    var nuevoClubCell = row.insertCell(4);

    nombreCell.innerHTML = nombre;
    edadCell.innerHTML = edad;
    nacionalidadCell.innerHTML = nacionalidad;
    ultimoClubCell.innerHTML = ultimoClub;
    nuevoClubCell.innerHTML = nuevoClub;
}