import React from 'react'
import { Grid } from "@material-ui/core";

export default function _Home() {

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
