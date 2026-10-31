const express = require('express');

const app = express();

// Static student data
const students = [
    {
        id: 1,
        name: "Virat",
        age: 22,
        course: "Computer Science"
    },
    {
        id: 2,
        name: "Rahul",
        age: 21,
        course: "Information Science"
    },
    {
        id: 3,
        name: "Pavan",
        age: 23,
        course: "Electronics"
    }
];

// GET API
app.get('/students', (req, res) => {
    res.json(students);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 4900");
});
