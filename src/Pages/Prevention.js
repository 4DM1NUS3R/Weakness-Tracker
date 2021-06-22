import React from 'react';
import styles from './prevention.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion, Card, Button } from 'react-bootstrap';



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
                               <a href="#partie1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bullseye m-2" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                                        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>

                                        Qu'est-ce qu'une vulnérabilité ?
                                    </a> 
                                </li>

                                <li className="titresommaire"> 
                                    <a href="#partie2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star-fill m-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"/>
                                        </svg>
                                        Vulnérabilités connues
                                    </a>
                                </li>

                                <li className="titresommaire">
                                    <a href="#partie3" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill-check m-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
                                        </svg>
                                        Solutions pour sécuriser votre réseau
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div> 

                    <div className= "contenu">
                        <div className= "partie1" style= {{ marginBottom: '10%'}}> 
                             <h3 id= "partie1" style= {{ color: 'rgb(9, 126, 58)', marginBottom: '20px'}}> Qu’est-ce qu’une vulnérabilité ? </h3>

                             <div className= "souspartie1" style= {{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>

                                <div> 
                                    <img style={{ width: '400px', height: '250px', marginRight: '30px' }}src= "https://phoenixnap.com/blog/wp-content/uploads/2018/08/cloud-security-5.jpg" />
                                </div> 

                                <div> 
                                <p style= {{ textAlign: 'justify'}} >
                                    Dans cette documentation vous trouverez la majorité des vulnérabilités les plus connues des réseaux ainsi que leurs principales solutions afin de les renforcer et ainsi de sécuriser le réseau de votre entreprise.<br/>  
                                    Une vulnérabilité est une faille de sécurité qui provient souvent d’une faiblesse lors de la confection du système d’information (SI), d’un logiciel ou d’un périphérique. 
                                    Elles peuvent entraîner des cyberattaques c’est pourquoi il est important de les étudier et de les sécuriser. 
                                </p>
                                </div>
                                 
                             </div>
                            
                            

                        </div>


                        <div className= "partie2" style= {{ marginBottom: '10%'}}> 
                             <h3 id="partie2" style= {{ color: 'rgb(9, 126, 58)', marginBottom: '20px'}}> Vulnérabilités connues </h3>

                             <div className= "souspartie2" style= {{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                 
                                 <div> 
                                    <p style= {{ textAlign: 'justify'}} >
                                    <span style= {{ fontWeight: 'bold', color: 'rgb(4, 182, 78)'}}>Shellshock : </span> Vulnérabilité des systèmes d’exploitation Linux, Unix et macOS qui autorisent une personne tierce 
                                    à prendre le contrôle d’une machine. <br/> <br/>

                                    <span style= {{ fontWeight: 'bold', color: 'rgb(4, 182, 78)'}}>Heartbleed : </span> Vulnérabilité permettant à une personne tierce de lire des portions mémoire d’un serveur avec l’utilisation 
                                    de clés privées pour le chiffrement des données. Elle est causée par la mauvaise implémentation du protocole TLS d’open SSL. <br/> <br/>

                                    <span style= {{ fontWeight: 'bold', color: 'rgb(4, 182, 78)'}}>Poodle : </span> Vulnérabilité présente dans le code SSL v3 qui permet des attaques du type “man in the middle” qui 
                                    permet à une personne tierce d’intercepter les données lors d’un échange de données entre un client et un serveur. <br/> <br/>

                                    <span style= {{ fontWeight: 'bold', color: 'rgb(4, 182, 78)'}}>Dirty Cow : </span> Vulnérabilité présente sur le système d’exploitation Linux (copy on write) qui permet 
                                    à une personne tierce d’élever ses privilèges au sein d’une machine et d’un réseau.  <br/> <br/>

                                    <span style= {{ fontWeight: 'bold', color: 'rgb(4, 182, 78)'}}>Spectre et Meldown : </span> Vulnérabilité des processeurs INTEL pour récupérer des informations mémoire. <br/> <br/>

                                    <span style= {{ fontWeight: 'bold', color: 'rgb(4, 182, 78)'}}>Injection SQL : </span> Vulnérabilité sur les bases de données qui permet à une personne tierce 
                                    d’injecter une requête non désirer pouvant compromettre la sécurité du réseau.  <br/> <br/>

                                    <span style= {{ fontWeight: 'bold', color: 'rgb(4, 182, 78)'}}>Faille DNS NAME:WRECK : </span> Il existe de nombreuses failles DNS sur les couches TCP/IP qui compromettent la sécurité des réseaux des entreprises. Il faut donc se tenir régulièrement informer sur celles-ci car beaucoup sont découvertes, il suffit ensuite de patcher ces erreurs pour les résoudre. 
                                    Il faut bien configurer et réaliser les serveurs DNS des différents réseaux. <br/> <br/>

                                    <span style= {{ fontWeight: 'bold', color: 'rgb(4, 182, 78)'}}>DHCP spoofing et ARP spoofing : </span> Vulnérabilité dans les protocoles DHCP 
                                    et ARP qui amènent à une usurpation de l’adresse IP en se faisant passer pour un autre sur un réseau  
                                    </p>
                                </div>
                                 
                             </div>
                            
                            

                        </div>


                        <div className= "partie3" style= {{ marginBottom: '7%'}}> 
                             <h3 id="partie3" style= {{ color: 'rgb(9, 126, 58)', marginBottom: '20px'}}> Comment sécuriser le réseau de son entreprise ? </h3>

                             <div className= "souspartie3" >

                             <Accordion >
                                 <div >
                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="0" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill m-2" viewBox="0 0 16 16">
                                                        <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
                                                    </svg>
                                                    Sécurisation des boites mails de l’entreprise
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    C’est souvent le chemin utilisé pour propager un ransomware avec des techniques comme le phishing. 
                                                    Les spams sont donc un réel danger pour les entreprises. Les fausses factures par exemple sont souvent utilisé 
                                                    afin de piéger des employés. Il faut donc bien sécuriser les boites mails afin qu’elles trient correctement les messages 
                                                    frauduleux (filtres anti-spam et graymail). 
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="1" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2 m-2" viewBox="0 0 16 16">
                                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                                                    </svg>
                                                    Sécurisation des URL et des passerelles web
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    Beaucoup de contenu malicieux, de logiciels malveillants. 
                                                    Il faut donc sécuriser le réseau en contrôlant les passerelles web : 
                                                    utilisation de filtrage de contenu, filtrage protocolaire, utilisation de firewall, filtrage des déchiffrement HTTPS 
                                                    et antivirus permettant d’analyser le contenu téléchargeable sur Internet. 
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="2" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill m-2" viewBox="0 0 16 16">
                                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
                                                    </svg>
                                                    Utilisation des fichiers log 
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    Utilisation de fichiers journaux afin de garder une trace de toute activité effectuer sur le réseau. 
                                                    Ils enregistrent les données pour permettre la restauration de certains fichiers s'ils sont endommagés 
                                                    ou supprimés et l’enregistrement du comportement des employés sur le réseau. Ils sont donc un soutien important 
                                                    contre des ransomwares ou des injections SQL par exemple. 
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="3" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-check-fill m-2" viewBox="0 0 16 16">
                                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 4.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                                    </svg>
                                                    Utilisation de pare-feu 
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="3">
                                                <Card.Body>
                                                    Utilisation de firewall permettant de protéger un ordinateur ou un réseau contre les intrusions provenant d’un réseau inconnu. 
                                                    Le pare-feu permet de filtrer les paquets de données transmis, de filtrer les connexions au réseau (authentification des utilisateurs) 
                                                    et d’examiner tout le traffic. Ils vérifient la validité des demandes de connexion aux serveurs, masque le réseau que de l’entreprise 
                                                    et interceptent les attaques envers les serveurs web de l’entreprise ou de l’hébergeur. Ils permettent également le chiffrement des 
                                                    données lors des échanges entre les clients et les serveurs afin de contrer les attaques du type “man in the middle”. 
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="4" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill m-2" viewBox="0 0 16 16">
                                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                                                    </svg>
                                                Utilisation de la cryptographie 
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="4">
                                                <Card.Body>
                                                    Si votre entreprise contient des données personnelles, des législations existes afin de savoir si celles-ci 
                                                    sont sécurisé (RGPD). Cette technique permet de savoir si les données échangées sont authentiques et issues d’une 
                                                    source fiable mais aussi d’échangé des données en toute sécurité entre un navigateur et un serveur.
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="5" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal-fill m-2" viewBox="0 0 16 16">
                                                        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z"/>
                                                    </svg>
                                                    Sécurisation des terminaux 
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="5">
                                                <Card.Body>
                                                    La sécurisation des terminaux (endpoint) est importante afin de protéger les réseaux professionnels qui sont accessibles 
                                                    depuis tout type d’appareil externe (téléphones mobiles, tablettes, ordinateur portable) car on sait que près de 70% des 
                                                    attaques sont effectuer sur les terminaux. Il existe des plateformes de protection de terminaux afin d’analyser le 
                                                    matériel externe aux réseaux que pourrait ramener un employé. Si vous ne voulez pas de solution afin de sécuriser les 
                                                    terminaux alors n’autoriser jamais un employé à se connecter au réseau avec son propre matériel mais seulement avec celui 
                                                    de l’entreprise. 
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="6" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels-fill m-2" viewBox="0 0 16 16">
                                                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                        <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
                                                    </svg>
                                                    Utilisation d’un IPS
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="6">
                                                <Card.Body>
                                                    Un système de prévention d’intrusion permet de surveiller le traffic réseau efficacement afin de 
                                                    détecter une intrusion et de prendre lui-même des mesures très rapides envers l’intru afin de régler le problème. 
                                                    L’administrateur réseau de votre entreprise sera chargé de programmer un IPS afin que celui-ci suive les règles que l’administrateur 
                                                    lui aura fournis. 
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="7" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square m-2" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                    </svg>
                                                    Utilisation d’un superviseur réseau 
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="7">
                                                <Card.Body>
                                                    Cette supervision permettra de faire des rapports continue via l’examen des pares-feux, des anti-virus ainsi que de l’ensemble 
                                                    des machines connecté aux réseaux afin de détecter très rapidement et simplement les failles et les possibles erreurs. 
                                                    Pour cela, des certains logiciels existe afin de vous simplifier le travail.  
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="8" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill m-2" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                    </svg>
                                                    Sensibilisation des employés
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="8">
                                                <Card.Body>
                                                    Les failles humaines sont énormément exploitées afin d’attaquer un réseau, il est donc important que vos collaborateurs soient 
                                                    et restent informer sur les différents dangers d’Internet. Il faut contrer l’ingénierie sociale et pour cela rien de mieux qu’une 
                                                    formation de vos employés sur le sujet. 
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>

                                        <div style= {{marginBottom: '10px'}}> 
                                            <Card style={{ width: '100%'}}>
                                                <Card.Header>
                                                <Accordion.Toggle as={Button}  eventKey="9" className="clickos">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right m-2" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                                    </svg>
                                                    Méthode DAI (Dynamic ARP Inspection)
                                                </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="9">
                                                <Card.Body>
                                                    Cette méthode utilise la base du DHCP snooping pour vérifier la conformité des réponses de chaque paquet ARP envoyées. 
                                                    On compare l’adresse IP émettrice du paquet a celle attribuée par le serveur DHCP mais si les adresses ne sont pas les mêmes 
                                                    alors le paquet est supprimé.
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </div>
                                </div>
                            </Accordion>

                            


                             </div>
                            
                            

                        </div>
                        

                    </div>

                </div>

            </div> 

        </div>
    )
}

export default Prevention;