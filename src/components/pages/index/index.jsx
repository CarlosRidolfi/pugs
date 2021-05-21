import React, { Component } from 'react'
import style from './index.module.scss'
import  './index.module.scss'
import NavBar from '../../templates/navbar/navbar'
import Typing from 'react-typing-animation';

// Images:
import Pug1 from '../../../assets/images/pug2.jpg'
import Pug2 from '../../../assets/images/pug3.jpg'
import Pug3 from '../../../assets/images/pug4.jpg'
import Pug4 from '../../../assets/images/pug-bg.jpg'


export default class Header extends Component {
    render() {

        return (
            <>
            <section className='container-fluid w-100 d-flex justify-content-center align-items-center' id={style.header}>
                <NavBar />
                <Typing speed={500}>
                    <h1>Pugs.</h1>
                </Typing>
            </section>
            <section className='container-fluid pt-5 d-flex flex-column justify-content-center align-items-center' id={style.galery}>
                <h1>Galery</h1>
                <div className='container mt-5'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg'>
                            <img className='img-fluid' src={Pug2} />
                        </div>
                        <div className='col-lg'>
                            <img  className='mt-1 img-fluid' src={Pug1} />
                            <img className='mt-1 img-fluid' src={Pug4} />
                        </div>
                        <div className='col-lg'>
                            <img className='img-fluid' src={Pug3} />
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
