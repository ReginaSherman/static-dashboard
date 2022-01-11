import React from 'react'
import './Card.css'


function Card (props) {
    
    return (
        <section>
        <h3 className='initials'>{ props.initials }</h3>
        <h1 className='name'>{ props.name }</h1>
        <h2 className='handle'>{ props.handle }</h2>
        <h3 className='trend' style={{color: props.increasing ? 'green' : 'red'}}>{ props.trend }</h3>
        <h3 className='increasing'>{ props.increasing }</h3>
        <h3 className='numOfSales'>{ props.numOfSales } sales</h3>
        </section>
    )
}

export default Card