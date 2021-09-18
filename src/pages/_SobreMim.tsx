import { PolarArea , Bar, Doughnut,Pie } from "react-chartjs-2";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import React from 'react'
export async function getStaticProps (){
  const response= await fetch('https://covid-api.mmediagroup.fr/v1/cases');
  const data= await response.json();
  return{
    props:{
      paises:data,
    },
    revalidate:60*60*24,
  }
}
export default function _SobreMim(props:any) {
  var pais = Object.keys(props.paises)[23];
  function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }

 var array=[];
 var label = [];
 var valor = [];
 var Dado = props.paises.Brazil;
 var deaths = [];
 var cidades = [];
 var cor = [];
 var dataAtualizacao = Dado['Sao Paulo'].updated.substr(0,10).split('/').reverse().join('/');
 var horaAtualizacao = Dado['Sao Paulo'].updated.substr(11,5);

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
          label:  Object.keys(Dado)[1] ,
          data: [Dado.Acre.deaths],
          backgroundColor: gerar_cor(),
        },
        {
          label:  Object.keys(Dado)[2] ,
          data: [Dado.Alagoas.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[3] ,
          data: [Dado.Amapa.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[4] ,
          data: [Dado.Amazonas.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[5] ,
          data: [Dado.Bahia.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[6] ,
          data: [Dado.Ceara.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[7] ,
          data: [Dado['Distrito Federal'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[8] ,
          data: [Dado['Espirito Santo'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[9] ,
          data: [Dado.Goias.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[10] ,
          data: [Dado.Maranhao.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[11] ,
          data: [Dado['Mato Grosso'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[12] ,
          data: [Dado['Mato Grosso do Sul'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[13] ,
          data: [Dado['Minas Gerais'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[14] ,
          data: [Dado.Para.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[15] ,
          data: [Dado.Paraiba.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[16] ,
          data: [Dado.Parana.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[17] ,
          data: [Dado.Pernambuco.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[18] ,
          data: [Dado.Piaui.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[19] ,
          data: [Dado['Rio Grande do Norte'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[20] ,
          data: [Dado['Rio Grande do Sul'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[21] ,
          data: [Dado['Rio de Janeiro'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[22] ,
          data: [Dado.Rondonia.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[23] ,
          data: [Dado.Roraima.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[24] ,
          data: [Dado['Santa Catarina'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[25] ,
          data: [Dado['Sao Paulo'].deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[26] ,
          data: [Dado.Sergipe.deaths],
          backgroundColor: gerar_cor(),
        },{
          label:  Object.keys(Dado)[27] ,
          data: [Dado.Tocantins.deaths],
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
 

    return (
      <>
      <div className="mainRaised" >
        <div className="main">
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
                          {Dado.All.deaths.toLocaleString()}
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
                          {Dado.All.confirmed.toLocaleString()}
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
                          {Dado.All.population.toLocaleString()}
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
                          {Dado.All.life_expectancy.toLocaleString()}
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
                <h3>Casos novos de COVID-19 por data de notificação.  Atualizado: {dataAtualizacao} {horaAtualizacao}  </h3>
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
  