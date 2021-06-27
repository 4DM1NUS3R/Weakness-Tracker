import React from 'react';
import styles from './Contact.css';

function Contact(){

    return(
        <div className="page">
        
            <div className= "bocal">

                
                <form className="md-2" style = {{ height: '500px', width: '500px', marginLeft: '30%', marginRight: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style= {{ textAlign: 'center', marginBottom: '20px'}}> 
                        <h3>Faites-nous part de vos remarques ! </h3>
                    </div>

                    <div class="row" >
                        <div class="form-group col-md-6">
                            <label for="inputNom">Nom</label>
                            <input type="text" class="form-control" id="inputNom" placeholder="Entrer votre nom"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPrenom">Prénom</label>
                            <input type="text" class="form-control" id="inputPrenom" placeholder="Entrer votre prénom"/>
                        </div>
                    </div>

                    <div> 
                        <label for="exampleInputEmail1">Email </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer votre adresse email"/>
                        <small id="emailHelp" class="form-text text-muted">Nous ne transmetterons cet email à aucune entité tierce.</small>
                    </div>

                    <div class="form-group">
                        <label for="inputEntreprise">Entreprise </label>
                        <small id="emailHelp" class="form-text text-muted"> (facultatif)</small>
                        <input type="text" class="form-control" id="inputEntreprise" placeholder="Entrer le nom de votre entreprise "/>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"> Commentaires</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Entrer vos commentaires"></textarea>
                    </div>
                    
                    <div >
                        <button type="submit" class="btn btn-success m-3 ">Envoyer 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle-fill m-1" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                        
                        </button>
                        
                    </div>

                </form>
                
            </div> 

        </div>
    )
}

export default Contact;