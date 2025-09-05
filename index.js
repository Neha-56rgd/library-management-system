const express = require("express");

const app = express();
const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Home Page :"
    })
}) 

// app.all('*', (req, res) => {
//     res.status(404).json({
//         message: "Not Built Yet"
//     })
// })

app.listen(port, () => {
console.log(`Server is up and running on http://localhost:${port}`);
})