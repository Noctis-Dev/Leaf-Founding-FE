import {CardPopular} from '../components/Card/CardPopular'
import {CardDonation} from '../components/Card/Card'

function ProbComp (){

    return (
        <div className='flex space-x-4 items-center'>
            <CardPopular/>
            <CardDonation/>
            <CardDonation/>
        </div>
    )
}

export  {ProbComp};