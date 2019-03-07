// React
import React, { PureComponent } from 'react'
// Router
import { NavLink, Link } from 'react-router-dom'

const ordersListArr = [
    {img: '//robohash.org/83760cadf76ba96ac5feae5259647c00.png?size=32x32', date: '23/05/2018', time: '15:10:54', buyer: 'Curtis Harper', count: '2', price: '236.9'},
    {img: '//robohash.org/9360c48756ddd6b03f0e4a9c2a81d1c3.png?size=32x32', date: '22/05/2018', time: '04:11:05', buyer: 'Cecelia Massey', count: '2', price: '174.99'},
    {img: '//robohash.org/2a545bd6122c647e13b318767e62478b.png?size=32x32', date: '10/05/2018', time: '22:54:18', buyer: 'Ronald Saunders', count: '1', price: '114.89'},
    {img: '//robohash.org/2a545bd6122c647e13b318767e62478b.png?size=32x32', date: '10/05/2018', time: '22:54:18', buyer: 'Ronald Saunders', count: '1', price: '114.89'},
    {img: '//robohash.org/2a545bd6122c647e13b318767e62478b.png?size=32x32', date: '10/05/2018', time: '22:54:18', buyer: 'Ronald Saunders', count: '1', price: '114.89'},
    {img: '//robohash.org/2a545bd6122c647e13b318767e62478b.png?size=32x32', date: '10/05/2018', time: '22:54:18', buyer: 'Ronald Saunders', count: '1', price: '114.89'},
    {img: '//robohash.org/2a545bd6122c647e13b318767e62478b.png?size=32x32', date: '10/05/2018', time: '22:54:18', buyer: 'Ronald Saunders', count: '1', price: '114.89'},
    {img: '//robohash.org/2a545bd6122c647e13b318767e62478b.png?size=32x32', date: '10/05/2018', time: '22:54:18', buyer: 'Ronald Saunders', count: '1', price: '114.89'},
    {img: '//robohash.org/2a545bd6122c647e13b318767e62478b.png?size=32x32', date: '10/05/2018', time: '22:54:18', buyer: 'Ronald Saunders', count: '1', price: '114.89'},
    {img: '//robohash.org/2a545bd6122c647e13b318767e62478b.png?size=32x32', date: '10/05/2018', time: '22:54:18', buyer: 'Ronald Saunders', count: '1', price: '114.89'},
];

class PendingOrdersBlock extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const ordersList = ordersListArr.map((item, i) =>
            <li className="home__block-item" key={i}>
                <Link to={`/orders/${i}`} className='link'>
                    <img src={item.img} alt="" className="home__block-img"/>
                    <div className="home__block-content">
                        <div><span className='date'>{item.date}</span>,&nbsp;<span className='time'>{item.time}</span></div>
                        <div><span className='buyer'>by {item.buyer}</span>,&nbsp;<span className='count'>{item.count} {item.count == 1 ? 'item' : 'items'}</span></div>
                    </div>
                    <span className='price'>{item.price}$</span>
                </Link>
            </li>
        );
        return(
            <div className="home__block large">
                <h2 className="home__block-title">Pending Orders</h2>
                <ul className="home__block-list PerfectScrollbar">
                    {ordersList}
                </ul>
            </div>
        )
    }
}

export default PendingOrdersBlock