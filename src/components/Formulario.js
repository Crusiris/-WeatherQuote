import React, {useState} from 'react'

const Formulario = ({ search ,setSearch, setConsult }) => {
  
    //State para errores
    const [error, setError] = useState(false)

    //Destructuring para asignacion simple en los value
    const { city, country } = search;

    //Funcion que coloca los elementos en el state
    const handleChange = e =>{
        //Actualizar el state
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //Funcion enviar formulario
    const handleSubmit = e =>{
        e.preventDefault();
        //validar
            if(city.trim()==="" || country.trim()===""){
                setError(true);
                return;
            }
            setError(false);

            setConsult(true);
    }


    return ( 
        <form
            onSubmit = {handleSubmit}
        >
            {error ? <p className="red darken-4 error">Todos los campos son obligatorios</p>:null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="ciudad"
                    value = {city}
                    onChange={handleChange}
                />

                <label htmlFor="ciudad">Ciudad:</label>

                <div className="input-field col s12">
                    <select
                    name="country"
                    id="pais"
                    value={country}
                    onChange={handleChange}
                    >
                        <option value="">-- Seleccione un pais --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="pais">Pais: </label>
                </div>
            </div>

            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>

        </form>
     );
}
 
export default Formulario;