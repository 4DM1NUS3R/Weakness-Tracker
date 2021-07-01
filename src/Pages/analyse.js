import React from 'react';
import {useState, useEffect} from 'react';
import styles from './analyse.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Analyse() {

    /* Modal */

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

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
                        <h3>
                            Terminaux
                        </h3>

                        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginLeft: '2%', marginRight: '2%'}}>
                            {listDesOrdis.map((nomPC) => (
                                <div className="user">

                                    <div style= {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}> 
                                        <Popup trigger={<button className="wssh" class="btn btn-success btn-sm" onClick={() => setOpen(o => !o)}> Détails</button>} modal nested>
                                            <div>
                                                <p style={{textAlign: 'Center', fontSize: '30px', fontWeight: '600'}}>  {nomPC} </p>
                                                <p> <span style={{ fontWeight: '600'}}> Nom : </span> {nomPC} </p>
                                                <p> <span style={{ fontWeight: '600'}}> IP : </span> 
                                                    { listePC[nomPC]['ip'].map((nomIP) => (
                                                    <p> {nomIP} </p>)  )} 
                                                </p> 

                                                <p> <span style={{ fontWeight: '600'}}> Forwarding : </span> {listePC[nomPC]['forwarding'] ? 'Activé' : 'Désactivé' } </p>
                                            </div>    
                                        </Popup>
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                        </svg>
                                            
                                    </div>

                                    <div>
                                        <p> <span style={{ fontWeight: '600'}}> Nom : </span> {nomPC} </p>
                                        <p> <span style={{ fontWeight: '600'}}> IP : </span> 
                                            { listePC[nomPC]['ip'].map((nomIP) => (
                                            <p> {nomIP} </p>)  )} 
                                        </p> 
                                        
                                    
                                    </div>

                                </div>
                            ))}

                        </div>


                    </div>


                    <div>
                        <h3>
                            Rapport
                        </h3>

                        <p> </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Analyse;