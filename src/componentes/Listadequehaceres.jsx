import React, {useState} from "react";

const Listadequehaceres = () => {


    
    const [quehaceres, setQuehaceres] = useState([]);
    const [quehacer, setQuehacer] = useState("");



    const handleSubmit = (e) => {
    e.preventDefault();
    
    const NuevaLista = [...quehaceres]
    NuevaLista.push({

        nombre: quehacer, 
        isDone: false
    
    })

    setQuehaceres(NuevaLista);
    console.log(NuevaLista);

    setQuehacer("");


}

    const Delete = (index) => setQuehaceres(quehaceres.filter((_item, i) => i !== index));

    const Checking= (index) => {
        const kek = {
        ...quehaceres[index]
        };

        kek.isDone = !kek.isDone;

        setQuehaceres([
        ...quehaceres.slice(0, index),
        kek
        ].concat(quehaceres.slice(index + 1)));
    }


    
    


    return (
        <div className="form-group">
        
            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label></label>
                    <input className="form-control" value={quehacer}  onChange={(e)=> setQuehacer(e.target.value)}  name="quehacer" />
                </div>
                <input type="submit" className="btn btn-primary" value="Add"/>

            </form>

            { 
            
            quehaceres.map( (quehacer, index) => (
            
            <div className="form-control" key={index}>
            <span style={{ textDecoration: quehacer.isDone && 'line-through' }}>{quehacer.nombre}</span>
            <input type="checkbox" checked={quehacer.isDone} onClick={(e)=> Checking(index)}readOnly /> 
            <button className="btn btn-dark" onClick={(e) => Delete(index) } >Delete</button>
            </div> 
            
            ))}
        </div>
        
    );
    

}

export default Listadequehaceres;