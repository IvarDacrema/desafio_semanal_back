class TicketManager {
    #precioBaseDeGanancia = 0.25
    constructo(){
        this.eventos = []
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha = new Date()){
        const evento = {
            id: this.#generarId,
            nombre,
            lugar,
            precio: precio + this.#precioBaseDeGanancia,
            capacidad,
            fecha
        }
        this.eventos.push(evento)
    }

    getEventos(){
        return this.eventos
    }

    #generarId(){
        let id = 1
        if(this.eventos.length!==0){
            id= this.eventos[this.eventos.length-1].id + 1
        }
        return id
    }
}

const ticketManager1 = new TicketManager()

ticketManager1.agregarEvento('Evento', 'Mendoza', 2,500)

console.log(ticketManager1.getEventos())
