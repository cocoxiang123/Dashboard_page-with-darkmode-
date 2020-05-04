import React from 'react'
import dashboards from '../data'
import Overview from './Overview'

function Overviews({ checked }) {
    return (
        <div>
            <div className="Overview-title">Overview - Today</div>
            <div className="OverViews">
                {dashboards.map(i =>
                    <Overview item={i} key={i.name} checked={checked} />
                )}
            </div>
        </div>
    )
}

export default Overviews
