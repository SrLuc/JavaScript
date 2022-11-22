//criando classes

class Livro{
    constructor(autor,nome,ano) {
        this.autor = autor;
        this.nome = nome;
        this.ano = ano;
    }
}

const livro1 = new Livro('J.R.R Martin', 'Dança dos Dragões', 2018);
const livro2 = new Livro('Tolkien', 'A sociedade do Anel', 1917);
const livro3 = new Livro('Chirs', 'As vantagens de ser invisivel', 2009);
const livro4 = new Livro('Dan Brown', 'O codigo da Vinci', 2010);
const livro5 = new Livro('Nao sei', 'O monge e o Executivo', 2011);