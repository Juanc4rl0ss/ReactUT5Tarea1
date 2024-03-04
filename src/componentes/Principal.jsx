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
          
          {/* Le pasamos al prop de Articulo,el valor del objeto JSON con los datos a renderizar*/}
          <Articulo cumpleañeros={cumpleañeros} />     
        </section>

      </main>
    );
  }

//Exportamos la funcion Principal,para que sea renderizada desde main.jsx
export default Principal
