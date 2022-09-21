import authors from "../models/Author.js";

export default class AuthorController {

    static getAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        });
    }

    static getAuthorById = (req, res) => {
        const id = req.params.id;

        authors.findById(id, (err, authors) => {
            if(err) res.status(400).send({message:`${err.message} - Id não encontrado.`});
            res.status(200).send(authors);
        })
    }

    static createAuthor = (req, res) => {
        let author = new authors(req.body);

        author.save((err) => {
            if(err) res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`});
            res.status(201).send(author.toJSON());
        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) res.status(500).send({message: err.message});
            res.status(200).send({message: 'Autor atualizado com sucesso.'});
        });
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndDelete(id, (err) => {
            if(err) res.status(500).send({message: err.message});
            res.status(200).send({message: 'Autor removido com sucesso.'});
        })
    }

}