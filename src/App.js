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

    }
    getAPI();
  }, [consult])

 
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
