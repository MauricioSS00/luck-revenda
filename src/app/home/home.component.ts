import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  motos: any[] = [];
  marcas: any[] = [];
  responsiveOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.motos = [
      { nome: 'Honda CG Fan 150 ESDI 1', valor: '7.400,00', imagem: 'assets/motos/cg150.jpg' },
      { nome: 'Honda CG Fan 150 ESDI 2', valor: '8.400,00', imagem: 'assets/motos/cg150.jpg' },
      { nome: 'Honda CG Fan 150 ESDI 3', valor: '9.400,00', imagem: 'assets/motos/cg150.jpg' },
      { nome: 'Honda CG Fan 150 ESDI 4', valor: '10.400,00', imagem: 'assets/motos/cg150.jpg' },
      { nome: 'Honda CG Fan 150 ESDI 5', valor: '11.400,00', imagem: 'assets/motos/cg150.jpg' }
    ];
  }

}
