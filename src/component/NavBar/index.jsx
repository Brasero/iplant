import React from 'react';
import './index.css';
import logo from '../../assets/icon/leaf.png';

function NavBar(){

    return (
        <>
            <div className="iplant-nav" style={{
                    color: 'black',
                    textAlign: 'right',
                    padding: '32px',
                    borderBottom: 'solid 3px black',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
            }}>
                <img src={logo} style={{
                    height: '45px',
                    aspectRatio: '1/1',
                }} alt="logo-iplant" />
                <h1>iPlant</h1>
            </div>
        </>
    )
}

export default NavBar;