import React from "react";
import Heads from './_Head'
import _Header from './_Header'
import _SobreMim from './_SobreMim'
import _Home from './_Home'

export async function getStaticProps (){

    var response = await fetch('https://devapicovid.azurewebsites.net/api/Get');
    if(response.ok){
      var response = await fetch('http://covid-api.mmediagroup.fr/v1/cases');
    }
    var data= await response.json();

    return{
      props:{
        paises:data,
      },
      revalidate:60*60*24,
    }
  
}
export default function Home(props:any) {
  {/*const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
  {/*React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
*/} 

  return (
    <>
        <Heads/>
        <_Header/>
        {/*<div style={{transform: transform}}>*/} 
          <_Home/>
        {/* </div>*/} 
        <_SobreMim props={props.paises}/>
    </>
  )
}
