export class tarefa {
    private nome: string;
    private responsavel: string;

//Construtor (serve para facilitar a criação de novos itens que usem a estrutura do objeto)
    public constructor(nome: string, responsavel: string){
        this.nome = nome;
        this.responsavel = responsavel;
    }

//getters
    public getNome(): string {
        return this.nome;

    }
    public getResponsavel(): string {
        return this.responsavel;
    }
//setters
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public setResponsavel(responsavel: string): void {
        this.responsavel = responsavel;
    }
}