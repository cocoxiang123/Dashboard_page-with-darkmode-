import React from 'react'
import dashboards from '../data'
import Switch from "react-switch";

function Header({ handleChange, checked }) {
    const followers = [...dashboards.map(i => i.followers)];
    const sum = followers.reduce((acc, cur) => acc + cur);

    return (

        <>
            <header className="pageHeader">
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Social Media Dashboard</div>
                    <h4 className="total-followers">Total Followers: {sum.toLocaleString()}</h4>
                </div>
                <hr></hr>
                <div className="dark-mode"><span>Dark Mode</span> <Switch
                    className="dark-mode-switch"
                    checked={checked}
                    onChange={handleChange}
                    onColor="#BCC7D2"
                    onHandleColor="#2693e6"
                    handleDiameter={25}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
                </div>
            </header>
        </>
    )
}

export default Header
