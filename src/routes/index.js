import express from "express";
import books from './booksRoutes.js';

const router = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Curso de NodeJs"});
    })

    app.use(
        express.json(),
        books
    )
}

export default router;