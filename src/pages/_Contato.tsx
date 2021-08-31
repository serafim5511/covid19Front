import React, { useState } from "react";
import  {info}  from '../public/data.json'

export default function _Contato() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    var contactEmail = info.email;
    var cidade = info.localidade;
    var telefone = info.telefone;

    const submitForm = () => {
        window.open(
          `mailto:${contactEmail}?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
            email
          )}): ${encodeURIComponent(message)}`
        );
      };
  return (
    <>
      <div id="contact" className="contact-area section-padding">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>Meu <span>Contato</span></h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 box-contact-form">

                    <form id="contact-form" onSubmit={submitForm} >

                        <div className="messages"></div>

                        <div className="controls">

                        <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text"
                                        defaultValue=""
                                        value={name}
                                        id="contactName"
                                        name="contactName"
                                        placeholder="Seu nome *"
                                        onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input id="form_email" type="email" className="form-control"
                                        defaultValue=""
                                        value={email}
                                        placeholder="Seu Email *"
                                        name="contactEmail"
                                        onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Assunto *" defaultValue=""
                                            value={subject}
                                            id="contactSubject"
                                            name="contactSubject"
                                            onChange={(e) => setSubject(e.target.value)}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Sua mensagem *"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        id="contactMessage"
                                        name="contactMessage"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-send" onClick={submitForm}>Enviar</button>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1">
                    <div className="right-contact">
                        <div className="right-contact-text">
                            <i className="fa fa-map-marker"></i>
                            <h2>Cidade/Estado</h2>
                            <p>São Paulo, SP</p> 
                        </div>
                        <div className="right-contact-text">
                            <i className="fa fa-phone"></i>
                            <h2>Telefone</h2>
                            <p>(11)96346-2638</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
