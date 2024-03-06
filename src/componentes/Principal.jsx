/**Componente principal, el cual contiene otro componente anidado, para mostrar los artículos**/
/* Importamos el objeto Json con todos los datos y el componente que queremos anidar */
import cumpleañeros from '../data.js' 
import Articulo from './Cumpleañeros.jsx'

function Principal() {

    return(

      <main>
        <section className="container">
          {/* Aquí mostramos el número de cumpleaños obtenidos de cumpleañeros */}

          <h3>Hoy hay {cumpleañeros.length} cumpleaños</h3>
          
          {/* Usamos un map apuntando al objeto data.js donde están todos los datos, y se los vamos pasando a los props de Articulo*/}
          {cumpleañeros.map(person => (

          <Articulo
            key={person.id}
            imagen={person.image}
            alt={person.name}
            name={person.name}
            age={person.age}
            
           />
          
          ))};

        </section>

      </main>
    );
  }

//Exportamos la funcion Principal,para que sea renderizada desde main.jsx
export default Principal
