import {Menu} from '../shared/Menu/Menu'
import {History} from '../History/History'
import { Agenda } from '../Agenda/Agenda'
import './Home.css'

export function Home(){
    return(
       <>
       <Menu></Menu>
       
            <section className='banner'> BARBERSHOP</section>     
            <Agenda></Agenda>
            <section className='history'>
                <History></History>
            </section>
       </>

            

       
)
}