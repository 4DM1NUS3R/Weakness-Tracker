import React from 'react';
import styles from './prevention.css';


function Prevention(){

    return(
        <div className="page">

        
            <div className= "bocal">
                <div className= "conteneur" style= {{ width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
                
                    <div className= "sommaire" >
                       <div style= {{ marginBottom: '20px'}}>
                            <h3 style= {{ textAlign: 'Center', color: 'rgb(9, 126, 58)'}} > Sommaire </h3>
                        </div> 

                        <div> 
                            <ul style= {{ listStyle: 'none'}}>
                                <li className="titresommaire" > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bullseye m-2" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                                    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>

                                    Qu'est-ce qu'une vulnérabilité ?
                                </li>

                                <li className="titresommaire"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star-fill m-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"/>
                                    </svg>
                                    Vulnérabilités connues
                                </li>

                                <li className="titresommaire"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill-check m-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
                                    </svg>
                                    Solutions pour sécuriser votre réseau
                                </li>
                            </ul>
                        </div>
                        
                    </div> 

                    <div className= "contenu">
                        <div className= "partie1"> 
                             <h3 style= {{ color: 'rgb(9, 126, 58)', marginBottom: '20px'}}> Qu’est-ce qu’une vulnérabilité ? </h3>

                             <div className= "souspartie1" style= {{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>

                                <div> 
                                    <img style={{ width: '400px', height: '250px', marginRight: '30px' }}src= "https://phoenixnap.com/blog/wp-content/uploads/2018/08/cloud-security-5.jpg" />
                                </div> 

                                <div> 
                                <p style= {{ textAlign: 'justify'}} >
                                    Dans cette documentation vous trouverez la majorité des vulnérabilités les plus connues des réseaux ainsi que leurs principales solutions afin de les renforcer et ainsi de sécuriser le réseau de votre entreprise.  
                                    Une vulnérabilité est une faille de sécurité qui provient souvent d’une faiblesse lors de la confection du système d’information (SI), d’un logiciel ou d’un périphérique. 
                                    Elles peuvent entraîner des cyberattaques c’est pourquoi il est important de les étudier et de les sécuriser. 
                                </p>
                                </div>
                                 
                             </div>
                            
                            

                        </div>
                        

                    </div>

                </div>

            </div> 

        </div>
    )
}

export default Prevention;