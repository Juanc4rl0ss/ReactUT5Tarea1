/* Componente que muestra todos los objetos del JSON en un map, éste componente es exportado también para poder
utilizarlo desde Principal.jsx */

//Le pasamos a la funcion un prop por cada dato que vamos a mostrar luego por pantalla
function Articulo({key, imagen, alt, name, age}) {
    return (
      <>
          <article key={key} className="person">
            <img src={imagen} alt={alt} />
            <div>
              <h4>{name}</h4>
              <p>{age} años</p>
            </div>
          </article>
      </>
    );
  }
  
  //Exportamos éste componente,para que pueda ser renderizado desde el commponente Principal
  export default Articulo;