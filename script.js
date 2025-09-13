class TempoTempo{
    #parky;
    constructor(){
        this.#parky = 0;
    }

    tempo(){
        this.#parky += valor;
    }

    inserir(){
        this.#parky += valor;
    }

    valorTempo(valor){
      return valor <= this.#parky;
    }

    get park(){
        return this.#parky;
    }
}

class EstacionamentoTempo{
    constructor(garage){
        this.garage = garage;
    }

    inserir(){
            
        const valorTempo = parseFloat(document.getElementById("tempo").value)             
        
        this.garage.inserir(valorTempo);
        
        this.mostrarTempo(this.garage.park);
        
        if(this.garage.valorTempo(valorTempo)){
            this.garage.inserir(valorTempo);
            this.mostrarTempo(this.garage.park);
        }else{
            
            this.mostrarTempo("Insuficiente");
        }
            
        }
    mostrarTempo(park){
        document.getElementById("tempo").textContent = `Tempo: ${tempo}`;
    }
}
const garage = new TempoTempo();
const tempoTempo = new EstacionamentoTempo(garage);
