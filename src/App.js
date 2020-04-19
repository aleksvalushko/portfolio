import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";

let App = (state) => {

    let [editMode, setEditMode] = useState('en');
    let [isLoading, setLoading] = useState(false);

    switch (editMode) {
        case 'en':
            state = state.state.en;
            break;
        case 'ru':
            state = state.state.ru;
            break;
        default:
            state = state.state.en;
    }
    useEffect(() => {
        setLoading(true);
    });

    return (
        isLoading ? <div className='App'>
            <Header header={state.header} setEditMode={setEditMode}/>
            <Main main={state.main}/>
            <AboutMe aboutMe={state.aboutMe}/>
            <Skills skills={state.skills}/>
            <Projects projects={state.projects}/>
            <Slogan slogan={state.slogan}/>
            <Contacts contacts={state.contacts}/>
            <Footer footer={state.footer}/>
        </div> : <div className='AppWrapper'>
            <div className='bounce'></div>
        </div>
    );
};

export default App;
