import React from 'react';
import {useState, useEffect} from 'react';
import styles from './analyse.css';

function Analyse() {

    const nombres = ['one', 'two', 'three', 'viva l Algérie', 'iiish', 'nooon']

    const [listePC, setlistePC] = useState({})
    useEffect(() => {

        fetch('/WT/back/networkAnalysis').then((res) => {
        return res.json()

        }).then((data) => {
            setlistePC(data)
        })

    })
    
    
    

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
                            {nombres.map((user) => (
                                <div className="user">{user}</div>
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