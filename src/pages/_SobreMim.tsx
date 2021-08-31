import Image from 'next/image'
import imagemRosto from '../public/rosto.png'
import data from '../public/data.json'
import { makeStyles } from "@material-ui/core/styles"

export default function _SobreMim() {
    var dados = data.info;
    var about = data.about;

     
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="stack">
                                <div className="img">
                                <Image src={imagemRosto}  alt="Landscape picture" />    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-7 col-md-offset-1 col-sm-12">
                            <div className="about-right">
                                <h2>Full-Stack Developer</h2>
                                    <p>{about.description}</p>
                                    <p>{about.description2}</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="about-list">
                                            <li> <span className="title">Nome</span> <span className="value">{dados.nomeCompleto}</span> </li>
                                            <li> <span className="title">Idade</span> <span className="value">{dados.idade}</span> </li>
                                            <li> <span className="title">Email</span> <span className="value">{dados.email}</span> </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="about-list">
                                            <li> <span className="title">Telefone</span> <span className="value">{dados.telefone}</span> </li>
                                            <li> <span className="title">Cidade/Estado</span> <span className="value">{dados.localidade}</span> </li>
                                            <li> <span className="title">Hobby</span> <span className="value">{dados.Hobby}</span> </li>
                                        </ul>
                                    </div>
                                </div>


                                <a href="https://drive.google.com/file/d/1ctG_gpj9R7M7aTZv21hnIhecUJ_ryK5t/view?usp=sharing" className="skill-btn btn-a">Download cv</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
      </>
    )
  }
  