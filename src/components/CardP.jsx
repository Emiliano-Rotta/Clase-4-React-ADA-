import Card from "./Card";

function CardP(){

    return (
        <>
            <Card 
                raza="Labrador"
                imagen="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
                edad="4 años"
                descripcion="Lorem ipsum dolor sit amet."
            />

            <Card
                raza="Aleman"
                imagen="https://s1.eestatic.com/2023/04/10/curiosidades/mascotas/755184649_232302148_1706x960.jpg"
                edad="6 meses"
                descripcion="Es juguetón"
            />
            <Card 
                raza="Dálmata"
                // imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTX-lkyLlvNbuJEYXBWf70lvCRMKM3eHH6MoA07XZvL3x_3bPjn_nmQgeFZ8zphW8Za2s&usqp=CAU"
                edad="2 años"
                descripcion="Te compra con la mirada"
            />
        </>

    )
}

export default CardP