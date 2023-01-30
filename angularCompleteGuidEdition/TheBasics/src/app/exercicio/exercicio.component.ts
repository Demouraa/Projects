import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.scss']
})
export class ExercicioComponent implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit(): void {
  }
}
