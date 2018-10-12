import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() numero = 0;
  @Output() cambiarValor: EventEmitter<number>;
  constructor() {
    this.cambiarValor = new EventEmitter();
  }

  ngOnInit() {
  }

  multiplicar() {
    this.numero = this.numero * 2;
    this.cambiarValor.emit(this.numero);
  }

  dividir() {
    this.numero = this.numero / 2;
    this.cambiarValor.emit(this.numero);
  }
}
