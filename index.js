class TicketManager {
    #precioBaseDeGanancia = 0.25
    constructor(){
        this.eventos = []
    }

    getEventos(){
        return this.eventos
    }

    agregarEventos(nombre,lugar,precio,capacidad=50,fecha=new Date()){
        const evento = {
            id: this.#generarId(),
            nombre,
            lugar,
            precio: precio + this.#precioBaseDeGanancia*precio,
            capacidad,
            fecha,
            participantes: []
    }
        this.eventos.push(evento)
    }

    agregarUsuario(idEvento, idUsuario){
        const evento = this.#encontrarEvento(idEvento)
        if(evento){
            if(evento.participantes.includes(idUsuario)){
                console.log('Participante ya esta incluido en este evento')
            } else {
                evento.participantes.push(idUsuario)
                console.log('Participante agregado al evento con exito')
            }
        } else {
            console.log('El evento no existe')
        }
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        const evento = this.#encontrarEvento(idEvento)
        if(evento){
            const nuevoEvento = {
                ...evento,
                id: this.#generarId(),
                lugar:nuevaLocalidad,
                fecha:nuevaFecha
            }
            this.eventos.push(nuevoEvento)
        } else {
            console.log('El evento no existe')
        }
    }

    #generarId(){
        let id = 1
        if(this.eventos.length!==0){
            id = this.eventos[this.eventos.length-1].id + 1
        }
        return id
    }

    #encontrarEvento(idEvento){
        return this.eventos.find(evento=>evento.id===idEvento)
    }
}

const ticketManager1 = new TicketManager()
ticketManager1.agregarEventos('ciudadRock','san luis',1000)
ticketManager1.agregarEventos('Evento1','mendoza',4000)
//ticketManager1.agregarUsuario(1,1)
ticketManager1.ponerEventoEnGira(2,'san juan',new Date('12/12/2024'))
console.log(ticketManager1.getEventos());