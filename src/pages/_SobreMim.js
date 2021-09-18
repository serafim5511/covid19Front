import Image from 'next/image'
import imagemRosto from '../public/rosto.png'
import Dados from '../public/data.json'
import { Avatar, Fade, Grid, Hidden, Icon, makeStyles, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from "@material-ui/core";
import { PolarArea , Bar, Doughnut, Radar,Pie } from "react-chartjs-2";
import { Card, CardBody, CardTitle,CardHeader, Container, Row, Col } from "reactstrap";
import React from 'react'

export default function _SobreMim() {
  var pais = Object.keys(Dados)[23];
  function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }
 var array=[];
 var label = [];
 var valor = [];
 var Dado = Dados.Brazil;
 var deaths = [];
 var cidades = [];
 var cor = [];
 
 for(var i = 0; i < 27; i++)
{
  array.push(Object.keys(Dado)[i]);
};
for(var key in Dado)
{
  label.push(key);
  valor.push(Dado[key].deaths)
}
for (let index = 1; index < valor.length; index++) {
  deaths.push(valor[index]);  
  cidades.push(label[index]);
  cor.push(gerar_cor())
}
    const data = {
      labels: [''],
      datasets: [
        {
          label:  Object.keys(Dados.Brazil)[1] ,
          data: [Dados.Brazil.Acre.deaths],
          backgroundColor: gerar_cor(),
        },
        {
          label:  Object.keys(Dados.Brazil)[2] ,
          data: [Dados.Brazil.Alagoas.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[3] ,
          data: [Dados.Brazil.Amapa.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[4] ,
          data: [Dados.Brazil.Amazonas.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[5] ,
          data: [Dados.Brazil.Bahia.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[6] ,
          data: [Dados.Brazil.Ceara.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[7] ,
          data: [Dados.Brazil['Distrito Federal'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[8] ,
          data: [Dados.Brazil['Espirito Santo'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[9] ,
          data: [Dados.Brazil.Goias.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[10] ,
          data: [Dados.Brazil.Maranhao.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[11] ,
          data: [Dados.Brazil['Mato Grosso'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[12] ,
          data: [Dados.Brazil['Mato Grosso do Sul'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[13] ,
          data: [Dados.Brazil['Minas Gerais'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[14] ,
          data: [Dados.Brazil.Para.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[15] ,
          data: [Dados.Brazil.Paraiba.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[16] ,
          data: [Dados.Brazil.Parana.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[17] ,
          data: [Dados.Brazil.Pernambuco.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[18] ,
          data: [Dados.Brazil.Piaui.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[19] ,
          data: [Dados.Brazil['Rio Grande do Norte'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[20] ,
          data: [Dados.Brazil['Rio Grande do Sul'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[21] ,
          data: [Dados.Brazil['Rio de Janeiro'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[22] ,
          data: [Dados.Brazil.Rondonia.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[23] ,
          data: [Dados.Brazil.Roraima.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[24] ,
          data: [Dados.Brazil['Santa Catarina'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[25] ,
          data: [Dados.Brazil['Sao Paulo'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[26] ,
          data: [Dados.Brazil.Sergipe.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dados.Brazil)[27] ,
          data: [Dados.Brazil.Tocantins.deaths],
          backgroundColor: gerar_cor(),
        },
      ],
    };
    const datas = {
      labels: cidades,
      datasets: [
        {
          data: deaths,
          backgroundColor: cor,
          borderColor: cor,
          borderWidth: 1
        }
      ]
    };
  const useStyles = makeStyles({
    main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  }
})

const classes = useStyles();

    return (
      <>
      <div className={classes.mainRaised} >
        <div className={classes.main}>
          <div className="about-area section-padding" id="about">
          <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">

            <Container fluid>
            <div className="header-body">

            <Row>
              <Col lg="3" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody style={{marginBottom: "1.5rem " ,  background:'#0375B4', color:'white', borderRadius:'0.375rem' }}>
                    <Row style={{padding:'3rem'}}>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-white mb-0">
                          {pais.replace('z','s') + ' / ÓBITOS CONFIRMADOS' }                         
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {Dados.Brazil.All.deaths.toLocaleString()}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>                    
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody style={{marginBottom: "1.5rem " ,  background:'#0375B4', color:'white', borderRadius:'0.375rem' }}>
                    <Row style={{padding:'3rem'}}>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-white mb-0">
                          Confirmados
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {Dados.Brazil.All.confirmed.toLocaleString()}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>                    
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody style={{marginBottom: "1.5rem " ,  background:'#0375B4', color:'white', borderRadius:'0.375rem' }}>
                    <Row style={{padding:'3rem'}}>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-white mb-0"
                        >
                          População
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {Dados.Brazil.All.population.toLocaleString()}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>                    
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody style={{marginBottom: "1.5rem " ,  background:'#0375B4', color:'white', borderRadius:'0.375rem' }}>
                    <Row style={{padding:'3rem'}}>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-white mb-0"
                        >
                          Expectativa de vida
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {Dados.Brazil.All.life_expectancy.toLocaleString()}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>                    
                  </CardBody>
                </Card>
              </Col>
              </Row>
              </div>
              <div className="service">
                <h3>Casos novos de COVID-19 por data de notificação</h3>
              </div>
              <Row>
              
              <Col lg="6" xl="6">
              
              <Bar data={data}  />

            </Col>
            <Col lg="6" xl="6">
              
              <PolarArea data={data} />

            </Col>
             <Col lg="6" xl="6">
              
              <Pie data={datas} />

            </Col>
            <Col lg="6" xl="6">
              
              <Doughnut data={datas}  />

            </Col>
            </Row>
            </Container>
            </div>
            
            </div>
        </div>
      </div>
        
      </>
    )
  }
  