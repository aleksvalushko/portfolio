import React, { useMemo, useState } from 'react';
import { birthDateToAge, declOfNum } from "../../components/helpers";
import js from "../../images/skills/JavaScript.svg";
import react from "../../images/skills/React.svg";
import redux from "../../images/skills/Redux.svg";
import vue from "../../images/skills/Vue.svg";
import vuex from "../../images/skills/Vuex.svg";
import html5 from "../../images/skills/HTML5.svg";
import sass from "../../images/skills/SASS.svg";
import typescript from "../../images/skills/TypeScript.svg";
import nuxt from "../../images/skills/Nuxt.svg";
import keycloak from "../../images/skills/Keycloak.svg";
import antd from "../../images/skills/Antd.svg";
import vuetify from "../../images/skills/Vuetify.svg";
import materialUI from "../../images/skills/MaterialUI.svg";
import git from "../../images/skills/Git.svg";
import json from "../../images/skills/JSON.svg";
import jira from "../../images/skills/Jira.svg";
import facebook from "../../images/facebook.svg";
import github from "../../images/github.svg";
import linkedIn from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
import LanguageContext from './LanguageContext';
import { EN, RU } from '../../contants';

const en = {
	header: [
		{ id: 1, link: 'MAIN', anchor: '#aboutMe' },
		{ id: 2, link: 'SKILLS', anchor: '#skills' },
		{ id: 3, link: 'PROJECTS', anchor: '#projects' },
		{ id: 4, link: 'CONTACTS', anchor: '#contacts' }
	],
	main: {
		name: 'ALEKS',
		lastName: 'VALUSHKO',
		specialize: {
			firstElement: `I'm a `,
			secondElement: ['HTML/CSS specialist', 'Java Script developer', 'Front-End developer']
		},
		anchor: '#aboutMe'
	},
	aboutMe: {
		title: 'ABOUT ME',
		underTitle: 'Main information about me',
		descriptionTitle: {
			firstElement: `I'm Aleks Valushko and I'm a `,
			secondElement: ['HTML/CSS specialist', 'Java Script developer', 'Front-End developer']
		},
		descriptionText: {
			firstPart: 'Hi! My name is ',
			secondPart: 'Aleks Valushko.',
			thirdPart: ` I'm highly skilled Front-end developer with 2+ years of experience in responsive websites and application development, 
			front-end application architecture design. I pay great attention to detail and work well in a team. Always trying to improve my skills 
			and learn new technologies. Worked with both maintaining old projects and adding new functionality to them, as well as creating new projects.`
		},
		information: {
			blockWithInformation1:
				[
					{
						id: 1,
						title: 'Birthday:',
						text: '14.03.1993'
					},
					{
						id: 2,
						title: 'City:',
						text: 'Minsk, Belarus'
					},
					{
						id: 3,
						title: 'Degree:',
						text: 'Higher'
					}
				],
			blockWithInformation2: [
				{
					id: 1,
					title: 'Age:',
					text: `${ birthDateToAge('1993-03-14') } years`
				},
				{
					id: 2,
					title: 'Interests:',
					text: 'Football, Good movies'
				},
				{
					id: 3,
					title: 'Study:',
					text: 'Military Academy of the Republic of Belarus'
				}
			]
		},
		buttons: {
			downloadEngCVButton: 'Download CV (Eng)',
			downloadRusCVButton: 'Download CV (Rus)',
			sendMessageButton: 'Send Message'
		},
		anchor: '#contacts'
	},
	skills: {
		title: 'SKILLS',
		skillsArray: [
			{ id: 1, title: 'Java Script', alt: 'js', image: js },
			{ id: 2, title: 'React', alt: 'react', image: react },
			{ id: 3, title: 'Redux', alt: 'store', image: redux },
			{ id: 4, title: 'Vue', alt: 'vue', image: vue },
			{ id: 5, title: 'VueX', alt: 'vuex', image: vuex },
			{ id: 6, title: 'HTML 5', alt: 'html5', image: html5 },
			{ id: 7, title: 'SASS', alt: 'sass', image: sass },
			{ id: 8, title: 'TypeScript', alt: 'typescript', image: typescript },
			{ id: 9, title: 'Nuxt', alt: 'nuxt', image: nuxt },
			{ id: 10, title: 'Keycloak', alt: 'keycloak', image: keycloak },
			{ id: 11, title: 'Ant design', alt: 'antd', image: antd },
			{ id: 12, title: 'Vuetify', alt: 'vuetify', image: vuetify },
			{ id: 13, title: 'Material UI', alt: 'material-ui', image: materialUI },
			{ id: 14, title: 'Git', alt: 'git', image: git },
			{ id: 15, title: 'JSON', alt: 'json', image: json },
			{ id: 16, title: 'JIRA', alt: 'jira', image: jira }
		]
	},
	projects: {
		title: 'PROJECTS',
		underTitle:
			'My latest works',
		button:
			'See',
		project: [
			{
				id: 1,
				title: 'TODOLIST',
				text: 'A SPA that\'s great for helping stick to plans, achieve goals and remember nothing.',
				link: 'http://aleksvalushko.github.io/todolist'
			},
			{
				id: 2,
				title: 'Social Network',
				text: 'In progress...',
				link: 'https://aleksvalushko.github.io/SocialNetwork/'
			},
			{
				id: 3,
				title: 'Rabbit Game',
				text: 'It\'s a simple game on native JS',
				link: 'https://aleksvalushko.github.io/rabbitGame/'
			},
			{
				id: 4,
				title: 'Rock, scissors and paper',
				text: 'It\'s a simple game on native JS',
				link: 'https://aleksvalushko.github.io/rock-scissors-and-paper/'
			},
			{
				id: 5,
				title: 'My Weather',
				text: 'Show your current temperature',
				link: 'https://aleksvalushko.github.io/my-weather/'
			},
			{
				id: 6,
				title: 'Simple Movie App',
				text: 'It\'s a simple app to search and get info about movies, using TMDB',
				link: 'https://aleksvalushko.github.io/movie-app/'
			}
		]
	},
	slogan: {
		title: 'I\'m available for freelance',
		button:
			'To hire me',
		anchor: '#contacts'
	},
	contacts: {
		title: 'CONTACTS',
		underTitle:
			'Get in touch with me',
		content:
			[
				{ id: 1, title: 'Address:', text: '16/8 Nemanskaya street, Minsk, Belarus' },
				{ id: 2, title: 'E-mail:', text: 'aleks.valushko@yandex.ru' }
			],
		tel:
			{
				title: 'Phone:', number:
					'+375-33-662-48-22'
			},
		button: 'Send'
	},
	footer: {
		author: 'Aleks Valushko',
		copywrite: '© Copyright 2020. All Rights are Reserved.',
		links: [
			{ id: 1, link: 'https://www.linkedin.com/in/aleksvalushko/', image: linkedIn, alt: 'LinkedIn' },
			{ id: 2, link: 'https://twitter.com/joker_aleks', image: twitter, alt: 'Twitter' },
			{ id: 3, link: 'https://www.facebook.com/aleks.valushko.1', image: facebook, alt: 'Facebook' },
			{ id: 4, link: 'https://github.com/aleksvalushko', image: github, alt: 'Github' }
		]
	}
};
const ru = {
	header: [
		{ id: 1, link: 'ГЛАВНАЯ', anchor: '#aboutMe' },
		{ id: 2, link: 'СКИЛЛЫ', anchor: '#skills' },
		{ id: 3, link: 'ПРОЕКТЫ', anchor: '#projects' },
		{ id: 4, link: 'КОНТАКТЫ', anchor: '#contacts' }
	],
	main: {
		name: 'АЛЕКСЕЙ',
		lastName: 'ВАЛУШКО',
		specialize: {
			firstElement: 'Я ',
			secondElement: ['Верстальщик', 'Java Script разработчик', 'Front-End разработчик']
		},
		anchor: '#aboutMe'
	},
	aboutMe: {
		title: 'ОБО МНЕ',
		underTitle: 'Основная информация обо мне',
		descriptionTitle: {
			firstElement: 'Я Алексей Валушко и я ',
			secondElement: ['Верстальщик', 'Java Script разработчик', 'Front-End разработчик']
		},
		descriptionText: {
			firstPart: 'Привет! Меня зовут ',
			secondPart: 'Алексей Валушко.',
			thirdPart: ` Я высококвалифицированный Front-end разработчик с опытом работы более 2 летв области разработки отзывчивых 
			веб-сайтов и приложений, проектированияархитектуры front-end приложений. Уделяю большое внимание деталям ихорошо работаю 
			в команде. Всегда стараюсь совершенствовать свои навыки иизучать новые технологии. Работал как с поддержкой старых проектов 
			идобавлением в них нового функционала, так и с созданием новых проектов.`
		},
		information: {
			blockWithInformation1:
				[
					{
						id: 1,
						title: 'День рождения:',
						text: '14.03.1993'
					},
					{
						id: 2,
						title: 'Город:',
						text: 'Минск, Беларусь'
					},
					{
						id: 3,
						title: 'Образование:',
						text: 'Высшее'
					}
				],
			blockWithInformation2: [
				{
					id: 1,
					title: 'Возраст:',
					text: declOfNum(birthDateToAge('1993-03-14'), ['год', 'года', 'лет'])
				},
				{
					id: 2,
					title: 'Интересы:',
					text: 'Футбол, Хорошее кино'
				},
				{
					id: 3,
					title: 'ВУЗ:',
					text: 'Военная Академия Республики Беларусь'
				}
			]
		},
		buttons: {
			downloadEngCVButton: 'Загрузить резюме (Eng)',
			downloadRusCVButton: 'Загрузить резюме (Rus)',
			sendMessageButton: 'Отправить сообщение'
		},
		anchor: '#contacts'
	},
	skills: {
		title: 'СКИЛЛЫ',
		skillsArray: [
			{ id: 1, title: 'Java Script', alt: 'js', image: js },
			{ id: 2, title: 'React', alt: 'react', image: react },
			{ id: 3, title: 'Redux', alt: 'store', image: redux },
			{ id: 4, title: 'Vue', alt: 'vue', image: vue },
			{ id: 5, title: 'VueX', alt: 'vuex', image: vuex },
			{ id: 6, title: 'HTML 5', alt: 'html5', image: html5 },
			{ id: 7, title: 'SASS', alt: 'sass', image: sass },
			{ id: 8, title: 'TypeScript', alt: 'typescript', image: typescript },
			{ id: 9, title: 'Nuxt', alt: 'nuxt', image: nuxt },
			{ id: 10, title: 'Keycloak', alt: 'keycloak', image: keycloak },
			{ id: 11, title: 'Ant design', alt: 'antd', image: antd },
			{ id: 12, title: 'Vuetify', alt: 'vuetify', image: vuetify },
			{ id: 13, title: 'Material UI', alt: 'material-ui', image: materialUI },
			{ id: 14, title: 'Git', alt: 'git', image: git },
			{ id: 15, title: 'JSON', alt: 'json', image: json },
			{ id: 16, title: 'JIRA', alt: 'jira', image: jira }
		]
	},
	projects: {
		title: 'ПРОЕКТЫ',
		underTitle:
			'Посмотрите мои крайние работы',
		button:
			'Смотреть',
		project: [
			{
				id: 1,
				title: 'TODOLIST',
				text: 'Одностраничное приложение, которое отлично подходит для того, чтобы помочь ' +
					'придерживаться планов, достигать целей и ничего не забывать.',
				link: 'http://aleksvalushko.github.io/todolist'
			},
			{
				id: 2,
				title: 'Social Network',
				text:
					'Еще в разработке...',
				link: 'https://aleksvalushko.github.io/SocialNetwork/'
			},
			{
				id: 3,
				title: 'Rabbit Game',
				text: 'Простая игра на нативном JS',
				link: 'https://aleksvalushko.github.io/rabbitGame/'
			},
			{
				id: 4,
				title: 'Rock, scissors and paper',
				text: 'Простая игра на нативном JS',
				link: 'https://aleksvalushko.github.io/rock-scissors-and-paper/'
			},
			{
				id: 5,
				title: 'My Weather',
				text: 'Показывают температуру в текущем регионе пользователя',
				link: 'https://aleksvalushko.github.io/my-weather/'
			},
			{
				id: 6,
				title: 'Simple Movie App',
				text: 'Простое приложение для поиска и получения информации о фильмах, используя TMDB',
				link: 'https://aleksvalushko.github.io/movie-app/'
			}
		]
	},
	slogan: {
		title: 'Рассматриваю варианты удаленной работы',
		button:
			'Найми меня',
		anchor: '#contacts'
	},
	contacts: {
		title: 'КОНТАКТЫ',
		underTitle:
			'Связаться со мной',
		content:
			[
				{ id: 1, title: 'Адрес:', text: 'г. Минск, ул. Неманская, д. 16, кв. 8' },
				{ id: 2, title: 'E-mail:', text: 'aleks.valushko@yandex.ru' }
			],
		tel:
			{
				title: 'Телефон:', number:
					'+375-33-662-48-22'
			},
		button: 'Отправить'
	},
	footer: {
		author: 'Алексей Валушко',
		copywrite: '© Copyright 2020. All Rights are Reserved.',
		links: [
			{ id: 1, link: 'https://www.linkedin.com/in/aleksvalushko/', image: linkedIn, alt: 'LinkedIn' },
			{ id: 2, link: 'https://twitter.com/joker_aleks', image: twitter, alt: 'Twitter' },
			{ id: 3, link: 'https://www.facebook.com/aleks.valushko.1', image: facebook, alt: 'Facebook' },
			{ id: 4, link: 'https://github.com/aleksvalushko', image: github, alt: 'Github' }
		]
	}
};

const LanguageProvider = ({ children }) => {
	const [currentLanguage, setCurrentLanguage] = useState(EN);
	const dictionaries = { [EN]: en, [RU]: ru };

	const selectedTranslation = useMemo(() => {
		return dictionaries[currentLanguage];
	}, [currentLanguage, dictionaries])

	const languageData = {
		setCurrentLanguage,
		selectedTranslation
	};

	return <LanguageContext.Provider value={ languageData }>{ children }</LanguageContext.Provider>;
};

export default LanguageProvider;
