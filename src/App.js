import React, {useState} from 'react';
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

    switch(editMode){
        case 'en':
            state = state.state.en;
            break;
        case 'ru':
            state = state.state.ru;
            break;
        default:
            state = state.state.en;
    }

    return (
        <div className='App'>
            <Header header={state.header} setEditMode={setEditMode}/>
            <Main main={state.main}/>
            <AboutMe aboutMe={state.aboutMe}/>
            <Skills skills={state.skills}/>
            <Projects projects={state.projects}/>
            <Slogan slogan={state.slogan}/>
            <Contacts contacts={state.contacts}/>
            <Footer footer={state.footer}/>

        </div>
    );
};

export default App;
