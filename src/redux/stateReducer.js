import aboutMePhoto from '../images/aboutMe.jpg';
import firstNewsImage from '../images/news_banner2.jpg';
import secondNewsImage from '../images/news_banner2.jpg';
import thirdNewsImage from '../images/news_banner2.jpg';

let stateReducer = {
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
                firstPar: 'Привет! Меня зовут ',
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
            title: 'Мои скиллы'
        },
        projects: {
            title: 'МОИ ПРОЕКТЫ',
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
        }
        ,
        /*news: {
            title: 'ПОСЛЕДНИЕ НОВОСТИ',
            underTitle:
                'Последние Новости сферы IT',
            newsArray: [
                {
                    id: 1,
                    title: 'Первая новость',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                        '                        Adipisci amet aperiam beatae debitis dolor ducimus ea error harum, hic laborum nulla odio\n' +
                        '                        perspiciatis quidem tenetur, velit. Accusamus animi debitis eligendi, est explicabo hic illo\n' +
                        '                        laborum maxime molestiae molestias natus nisi nostrum officiis provident rem sint voluptates\n' +
                        '                        voluptatibus. Esse, reprehenderit voluptate.' +
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                        '                        Adipisci amet aperiam beatae debitis dolor ducimus ea error harum, hic laborum nulla odio\n' +
                        '                        perspiciatis quidem tenetur, velit. Accusamus animi debitis eligendi, est explicabo hic illo\n' +
                        '                        laborum maxime molestiae molestias natus nisi nostrum officiis provident rem sint voluptates\n' +
                        '                        voluptatibus. Esse, reprehenderit voluptate.',
                    button:
                        'Читать больше',
                    image: firstNewsImage
                },
                {
                    id: 2,
                    title: 'Вторая новость',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                        '                        Adipisci amet aperiam beatae debitis dolor ducimus ea error harum, hic laborum nulla odio\n' +
                        '                        perspiciatis quidem tenetur, velit. Accusamus animi debitis eligendi, est explicabo hic illo\n' +
                        '                        laborum maxime molestiae molestias natus nisi nostrum officiis provident rem sint voluptates\n' +
                        '                        voluptatibus. Esse, reprehenderit voluptate.' +
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                        '                        Adipisci amet aperiam beatae debitis dolor ducimus ea error harum, hic laborum nulla odio\n' +
                        '                        perspiciatis quidem tenetur, velit. Accusamus animi debitis eligendi, est explicabo hic illo\n' +
                        '                        laborum maxime molestiae molestias natus nisi nostrum officiis provident rem sint voluptates\n' +
                        '                        voluptatibus. Esse, reprehenderit voluptate.',
                    button:
                        'Читать больше',
                    image: secondNewsImage
                },
                {
                    id: 3,
                    title: 'Третья новость',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                        '                        Adipisci amet aperiam beatae debitis dolor ducimus ea error harum, hic laborum nulla odio\n' +
                        '                        perspiciatis quidem tenetur, velit. Accusamus animi debitis eligendi, est explicabo hic illo\n' +
                        '                        laborum maxime molestiae molestias natus nisi nostrum officiis provident rem sint voluptates\n' +
                        '                        voluptatibus. Esse, reprehenderit voluptate.' +
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                        '                        Adipisci amet aperiam beatae debitis dolor ducimus ea error harum, hic laborum nulla odio\n' +
                        '                        perspiciatis quidem tenetur, velit. Accusamus animi debitis eligendi, est explicabo hic illo\n' +
                        '                        laborum maxime molestiae molestias natus nisi nostrum officiis provident rem sint voluptates\n' +
                        '                        voluptatibus. Esse, reprehenderit voluptate.',
                    button:
                        'Читать больше',
                    image: thirdNewsImage
                }
            ]
        },*/
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
                }
        }
    }
;

export default stateReducer;