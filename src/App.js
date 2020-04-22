import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import Weather from './components/Weather'


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

  useEffect(() => {
    const getAPI = async () => {
       if(consult){
        const APIkey = '3034c8de3c75aa997926f14697b235e1';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`

        const res = await fetch(url);
        const result = await res.json();
        
        //Guardando el resultado en un state
        setResul(result)

        setConsult(false);
       }
    }
    getAPI();
  }, [consult, city, country])

 
  return (
    <Fragment>
      <Header
      titulo='Clima React App'
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
                <Weather
                result={result}
                />
              </div>
          </div>

        </div>

      </div>
    </Fragment>
  );
}

export default App;
