import React from 'react';
import { Link } from 'react-router-dom';

const PokeTableEntry = ({id, fields}) => {
    let renderedFields = Object.keys(fields).map(field=> <td key={field} data-label={field}>{
        (field === 'img') ? <img className="pokemon__image" src={fields[field]} /> : fields[field]
    }</td>)    
    return (
        <tr className="pokemon__entry">
            {renderedFields}
            <td>
                <Link to={'/'+id}>Details</Link>
            </td>
        </tr>
    );
}

export default PokeTableEntry;
