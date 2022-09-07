import { Component, OnInit } from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products = products!;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
