import React from 'react'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'
function Overview({ item, checked }) {
    const { view } = item;
    return (
        <>
            <div className={`Overview ${!checked ? "" : "cardBg"}`}>
                <div className="Overview-container">
                    <header>
                        <div className={`viewName ${!checked ? "" : "textColor"}`}>{view.name}</div>
                        <div><img src={item.logo} alt="logo" /></div>
                    </header>
                    <section>
                        <div className="quantity">{view.quantity < 10000 ? view.quantity : <div>{parseInt(view.quantity / 1000)} K</div>}</div>
                        {view.quantityIncrease > 0 ?
                            <div className="increase"><img src={up} alt="up" />{view.quantityIncrease}%</div>
                            : <div className="decrease"><img src={down} alt="down" />{Math.abs(view.quantityIncrease)}%</div>}
                    </section>
                </div>
            </div>

            <div className={`Overview ${!checked ? "" : "cardBg"}`}>
                <div className="Overview-container">
                    <header>
                        <div className={`viewName ${!checked ? "" : "textColor"}`}>Likes</div>
                        <div><img src={item.logo} alt="logo" /></div>

                    </header>
                    <section>
                        <div className="quantity">{view.likes}</div>
                        {view.likesIncrease > 0 ?
                            <div className="increase"><img src={up} alt="up" />{view.likesIncrease}%</div>
                            : <div className="decrease"><img src={down} alt="down" />{Math.abs(view.likesIncrease)}%</div>}
                    </section>
                </div>
            </div>
        </>

    )
}

export default Overview
