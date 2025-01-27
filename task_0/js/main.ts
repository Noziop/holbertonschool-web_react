interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Suzie",
    lastName: "Lebon",
    age: 25,
    location: "Paris"
};

const student2: Student = {
    firstName: "Zoé",
    lastName: "Martin",
    age: 23,
    location: "Lyon"
};

const studentsList: Student[] = [student1, student2];

// Création de la table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
