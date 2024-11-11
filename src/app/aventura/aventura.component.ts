import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../assets/strings.json';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-aventura',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './aventura.component.html',
  styleUrl: './aventura.component.css',
})
export class AventuraComponent implements OnInit {
  enunciado: string = '';
  respuestas: string[] = [];

  ngOnInit() {
    // Asigna los valores de JSON a las variables del componente
    this.enunciado = (data as any).intro;
    this.respuestas = (data as any).responses;
  }
}
