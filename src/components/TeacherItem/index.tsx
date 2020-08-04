import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">  
              <header>
                <img src="https://avatars2.githubusercontent.com/u/13324183?s=460&u=45ee3aceca1a8a951db626bf42af7722268a8d6f&v=4"/>
                <div>
                  <strong>Alex de Sousa</strong>
                  <span>Física</span>
                </div>
              </header>

              <p>
                Admirador de Física quântica.
                <br/><br/>
                Facilitador do ensino, sendo um dos maiores protagonistas em descobertas de tecnologia quântica.
              </p>

              <footer>
                <p>
                  Preço/hora
                  <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                  <img src={whatsappIcon} alt="whatsapp" />
                  Entrar em contato
                </button>
              </footer>
            </article>
    )
}

export default TeacherItem