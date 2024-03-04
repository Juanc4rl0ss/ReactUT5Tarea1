/* Componente que muestra todos los objetos del JSON en un map, éste componente es exportado también para poder
utilizarlo desde Principal.jsx */

//Le pasamos a la funcion un prop,que muestra los diferentes elementos article
function Articulo({cumpleañeros}) {
    return (
      <>
        {cumpleañeros.map(person => (
          <article key={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} años</p>
            </div>
          </article>
        ))}
      </>
    );
  }
  
  //Exportamos éste componente,para que pueda ser renderizado desde el commponente Principal
  export default Articulo;