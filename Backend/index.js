import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send({ worked: true });
});

app.listen(port, () => console.log(`App is running on port ${port}`));