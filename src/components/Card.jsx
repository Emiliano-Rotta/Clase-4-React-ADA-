import '../assets/style.css'

let imagen404 = "www.404.com"
function Card({raza, imagen, edad, descripcion}) {

    return (
      <div className='card'>
        <h1>Raza:{raza}</h1>
        <img src={imagen ? imagen: imagen404} alt="" />
        <h4>Edad: {edad? edad: "no sabemos su edad"}</h4>
        <p>{descripcion? `Descripcion: ${descripcion}`: ""}</p>
      </div>
    )
  }
  
  export default Card