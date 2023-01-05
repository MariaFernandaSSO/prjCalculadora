import { Component } from '@angular/core';
import { Calculadora } from '../models/Calculadora'; // classe importada

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  calculadora: Calculadora // declaração da referencia da classe
  resp: number // variavel de resposta

  constructor() {
    this.calculadora = new Calculadora() // instanciação da calculadora
  }

  private calcular(operacao: string){ // o método aqui é privado, para q apenas a Home Page acesse :)
    this.calculadora.operacao = operacao //operação da classe - operação q a interface quer executar
    this.resp = this.calculadora.calcular();
  }
}
