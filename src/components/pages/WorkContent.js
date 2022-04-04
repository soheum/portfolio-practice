import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Joul from './Work/Joul';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './WorkContent.css';

function WorkContent(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(true)
        } else {
            setButton(false)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    

    return (
        <>
       <div className="container">
            <div className="semi_title semi_title_work">
               <span className="span_semititle">UI/UX</span>
            </div>
        </div>

        <div className="container worklist">
         <div className="work1">
            <Link to="/joul" className="nav-link" onClick={closeMobileMenu}>
                <span className="span_jobtitle">JOUL<br /></span>
                <span className="span_job">a toy for exploring sustainability</span>
                <img className="work_img" src={"./images/about/work_joul.jpg"} />

            </Link>
         </div>
         <div className="work2 ">
            <Link to="/seam" className="nav-link" onClick={closeMobileMenu}>
               <div className="span_title_2">
                    <span className="span_jobtitle">SEAM<br /></span>
                    <span className="span_job">seaming memory and love for Alzheimer's</span>
                </div>
                <img className="work_img_2" src={"./images/about/work_seam.jpg"} />
            </Link>
         </div>
         <div className="work3">
         <a href="https://drive.google.com/file/d/15sId83Mw8XTa12FsdUuRv0LC3FlIbGMY/view?usp=sharing">
                <span className="span_jobtitle">AUTONOMY / TRUST IN SELF-DRIVING<br /></span>
                <span className="span_job">master thesis in collab with Volvo Cars</span>
                <img className="work_img_3" src={"./images/about/work_thesis.jpg"} />
                </a>  
         </div>
        </div>

        <div className="container">
            <div className="semi_title semi_title_work">
               <span className="span_semititle">DATA DESIGN</span>
            </div>
        </div>

        <div className="container worklist">
         <div className="work1">
            <Link to="/philips" className="nav-link" onClick={closeMobileMenu}>
                <span className="span_jobtitle">INTERNSHIP AT PHILIPS<br /></span>
                <span className="span_job">exploring data-enabled design</span>
                <img className="work_img" src={"./images/about/work_philips.png"} />

            </Link>
         </div>
         <div className="work2 ">
            <Link to="/data" className="nav-link" onClick={closeMobileMenu}>
               <div className="span_title_2">
                <span className="span_jobtitle">JOURNEY THROUGH DATA<br /></span>
                <span className="span_job">how non-experts understand AI algorithms</span>
               </div>
                <img className="work_img_2" src={"./images/about/work_journey.jpg"} />
            </Link>
         </div>
         <div className="work3">
            <Link to="/dhm" className="nav-link" onClick={closeMobileMenu}>
                <span className="span_jobtitle">DHM: FUTURE CPR SCENARIO<br /></span>
                <span className="span_job">speculative design project for CPR scenarios</span>
                <img className="work_img_3" src={"./images/about/work_dhm.jpg"} />
            </Link>
         </div>
        </div>

        <div className="container">
            <div className="semi_title semi_title_work">
               <span className="span_semititle">VISUAL GRAPHICS</span>
            </div>
        </div>

        <div className="container worklist">
         <div className="work1">
            <Link to="/hera" className="nav-link" onClick={closeMobileMenu}>
                <span className="span_jobtitle">HERE NOW MYSELF: HERA<br /></span>
                <span className="span_job">visual storytelling through digital contents</span>
                <img className="work_img" src={"./images/about/work_hera.jpg"} />

            </Link>
         </div>
         <div className="work2 ">
         <a href="https://www.trapeza.finance/">
               <div className="span_title_2">
                    <span className="span_jobtitle">TRAPEZA<br /></span>
                    <span className="span_job">branding for Olympus DAO DeFi platform</span>
                </div>
                <img className="work_img_2" src={"./images/about/work_trapeza.jpg"} />
        </a>
         </div>
         <div className="work3">
         <a href="https://qcells.com/ane/stay-in-the-loop/eco-charged-community/stories">
                <span className="span_jobtitle">Q-CELLS GLOBAL WEBSITE<br /></span>
                <span className="span_job">video filming and content creation</span>
                <img className="work_img_3" src={"./images/about/work_qcells.jpg"} />
                </a>
         </div>
        </div>

        <div className="footer"></div>
        </>
    );
}

export default WorkContent;