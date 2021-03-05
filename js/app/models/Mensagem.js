class Mensagem {
 
  constructor(texto=''){
    this._texto = texto;
  }

  get text(){
    return this._texto;
  }

  set text(texto){
    this._texto = texto;
  }

}