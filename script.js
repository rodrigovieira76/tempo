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
            
        }
    mostrarTempo(park){
        document.getElementById("tempo").textContent = `Tempo: ${tempo}`;
    }
}
const garage = new TempoTempo();
const tempoTempo = new EstacionamentoTempo(garage);
