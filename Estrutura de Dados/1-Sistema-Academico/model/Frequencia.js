class Frequencia {
    constructor() {
        this.frequencia = JSON.parse(localStorage.getItem('frequencia')) || [];
    }

    // PEGAR LISTA FREQUENCIA 
    getFrequencia() {
        return this.frequencia;
    }

    // REMOVE ITEM DA LISTA 
    Remove(index) {
        if (this.frequencia.length > 0) {
            this.frequencia.splice(index, 1);
            this.Relocate();
        }
    }

    // MODIFICA A POSIÇÃO DE ELEMENTE PASSANDO
    Update(index, indElem) {
        if (this.frequencia.length > 0) {
            const elementoRemovido = this.frequencia.splice(index, 1)[0];
            this.frequencia.splice(indElem, 0, elementoRemovido);
            this.Relocate();
        }
    }

    // ADICIONA MAIS UM OBJETO NA LISTA DO 'BANCO DE DADOS'
    addDados(nome, matricula) {
        if (matricula <= 0) {
            let numeroAleatorio = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

            matricula = numeroAleatorio
        }

        var dadosRecuperados = JSON.parse(localStorage.getItem("frequencia"))

        dadosRecuperados.push({ 'nome': nome, 'matricula': matricula })

        this.frequencia = dadosRecuperados
        this.Relocate()
    }


    // REALOCA A LISTA MODIFICADA AO 'BANCO DE DADOS'
    Relocate() {
        localStorage.setItem('frequencia', JSON.stringify(this.frequencia));
    }
}

