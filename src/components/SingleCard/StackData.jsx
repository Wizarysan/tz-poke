import React from 'react';

const StackData = ({name, data}) => 
    <p><b>{name}:</b> {data.map(x=>{
        if(x.value) {
            return <span className={x.type} key={x.name}>{x.type+': '+x.value+' '}</span>
        } 
        if(x.name) {
            return <span className={x.type} key={x.name}>{x.name+'  '}</span>
        }
        return <span key={x}>{x+' '}</span>
    })}</p>

export default StackData;
