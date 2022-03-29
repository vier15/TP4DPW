/*
NIM : 2007874 
Nama : Raihan Fitrah V Ramadhan
Prodi/Kelas : Ilmu Komputer/C2
*/

function addTable() {

    var name = document.getElementById('nama').value;
    var bday = document.getElementById('tanggalLahir').value;
    var gender = document.querySelector('input[name = "jenisKelamin"]:checked').value;
    var hobby = [];
    var religion = document.getElementById('agama').value;
    var message = document.getElementById('pesan').value;

    var checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    for(let i = 0; i < checkbox.length; i++) {
        hobby.push(checkbox[i].value)
    }

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('table').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Label";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Value";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    thead.appendChild(row_1);

    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "Nama";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = name;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    tbody.appendChild(row_2);

    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "Tanggal Lahir";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = bday;

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    tbody.appendChild(row_3);

    let row_4 = document.createElement('tr');
    let row_4_data_1 = document.createElement('td');
    row_4_data_1.innerHTML = "Jenis Kelamin";
    let row_4_data_2 = document.createElement('td');
    row_4_data_2.innerHTML = gender;

    row_4.appendChild(row_4_data_1);
    row_4.appendChild(row_4_data_2);
    tbody.appendChild(row_4);

    let row_5 = document.createElement('tr');
    let row_5_data_1 = document.createElement('td');
    row_5_data_1.innerHTML = "Hobi";
    let row_5_data_2 = document.createElement('td');
    row_5_data_2.innerHTML = hobby;

    row_5.appendChild(row_5_data_1);
    row_5.appendChild(row_5_data_2);
    tbody.appendChild(row_5);

    let row_6 = document.createElement('tr');
    let row_6_data_1 = document.createElement('td');
    row_6_data_1.innerHTML = "Agama";
    let row_6_data_2 = document.createElement('td');
    row_6_data_2.innerHTML = religion;

    row_6.appendChild(row_6_data_1);
    row_6.appendChild(row_6_data_2);
    tbody.appendChild(row_6);

    let row_7 = document.createElement('tr');
    let row_7_data_1 = document.createElement('td');
    row_7_data_1.innerHTML = "Pesan";
    let row_7_data_2 = document.createElement('td');
    row_7_data_2.innerHTML = message;

    row_7.appendChild(row_7_data_1);
    row_7.appendChild(row_7_data_2);
    tbody.appendChild(row_7);

    var root = document.getElementsByTagName('table')[0]; // '0' to assign the first (and only `HTML` tag)

    root.className += 'table p-3';

}

