class tempoTempo{
    #parky;
    constructor(){
        this.#parky = 0;
    }

    tempo(){
        this.#parky += valor;
    }

    get park(){
        return this.#parky;
    }
}

class EstacionamentoTempo{
    constructor(park){
        this.park = park;
    }

    tempo(){
            
        const valorTempo = parseFloat(document.getElementById("tempo").value)             
        
        this.park.inserir(valorTempo);
        
        this.mostrarTempo(this.park.tempo);        
            
        }
        mostrarTempo(tempo){
            document.getElementById("tempo").textContent = `Tempo: ${tempo}`;
        }
}
const park = new tempoTempo();
const tempoTempo = new EstacionamentoTempo(park);
