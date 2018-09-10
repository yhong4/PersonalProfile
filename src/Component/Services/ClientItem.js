import React, {Component} from 'react'
import '../../Css/Service.css'
import logoImg from '../../images/clients/client_2.png'
const logo= [
    {name:'logo'},
    {name:'logo'},
    {name:'logo'},
    {name:'logo'},
    {name:'logo'},
    {name:'logo'}
    ]

export default class ClientItem extends Component{
    render(){
        return(
            logo.map(()=>{
                return(
                <div className='logoImg'>
                    <img src={logoImg} alt='none' />
                </div>
                )
            })
        )
    }
}

