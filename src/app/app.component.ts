import { Component, OnInit } from '@angular/core';

import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Ínicio' },
      { label: 'Motos' },
      { label: 'Empresa' },
      { label: 'Contato' }
    ];
  }
}
