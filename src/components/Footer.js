import React from 'react';
import './Footer.css';
import { Nav } from 'react-bootstrap';

import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'

function Footer() {

  let mainPageRefs = ["http://localhost:3000/", "http://localhost:3000/#herosection", "http://localhost:3000/#aboutUs", "http://localhost:3000/#questions"];
  let mainPage = mainPageRefs.includes(window.location.href);

  return (
    <div class="footer-dark">
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Projetos</h3>
                        <ul>
                            <li><a href="#footer" onClick={() => window.open('https://www.instagram.com/diariodanahir/')}>Nahir e os ODS</a></li>
                            <li><a href="#footer" onClick={() => window.open('https://www.instagram.com/educationbuilders/')}>Education Builders</a></li>
                            <li><a href="#footer" onClick={() => window.open('https://www.instagram.com/lixo_nao/')}>Lixo Não</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Sobre nós</h3>
                        <ul>
                            <li><a href="#aboutUs">Quem somos</a></li>
                            <li><a href="/Contact">Contactos</a></li>
                        </ul>
                        <h3 className='mt-2'>Email</h3>
                        <ul>
                            <a>youthdream2019@gmail.com</a>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Youth Dream</h3>
                        <p>A YOUTH DREAM é uma associação juvenil fundada em junho de 2019 com o propósito de promover os Objetivos de Desenvolvimento Sustentável (ODS).</p>
                    </div>
                    <div class="col item social text-center"><a onClick={() => window.open('http://www.instagram.com/youthdreamassociacao/')}><BsInstagram/></a><a onClick={() => window.open('http://www.facebook.com/youthdreamassociacao/')}><BsFacebook/></a><a onClick={() => window.open('http://www.linkedin.com/company/youthdreamassociacao/')}><BsLinkedin/></a></div>
                </div>
                <p class="copyright">Youth Dream © 2022</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
