import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  frase: any;
  mostrar : boolean = false;
  lista : string [] = ['item 1','item 2','item 3'];

  constructor() {
     this.frase = {
      autor: "Ben Parker",
      mensaje: "Un gran poder lleva una gran responsabilidad"
    }
  }

  ngOnInit(): void {
  }

}
