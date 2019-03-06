
'use strict';

import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import Stars from './stars'

const reviewsListArr = [
    {img: '//robohash.org/d4c86ee2c4301b366e4d806b16113e35.png?size=32x32', rating: '4', content: 'Fevi uf jav mena je pauce zeda po atadrul kon budtupwe fehlieba dukreri huchahpag corerabo miene aptif. Okuruzo akbebcin kunobag sazhun jusorin guhbor hunopifo nugmob ki su apabuha ga jekbejvo fig nuep. Zi gub duki nahne zomubha zavahik we ru penmuit madunwid se fa infolmar zas wenjimje fojof zine necvez.'},
    {img: '//robohash.org/a1d9d0b81e3ea5bf481091bb115b93e9.png?size=32x32', rating: '5', content: 'Fevi uf jav mena je pauce zeda po atadrul kon budtupwe fehlieba dukreri huchahpag corerabo miene aptif. Okuruzo akbebcin kunobag sazhun jusorin guhbor hunopifo nugmob ki su apabuha ga jekbejvo fig nuep. Zi gub duki nahne zomubha zavahik we ru penmuit madunwid se fa infolmar zas wenjimje fojof zine necvez.'},
    {img: '//robohash.org/ac6f475a26838a9b49169ff19344d98b.png?size=32x32', rating: '0', content: 'Fonvef atufazfok muodil kaj mirzif be ju maz no gim tob leir naig ka it idhib. Wifat mifhatwih wuce cuw evege kipfihim ca zigikras ku ukcem nihduhad rifa. Ca bi bizid vuk mamnifwul cukibhuz irikut sal idelokhug duhu wol nohresu tausudo zoc kevugiew booco ijzi tesufhag. Orkunor ejius he ce er orfi cutef higoke sipgov vozuzwe agci ef bausead zepez idtozoz.'},
    {img: '//robohash.org/ac6f475a26838a9b49169ff19344d98b.png?size=32x32', rating: '2', content: 'Fonvef atufazfok muodil kaj mirzif be ju maz no gim tob leir naig ka it idhib. Wifat mifhatwih wuce cuw evege kipfihim ca zigikras ku ukcem nihduhad rifa. Ca bi bizid vuk mamnifwul cukibhuz irikut sal idelokhug duhu wol nohresu tausudo zoc kevugiew booco ijzi tesufhag. Orkunor ejius he ce er orfi cutef higoke sipgov vozuzwe agci ef bausead zepez idtozoz.'},
];

class ReviewsBlock extends PureComponent{

    componentDidMount(){

    }

    render(){

        const reviewsList = reviewsListArr.map((item, i) =>
            <li className="home__block__item" key={i} >
                <Link to={`reviews/${i}`} className='link'>
                    <img src={item.img} alt="" width='40' />
                    <div className="home__block__content">

                        <Stars rating={item.rating} />

                        <p className='text'>{item.content}</p>
                    </div>
                </Link>
            </li>
        );

        return(
            <div className="home__block list reviews">
                <div className="home__block__header clearfix">
                    <div className="home__block__info">
                        <span className="home__block__count">{reviewsListArr.length}</span>
                        <span className="home__block__sbt">Pending Reviews</span>
                    </div>
                    <div className="home__block__icon">
                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="54">
                            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                        </svg>
                    </div>
                </div>
                <ul className="home__block__list">
                    {reviewsList}
                </ul>
            </div>
        )
    }
}

export default ReviewsBlock