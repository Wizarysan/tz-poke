import React from 'react';

const StackData = ({name, data}) => 
    <p><b>{name}:</b> {data.map((x,i)=>{
        if(x.value) {
            return <span className={x.type} key={x.name+i}>{x.type+': '+x.value+' '}</span>
        } 
        if(x.name) {
            return <span className={x.type} key={x.name+i}>{x.name+'  '}</span>
        }
        return <span key={x+i}>{x+' '}</span>
    })}</p>

export default StackData;
