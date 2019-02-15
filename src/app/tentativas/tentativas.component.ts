import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  //Função decoradora, para enviar o parametro de um componente para o outro
  @Input() 
  public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true), 
    new Coracao(true), 
    new Coracao(true)
  ]
   
  constructor() {}

  //Sempre quando existir Input dos dados esse método é disparado
  ngOnChanges() {
    if(this.tentativas != this.coracoes.length) {
      this.coracoes[this.tentativas].cheio = false
    }
  }

  ngOnInit() {}
}