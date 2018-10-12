import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})
export class PapaComponent implements OnInit {
  valor = 0;
  constructor() { }

  ngOnInit() {
  }

  sumar() {
    this.valor = this.valor + 1;
  }
  restar() {
    this.valor = this.valor - 1;
  }

}
