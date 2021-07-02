import React from 'react';
import {useState, useEffect} from 'react';
import styles from './analyse.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Analyse() {

    /* Modal */

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const contentStyle = { background: 'rgb(24,24,24)', border: 'solid 3px rgb(4, 182, 78)'};


    /* Fin modal */
 
    const [listePC, setlistePC] = useState({})
    useEffect(() => {

        fetch('/WT/back/networkAnalysis').then((res) => {
        return res.json()

        }).then((data) => {
            setlistePC(data)
        })

    }, [])


    const listDesOrdis = []
    function renderPC(listePC) {
        for(let hostname in listePC){
            listDesOrdis.push(hostname)
        }
    }

    renderPC(listePC)

    console.log(listePC)

    function renderIP(listePC, hostname, ip){
        let listeDesIP = []
        for(let ipi in listePC[hostname][ip]) {
            listeDesIP.push(ipi)
        }
        return listeDesIP
    }



    
    
    
    

    return (
        <div className="page">

            <div className="bocal">
                <div className="elementAnalyse">
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                        <button type="button" class="btn btn-success btn-lg">
                        Lancer le scan 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16" className="m-2">
                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                        </svg>
                        </button>
                    </div>
                    <div>
                        <h3 style={{ fontSize:'40px', marginBottom: '4%', marginLeft: '5%', color:'rgb(15, 75, 40)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="iconReseau" class="bi bi-diagram-3-fill m-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"/>
                            </svg>
                            Terminaux
                        </h3>

                        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginLeft: '2%', marginRight: '2%'}}>
                            {listDesOrdis.map((nomPC) => (
                                <div className="user">

                                    <div style= {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}> 
                                        <Popup trigger={<button onClick={() => setOpen(o => !o) } className= "capsule" class="btn btn-success btn-sm" > Détails</button>} {...{ contentStyle }} modal nested>
                                            <div>
                                                <p style={{textAlign: 'Center', fontSize: '30px', fontWeight: '600', color: 'rgb(4, 182, 78)', borderBottom: 'solid 2px rgb(208,208,208)', marginLeft:' 1%', marginRight: '1%', marginTop: '12px', paddingBottom: '10px'}}>   {nomPC} </p>
                                             

                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> IP : </span> 
                                                    { listePC[nomPC]['ip'].map((nomIP) => (
                                                    <p> {nomIP} </p>)  )} 
                                                </p> 
                                                <p className="separateur"></p>

                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> Forwarding : </span> {listePC[nomPC]['forwarding'] ? 'Activé' : 'Désactivé' } </p>
                                                <p className="separateur"></p>

                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> Port connu : </span> {listePC[nomPC]['port']['known'].map((nomPortC) => (<p> {nomPortC} </p>)) } </p>
                                                <p className="separateur"></p>
                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> Port dynamique : </span> {listePC[nomPC]['port']['dynamic'].map((nomPortA) => (<p> {nomPortA} </p>)) } </p>
                                                <p className="separateur" ></p>


                                                <p style={{ textAlign: 'Center', fontSize: '20px', color: 'rgb(4, 182, 78)' }}> <span style={{  fontWeight: '600'}}> Règles  </span> </p>

                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> NAT-ACCEPT : </span> {listePC[nomPC]['rules']['nat']['ACCEPT'].map((nomNATA) => (<p> {nomNATA} </p>) )} </p>
                                                <p className="separateur" ></p>
                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> NAT-DROP : </span> {listePC[nomPC]['rules']['nat']['DROP'].map((nomNATD) => (<p> {nomNATD} </p>) )} </p>
                                                <p className="separateur" ></p>

                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> FILTER-ACCEPT : </span> {listePC[nomPC]['rules']['filter']['ACCEPT'].map((nomFILTA) => (<p> {nomFILTA} </p>) )} </p>
                                                <p className="separateur" ></p>
                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> FILTER-DROP : </span> {listePC[nomPC]['rules']['filter']['DROP'].map((nomFILTD) => (<p> {nomFILTD} </p>) )} </p>
                                                <p className="separateur" ></p>


                                                <p style= {{textAlign: 'Center', fontSize: '20px', color: 'rgb(4, 182, 78)' }} > <span style={{ fontWeight: '600'}}> Serveurs </span>  </p>

                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> Serveur HTTP - Etat : </span> {listePC[nomPC]['server']['HTTP']['state'] ? 'Activé' : 'Désactivé'} </p>
                                                <p className="separateur" ></p>
                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> Serveur DHCP - Etat : </span> {listePC[nomPC]['server']['DHCP']['state'] ? 'Activé' : 'Désactivé'} </p>
                                                <p className="separateur" ></p>
                                                <p style={{color: 'white'}}> <span style={{ fontWeight: '600'}}> Serveur DNS - Etat : </span> {listePC[nomPC]['server']['DNS']['state'] ? 'Activé' : 'Désactivé'} </p>
                                                <p className="separateur" ></p>

                                                <p style= {{textAlign: 'Center', fontSize: '20px', color: 'rgb(255,215,0)'}} > <span style={{ fontWeight: '600', whiteSpace: "pre-wrap"}}> Description </span> </p>
                                                <p style={{color: 'white', textAlign: 'justify'}}>  {listePC[nomPC]['description'].split("\n\n").map(str => <p>{str}</p>)} </p>
                                                
                                            </div>    
                                        </Popup>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                        </svg>
                                            
                                    </div>

                                    <div>
                                        <p style={{ textAlign: 'Center', fontWeight: '600', color: 'rgb(9, 126, 58)', textDecoration: 'underline'}}> {nomPC} </p>
                                        <p> <span style={{ fontWeight: '600'}}> IP : </span> 
                                            { listePC[nomPC]['ip'].map((nomIP) => (
                                            <p> {nomIP} </p>)  )} 
                                        </p> 
                                        
                                    
                                    </div>

                                </div>
                            ))}

                        </div>


                    </div>


                    

                </div>
            </div>

        </div>
    )
}

export default Analyse;