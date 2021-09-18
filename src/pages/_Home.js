import imagemFace from '../public/face.png'
import Image from 'next/image'
import Cancel from "@material-ui/icons/Cancel";
import IconButton from '@material-ui/core/IconButton';
import IconMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { Avatar, colors, Fade, Grid, Hidden, makeStyles, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from "@material-ui/core";
import simpleIcons from 'simple-icons'
import { iconify } from "../public/util";
import { Card, CardBody, CardTitle,CardHeader, Container, Row, Col } from "reactstrap";

const wrapper = (sk = []) => sk.map(v => {
  const ic = simpleIcons.get( iconify(v.icon)) 
  return {
      alt: v.alt || v || ic.title,
      link: v.link,
      backgroundColor: v.backgroundColor || ('#' + ic.hex),
      icon: ic.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>{ic.title}</title>
          <path d={ic.path} fill="white" />
      </svg>,
  }
})

let iobj = {}

const useStyles = makeStyles(theme => ({
  cont: {
      minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  subtitle: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5)
  },
  avatar: {
      height: theme.spacing(8),
      width: theme.spacing(8),
      padding: theme.spacing(2)
  },
  ...iobj
}))
export default function _Home() {
  const classes = useStyles();

  const handleClick = () => {
    window['scrollTo']({ top: 600, behavior: 'smooth' })
  }
  
  return (
    <>

    <Grid container  id="home">
    <div className="banner-area">

                        <Grid className="banner-table-cell" style={{   position: 'relative'}}>
                                <Grid className="container">
                                        <Grid >
      
                                          <h1 style={{color:"white"}}>Covid-19</h1>
                                          <h3 style={{color:"white"}}>
                                            Painel de casos de doença pelo coronavírus 2021 (COVID-19)
                                          </h3>
                                        </Grid>
                                        
                                </Grid>
                        </Grid>              
    </div>

    </Grid>
    </>
    
  )
}
