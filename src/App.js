import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import News from "./components/News/News";

function App(state) {

    state = state.state;

    return (
        <div className='App'>
            <Header header={state.header}/>
            <Main main={state.main}/>
            <AboutMe aboutMe={state.aboutMe}/>
            <Skills skills={state.skills}/>
            <Projects projects={state.projects}/>
            <Slogan slogan={state.slogan}/>
            <News news={state.news}/>
            <Contacts contacts={state.contacts}/>
            <Footer/>

        </div>
    );
}

export default App;
