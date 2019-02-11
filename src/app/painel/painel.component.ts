import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases.mock'
 
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  
  constructor() { 
    this.atualizaRodada()
    console.log(this.rodadaFrase)
   }

  ngOnInit() {
  }
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta')
      //Trocar pergunta da rodada
      this.rodada++
      //Atualiza o objeto rodada frase
      this.atualizaRodada()
      //Atualiza barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length)
    } else {
      alert ('A tradução está incorreta')
    }
    
  }

  public atualizaRodada(): void {
  //Define a frase da rodada com base em alguma lógica
  this.rodadaFrase = this.frases[this.rodada]
  //Limpa a resposta
  this.resposta = ''
  }
}
