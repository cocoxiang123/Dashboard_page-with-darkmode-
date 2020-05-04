import React from 'react'
import dashboards from '../data'
import Dashboard from './Dashboard'

function Dashboards({ checked }) {
    return (
        <div className="dashboards">
            {dashboards.map(i =>
                <Dashboard items={i} key={i.name} checked={checked} />)}
        </div>
    )
}

export default Dashboards
