import React, {useState} from 'react'

const Formulario = () => {
    //State del formulario
    const [search, setSearch] = useState({
        city: '',
        country:''
    })

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


    return ( 
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value = {city}
                    onChange={handleChange}
                />

                <label htmlFor="ciudad">Ciudad:</label>

                <div className="input-field col s12">
                    <select
                    name="pais"
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
        </form>
     );
}
 
export default Formulario;