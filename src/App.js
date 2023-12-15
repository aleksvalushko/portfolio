import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import useLanguage from "./context/language/useLanguage";

let App = () => {

	const { selectedTranslation, setCurrentLanguage, currentLanguage } = useLanguage();

	let [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
	}, []);

	return (
		isLoading ? <div className='app'>
			<Header header={ selectedTranslation.header } setCurrentLanguage={ setCurrentLanguage }/>
			<Main main={ selectedTranslation.main }/>
			<AboutMe aboutMe={ selectedTranslation.aboutMe } currentLanguage={ currentLanguage }/>
			<Skills skills={ selectedTranslation.skills }/>
			<Projects projects={ selectedTranslation.projects }/>
			<Slogan slogan={ selectedTranslation.slogan }/>
			<Contacts contacts={ selectedTranslation.contacts }/>
			<Footer footer={ selectedTranslation.footer }/>
		</div> : <div className='appWrapper'>
			<div className='bounce'/>
		</div>

	);
};

export default App;
