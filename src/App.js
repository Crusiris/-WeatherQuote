import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import Weather from './components/Weather'
import Error from './components/Error'

function App() {

    //State del formulario
    const [search, setSearch] = useState({
      city: '',
      country:''
  });

  //Destructuring para asignacion simple en los value
  const { city, country } = search;

   //State de consultas
   const [consult, setConsult] = useState(false);

   //State del resultado de la peticion al API
   const [result, setResul]=useState({});

   //State para controlar el error de cuando la ciudad no fue encontrada
   const [error, setError] = useState(false);

  useEffect(() => {
    const getAPI = async () => {
        if(consult){
          const APIkey = '3034c8de3c75aa997926f14697b235e1';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`

          const res = await fetch(url);
          const result = await res.json();
          
          //Guardando el resultado en un state
          setResul(result)

          setConsult(false);

              //Detectando si hubo resultados en la consulta
              if(result.cod === "404"){
                setError(true);
              }else {
                setError(false);
              }
        }
    }

    getAPI();
  }, [consult, city, country]);

//Carga condicional de componente
  let component;
  if(error){
  component = <Error message="No se encontraron resultados"/>
  } else {
    component =  <Weather result = { result }/>
  }

 
  return (
    <Fragment>
      <Header
      titulo='WeatherQuote'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
              <div className="col m6 s12">
                <Formulario
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
                />
              </div>
              <div className="col m6 s12">
               {component}
              </div>
          </div>

        </div>

      </div>
    </Fragment>
  );
}



export default App;
