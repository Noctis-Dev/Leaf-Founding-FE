import React from 'react'; 
import {CardPopular} from '../components/Card/CardPopular'
import {CardDonation} from '../components/Card/Card'

function ProbComp (){

    return (
        <div className='flex space-x-4 items-center'>
            <CardPopular/>
            <CardDonation text='Me pica la cola' title='Conejo chino' team='Leaf Founding' price={5.80}/>
            <CardDonation text='Me pica la cola2' title='Conejo chino2' team='Leaf Founding2' price={20.80}/>
        </div>
    )
}

export  {ProbComp};