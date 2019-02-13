import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //@Input serve para fazer a comunicação do atributo de um componente para outro componente.
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
