import React from 'react'
import General from './components/general'
import Address from './components/address'
import Headerregister from './components/headerregister'

function Formregister() {
    return (
        <div className='m-6'>
             <div>
                <Headerregister/>
            </div>
            <div><General /></div>
        
        </div>
    )
}

export default Formregister