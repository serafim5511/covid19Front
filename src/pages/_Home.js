import imagemFace from '../public/face.png'
import Image from 'next/image'
import Cancel from "@material-ui/icons/Cancel";
import IconButton from '@material-ui/core/IconButton';
import IconMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { Avatar, colors, Fade, Grid, Hidden, makeStyles, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from "@material-ui/core";
import data from '../public/data.json'
import simpleIcons from 'simple-icons'
import { iconify } from "../public/util";

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

let teste = wrapper(data.sobre.contatos)
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
  var dados = data.info;
  
  return (
    <>

    <Grid container justify="center" className={classes.cont} alignItems="center" id="home">
    <div className="banner-area">

                        <Grid className="banner-table-cell">
                                <Grid className="container">
                                    <Grid className="row">
                                        <Grid className="col-md-12 col-xs-12">
                                            <section className="intro animate-scale">
                                                <Grid className="img-area">
                                                  <Image src={imagemFace} alt="Landscape picture"
                                                  width={500}
                                                  height={500}/>
                                                </Grid>
                                                <h3 style={{color:'white'}}>{[dados.nome, ' ' ,dados.sobrenome]}</h3>

                                                <Grid className="social-icon">
                                                    <ul>
                                                    {
                                                        teste.map(({ alt,link, icon }, i) =>
                                                        <li key={i} style={{padding:10}} >
                                                                    <Tooltip title={alt.titulo} placement="top">
                                                                        <a variant="rounded" href={link}>
                                                                            {icon}
                                                                        </a>
                                                                    </Tooltip>
                                                         </li>
                                                        )
                                                    }
                                                        
                                                    </ul>
                                                   
                                                </Grid>

                                            </section>
                                            <IconButton style={{top: 90}} onClick={handleClick} >
                                              <IconMoreIcon style={{backgroundColor: 'white', color: 'black',fontSize:50,borderRadius:50,}}/>
                                            </IconButton>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                        </Grid>              
    </div>

    </Grid>
    </>
    
  )
}
