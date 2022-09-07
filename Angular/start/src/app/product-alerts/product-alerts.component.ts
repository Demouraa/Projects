import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../products';

let proximoID = sessionStorage.getItem("numero") || 1;
let numero: number = Number(proximoID);

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Output() notify = new EventEmitter();
  @Input() product!: Product ;

  contador: number = numero++;
 
  constructor() { }

  ngOnInit(): void {
    this.contador
    console.log(`${this.contador}`)
    this.guardaNumero(this.contador)
  }
  
  guardaNumero(conta: number) {
    let valor: string = conta.toString();
    let guardar = sessionStorage.setItem("numero", valor)
  }

}