import React from 'react';
import { AppBar, useScrollTrigger } from '@material-ui/core';
import Link from 'next/link'

interface Props{
    children:React.ReactElement;
}
export default function _Header() {
    const navs = [
        { text: 'Home', href: '#' },
        //{ text: 'Sobre mim', href: '#about' },
        //{ text: 'Portfolio', href: '#portfolio' },
        //{ text: 'Contacte-me', href: '#contact' },
      ];
        const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <>
    <AppBar color={!trigger ? "transparent" : "inherit"} className={!trigger ? "":"sticky_navigation"    }>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="main-menu">
                        <div className="navbar navbar-cus">
                            <div className="navbar-header">
                                <a href="#" className="navbar-brand"><span className="logo">Covid<span>19</span></span></a>
                                
                                <button className="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>                                
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                
                                    <ul className="nav navbar-nav navbar-right">
                                        { navs.map((nav,i) => (
                                            <li className="nav-item" key={i}>
                                                <Link href={nav.href}>
                                                    <a className="smooth-menu">{nav.text}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
      </AppBar>
    </>
  )
}
