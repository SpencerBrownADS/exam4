

const express = require('express');

const app = express();

app.use(express.static("public"));


app.get("/course", (req, res) => {

    res.send("CIS 131 - Exam 4");
});

app.get("/pets", (req, res) => {

    const pets = [
        { id: 1, type: "dog", name: "Diesel" },
        { id: 2, type: "cat", name: "Milo" },
        { id: 3, type: "bird", name: "Sky" }
    ];

    res.json(pets);

});


app.get("/getpet/:id", (req, res) => {

    let idToFind = parseInt(req.params.id)

    const pets = [
        { id: 1, type: "dog", name: "Diesel" },
        { id: 2, type: "cat", name: "Milo" },
        { id: 3, type: "bird", name: "Sky" }
    ];

    let petToFind = pets.forEach(pet => {

        if (pet.id == idToFind) {

            return pet;
        }
    });

    const result = pets.filter(findId);
    
    res.json(petToFind);

});



app.get("/pets/search", (req, resp) =>  {

    let query = req.params.name;

    const pets = [
        { id: 1, type: "dog", name: "Diesel" },
        { id: 2, type: "cat", name: "Milo" },
        { id: 3, type: "bird", name: "Sky" }
    ];

    

});



const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);
});