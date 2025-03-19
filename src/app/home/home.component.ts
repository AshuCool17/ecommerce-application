import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  menJeans: any;
  womenGowns: any;
  lehengaCholi: any;
  mensKurta: any;
  mensShoes: any;

  ngOnInit(){
    this.menJeans = mensJeans.slice(0,5);
    this.womenGowns = gownsPage1.slice(0,5);
    this.lehengaCholi = lehengaCholi.slice(0,5);
    this.mensKurta = mensKurta.slice(0,5);
  }
}
