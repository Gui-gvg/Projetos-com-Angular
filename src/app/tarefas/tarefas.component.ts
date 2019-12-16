import { Component, OnInit } from '@angular/core';
//faço o import para utilizar o objeto tarefas
import{tarefa} from '../Model/tarefa';
//agora importo o serviço que vai conversar com o eu site
import{ListawebService} from '../service/listaweb.service'


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

 /* minhaTarefa:Array<tarefa>;//declarei uma variavel de nome tarefa e tipo model*/
 minhaTarefa:tarefa[];
 
  //(o private servico lista foi incluido no construtor)
  constructor(private servicoLista: ListawebService) { 
  /*this.minhaTarefa = new tarefa("Tarefa01","Professor Isidro");//preenchi os dados do model tarefa
  console.log(this.minhaTarefa)
    this.minhaTarefa = new Array<tarefa>();
    this.minhaTarefa.push(new tarefa("Definir o Model","Prof Isidro"));
    this.minhaTarefa.push(new tarefa("Criar o componente","Cleiton"));
    this.minhaTarefa.push(new tarefa("Integrar o Web Service","Dani"));
    this.minhaTarefa.push(new tarefa("Estilizar a Pagina","Ge"));
    this.minhaTarefa.push(new tarefa("Testar e garantir a qualidade","Laura"));
    console.log(this.minhaTarefa);*/



  }
  ngOnInit() {
    this.obterTodasAsTarefas();
  }
  //criaremos um metodo para invocar o serviço
  public obterTodasAsTarefas(){
    this.servicoLista.obterTarefas().subscribe((resultado:tarefa[])=>{this.minhaTarefa = resultado});
  }
}
