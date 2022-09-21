import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/books", BookController.getBooks)
  .get("/books/search", BookController.getBookByPublishingCompany)
  .post("/books", BookController.createBook)
  .put("/books/:id", BookController.updateBook)
  .get("/books/:id", BookController.getBookById)
  .delete("/books/:id", BookController.deleteBook)

export default router;
