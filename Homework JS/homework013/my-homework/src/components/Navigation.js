import React from 'react'
import './Navigation.css'
export default function Navigation({ names }) {

    let nav = names.map((item, index) => {
        return <a className='nav-item' href="./" key={index}>{item}</a>
    })
    return (
        <div className='navigation'>
            {nav}
        </div>
    )
}
