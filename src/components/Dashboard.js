import React from 'react'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'


function Dashboard({ items, checked }) {

    const { logo, user, followers, increase, color } = items;
    return (
        <div className={`dashboard ${!checked ? "" : "cardBg"}`}>
            <div className="line" style={{ background: color }}></div>
            <div className="card-header"><img src={logo} alt="logo" /><span>{user}</span></div>
            <div className="card-followers">{followers < 10000 ? followers : <div>{parseInt(followers / 1000)} K</div>} </div>
            <div className="followers">FOLLOWERS</div>
            {increase > 0 ?
                <div className="increase">
                    <img src={up} alt="up" /> {increase} <span>Today</span></div>
                : <div className="decrease">
                    <img src={down} alt="down" /> {Math.abs(increase)} <span>Today</span></div>
            }

        </div >
    )
}

export default Dashboard
