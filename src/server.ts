import express, {Request, Response} from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req : Request, res : Response)=>{
    res.send("Ola express!!!");
});

app.get("/saudacao/:nome", (req, res) => {
    const nome = req.params.nome;
    // res.send("Ola " + nome);
    res.json({
        mensagem: `Olá ${nome}!`
    })
});

app.post("/saudacao", (req: Request,res: Response) => {
    const {nome} = req.body;

    res.json({
        mensagem: `Olá ${nome}!`
    })
});

app.listen(PORT, () => {
    console.log("Servidor executando em localhost");
});

// const - let - var 
// c - criar uma variavel que não ira mudar o valor durante a criação da aplicação (imutavel)
// l - cria variavel que muda e é restrito apenas ao bloco 
// v - 'publico' acessivel todo o codigo
// get - solicitar algum recurso


//  function main() : void { 
// 
// } - função nomeada 
// () => {}