import Card from "./Card";

function CardG(){

    return (
        <>
            <Card 
                raza="Garfield"
                imagen="https://s1.eestatic.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg"
                edad="4 años"
                descripcion="Lorem ipsum dolor sit amet."
            />

            <Card
                raza="Siames"
                // imagen="https://fotografias.lasexta.com/clipping/cmsimages02/2019/01/25/DB41B993-B4C4-4E95-8B01-C445B8544E8E/98.jpg?crop=4156,2338,x0,y219&width=1900&height=1069&optimize=high&format=webply"
                // edad="6 meses"
                descripcion="Es juguetón"
            />
            <Card 
                raza="Atigrado"
                imagen="https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg"
                // edad="2 años"
                // descripcion="Te compra con la mirada"
            />
        </>

    )
}

export default CardG