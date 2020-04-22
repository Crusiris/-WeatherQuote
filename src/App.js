import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'


function App() {

    //State del formulario
    const [search, setSearch] = useState({
      city: '',
      country:''
  });

  //State de consultas
  const [consult, setConsult] = useState(false);

  //Destructuring para asignacion simple en los value
  const { city, country } = search;

  useEffect(() => {
    const getAPI = async () => {
       if(consult){
        const APIkey = '3034c8de3c75aa997926f14697b235e1';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`

        const res = await fetch(url);
        const resul = await res.json();
        console.log(resul)
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
                2
              </div>
          </div>

        </div>

      </div>
    </Fragment>
  );
}

export default App;
