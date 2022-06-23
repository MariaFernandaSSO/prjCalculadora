export class Calculadora {
    private _numero1: number
    private _numero2: number
    private _operacao: string

    constructor() {
      this._numero1 = 0
      this._numero2 = 0
      this._operacao = ''
    }

    //sets

    public set numero1(numero1: number){
      this._numero1 = numero1
    }

    public set numero2(numero2: number){
      this._numero2 = numero2
    }

    public set operacao(operacao: string){
      this._operacao = operacao
    }

    // gets

    public get numero1(): number {
      return this._numero1
    }

    public get numero2(): number {
      return this._numero2
    }

    public get operacao(): string {
      return this._operacao
    }

    // operacoes matematicas - métodos

    public somar(): number {
      return this._numero1 + this._numero2
    }

    public subtrair(): number {
      return this._numero1 - this._numero2
    }

    public multiplicar(): number {
      return this._numero1 * this._numero2
    }

    public dividir(): number {
      return this._numero1 / this._numero2
    }

    public calcular(): number {
      let resposta = 0

      switch(this._operacao){
          case '+':
            resposta = this.somar()
          break
          case '-':
            resposta = this.subtrair()
          break
          case '*':
            resposta = this.multiplicar()
          break
          case '/':
            resposta = this.dividir()
          break
      }
       return resposta
    }
}