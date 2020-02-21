import aboutMePhoto from '../images/aboutMe.jpg';

let stateReducer = {
        ru: {
            header: {
                link1: 'ГЛАВНАЯ',
                link2: 'СКИЛЛЫ',
                link3: 'ПРОЕКТЫ',
                link4: 'КОНТАКТЫ'
            },
            main: {
                name: 'АЛЕКСЕЙ',
                lastName: 'ВАЛУШКО',
                specialize: {
                    firstElement: 'Я',
                    secondElement: ['Верстальщик', 'Java Script разработчик', 'Front-End разработчик']
                }
            },
            aboutMe: {
                title: 'ОБО МНЕ',
                underTitle: 'Основная информация обо мне',
                photo: aboutMePhoto,
                descriptionTitle: {
                    firstElement: 'Я Алексей Валушко и я ',
                    secondElement: ['Верстальщик', 'Java Script разработчик', 'Front-End разработчик']
                },
                descriptionText: {
                    firstPart: 'Привет! Меня зовут ',
                    secondPart: 'Алексей Валушко.',
                    thirdPart: ' Я Front-End разработчик и я очень увлечен и предан своей работе. ' +
                        'Имея небольшой опыт работы в качестве верстальщика, Java Script и Front-End разработчика, ' +
                        'я приобрел навыки и знания, необходимые для успеха вашего проекта. Мне нравится ' +
                        'каждый шаг процесса проектирования, от обсуждения и совместной работы до ' +
                        'концепции и исполнения, но больше всего мне нравится видеть готовый продукт в действии.'
                },
                information: {
                    informationTitle1:
                        [
                            {
                                id: 1,
                                title: 'День рождения:'
                            },
                            {
                                id: 2,
                                title: 'Город:'
                            },
                            {
                                id: 3,
                                title: 'Образование:'
                            }
                        ],
                    informationTitle2: [
                        {
                            id: 1,
                            title: 'Возраст:'
                        },
                        {
                            id: 2,
                            title: 'Интересы:'
                        },
                        {
                            id: 3,
                            title: 'ВУЗ:'
                        }
                    ],
                    informationText1:
                        [
                            {
                                id: 1,
                                text: '14.03.1993'
                            },
                            {
                                id: 2,
                                text: 'Минск, Беларусь'
                            },
                            {
                                id: 3,
                                text: 'Высшее'
                            }
                        ],
                    informationText2: [
                        {
                            id: 1,
                            text: '26 лет'
                        },
                        {
                            id: 2,
                            text: 'Футбол, Хорошее кино'
                        },
                        {
                            id: 3,
                            text: 'Военная Академия Республики Беларусь'
                        }
                    ]
                },
                buttons: {
                    first: 'Загрузить резюме',
                    second:
                        'Отправить сообщение'
                }
            },
            skills: {
                title: 'СКИЛЛЫ'
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
                            'придерживаться планов, достигать целей и ничего не забывать.'
                    },
                    {
                        id: 2,
                        title: 'Social Network',
                        text:
                            'Еще в разработке...'
                    }
                ]
            },
            slogan: {
                title: 'Рассматриваю варианты удаленной работы',
                button:
                    'Найми меня'
            },
            contacts: {
                title: 'КОНТАКТЫ',
                underTitle:
                    'Связаться со мной',
                content:
                    [
                        {id: 1, title: 'Адрес:', text: 'г. Минск, ул. Неманская, д. 16, кв. 8'},
                        {id: 2, title: 'E-mail:', text: 'aleks.valushko@yandex.ru'},
                        {id: 3, title: 'Веб-сайт:', text: 'mywebsite.com'}
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
                copywrite: '© Copyright 2020. All Rights are Reserved.'
            }
        },
        en: {
            header: {
                link1: 'MAIN',
                link2: 'SKILLS',
                link3: 'PROJECTS',
                link4: 'CONTACTS'
            },
            main: {
                name: 'ALEKS',
                lastName: 'VALUSHKO',
                specialize: {
                    firstElement: `I'm a `,
                    secondElement: ['Make up man', 'Java Script developer', 'Front-End developer']
                }
            },
            aboutMe: {
                title: 'ABOUT ME',
                underTitle: 'Main information about me',
                photo: aboutMePhoto,
                descriptionTitle: {
                    firstElement: `I'm Aleks Valushko and I'm a `,
                    secondElement: ['Make up man', 'Java Script developer', 'Front-End developer']
                },
                descriptionText: {
                    firstPart: 'Hi! My name is ',
                    secondPart: 'Aleks Valushko.',
                    thirdPart: ' I am a Front-End Developer, and I\'m very passionate and ' +
                        'dedicated to my work. With little experience as a make up man, java script and front-end ' +
                        'developer, I have acquired the skills and knowledge necessary to make your project a success. ' +
                        'I enjoy every step of the design process, from discussion and collaboration to concept and ' +
                        'execution, but I find the most satisfaction in seeing the finished product in action.'
                },
                information: {
                    informationTitle1:
                        [
                            {
                                id: 1,
                                title: 'Birthday:'
                            },
                            {
                                id: 2,
                                title: 'City:'
                            },
                            {
                                id: 3,
                                title: 'Degree:'
                            }
                        ],
                    informationTitle2: [
                        {
                            id: 1,
                            title: 'Age:'
                        },
                        {
                            id: 2,
                            title: 'Interests:'
                        },
                        {
                            id: 3,
                            title: 'Study:'
                        }
                    ],
                    informationText1:
                        [
                            {
                                id: 1,
                                text: '14.03.1993'
                            },
                            {
                                id: 2,
                                text: 'Minsk, Belarus'
                            },
                            {
                                id: 3,
                                text: 'Higher'
                            }
                        ],
                    informationText2: [
                        {
                            id: 1,
                            text: '26 years'
                        },
                        {
                            id: 2,
                            text: 'Football, Good films'
                        },
                        {
                            id: 3,
                            text: 'Military Academy'
                        }
                    ]
                },
                buttons: {
                    first: 'Download CV',
                    second:
                        'Send Message'
                }
            },
            skills: {
                title: 'SKILLS'
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
                        text: 'A SPA that\'s great for helping stick to plans, achieve goals and remember nothing.'
                    },
                    {
                        id: 2,
                        title: 'Social Network',
                        text:
                            'In progress...'
                    }
                ]
            },
            slogan: {
                title: 'I\'m available for freelance' ,
                button:
                    'To hire me'
            },
            contacts: {
                title: 'CONTACTS',
                underTitle:
                    'Get in touch with me',
                content:
                    [
                        {id: 1, title: 'Address:', text: '16/8 Nemanskaya street, Minsk, Belarus'},
                        {id: 2, title: 'E-mail:', text: 'aleks.valushko@yandex.ru'},
                        {id: 3, title: 'Website:', text: 'mywebsite.com'}
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
                copywrite: '© Copyright 2020. All Rights are Reserved.'
            }
        }
    }
;

export default stateReducer;