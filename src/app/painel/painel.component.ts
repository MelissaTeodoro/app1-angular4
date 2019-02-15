import { Component, OnInit, EventEmitter, Output, OnDestroy  } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';
import { OutletContext } from '@angular/router';
 
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  
  /*Criamos um atributo público, em seguida instanciamos ele ao evento EventEmitter e decoramos esse atributo
  com @Output para que ele possa estar visivel para componentes pais */
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter() //Podemos fazer a emissão de um evento
  
  constructor() { 
    this.atualizaRodada()
   }

  ngOnInit() {}

  ngOutput() {}

  ngOnDestroy() {}
  
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      //Trocar pergunta da rodada
      this.rodada++
      
      //Atualiza o objeto rodada frase
      if(this.rodada === 4) {
        alert('Concluiu as traduções com sucesso')
        this.encerrarJogo.emit("vitoria")

      }
      this.atualizaRodada()
      //Atualiza barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length)
    } else {
      //Diminuir a variavel tentativas
      this.tentativas--

      if(this.tentativas === -1) {
        this.encerrarJogo.emit("derrota")
      }
    }
    
  }

  public atualizaRodada(): void {
  //Define a frase da rodada com base em alguma lógica
  this.rodadaFrase = this.frases[this.rodada]
  //Limpa a resposta
  this.resposta = ''
  }
}
