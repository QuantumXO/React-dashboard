'use strict';

import './_home.sass'

import React, {Component} from 'react'

class Home extends Component{

    render(){
        return(
            <div className='home__wrap clearfix'>

                <div className="home__inner">
                    <div className="home__block half price">
                        <div className="home__block__info">
                            <span className="home__block__count">7&nbsp;430&nbsp;$</span>
                            <span className="home__block__sbt">Monthly Revenue</span>
                        </div>
                        <div className="home__block__icon">
                            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" width='54'>
                                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                            </svg>
                        </div>
                    </div>
                    <div className="home__block half orders">
                        <div className="home__block__info">
                            <span className="home__block__count">17</span>
                            <span className="home__block__sbt">New Orders</span>
                        </div>
                        <div className="home__block__icon">
                            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" width='54'>
                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="home__inner">

                </div>


            </div>
        )
    }

}

export default Home














