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
                secondElement: ['front-end разработчик', 'Java Script разработчик', 'Верстальщик']
            }
        },
        aboutMe: {
            title: 'ОБО МНЕ',
            underTitle: 'Основная информация обо мне',
            photo: aboutMePhoto,
            descriptionTitle: {
                firstElement: 'Я Алексей Валушко и я ',
                secondElement: 'front-end разработчик'
            },
            descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquid\n' +
                '                            aperiam\n' +
                '                            architecto assumenda aut consequatur cum distinctio dolor dolore eaque eveniet facere id\n' +
                '                            ipsa, iure\n' +
                '                            magni maxime nam nostrum optio quaerat quia quidem, ratione recusandae repudiandae sapiente\n' +
                '                            temporibus\n' +
                '                            vel vitae voluptatem voluptates. Alias corporis cum minima omnis praesentium!',
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
                        },
                        {
                            id: 4,
                            title: 'ВУЗ:'
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
                        title: 'Почта:'
                    },
                    {
                        id: 4,
                        title: 'Веб-сайт:'
                    },
                    {
                        id: 5,
                        title: 'Телефон:'
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
                            text: 'Минск, Буларусь'
                        },
                        {
                            id: 3,
                            text: 'Высшее'
                        },
                        {
                            id: 4,
                            text: 'Военная Академия Республики Беларусь'
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
                        id: 7,
                        text: 'aleks.valushko@yandex.ru'
                    },
                    {
                        id: 4,
                        text: 'www.mywebsite.com'
                    },
                    {
                        id: 5,
                        text: '+375-33-662-48-22'
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
            title: 'Мои скиллы',
            descriptionText:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '            Autem beatae, cupiditate deserunt eum illo in ipsum iure labore perferendis placeat quaerat, quibusdam\n' +
                '            ullam vel velit voluptate. Architecto dolor magnam nam necessitatibus officia omnis recusandae, vel!',
            level:
                [{
                    id: 1,
                    title: 'HTML',
                    experience: ' - n лет опыта',
                    percent: '90%'
                },
                    {
                        id: 2,
                        title: 'CSS',
                        experience: ' - n лет опыта',
                        percent: '80%'
                    },
                    {
                        id: 3,
                        title: 'JS',
                        experience: ' - n года опыта',
                        percent: '50%'
                    },
                    {
                        id: 4,
                        title: 'React JS',
                        experience: ' - 1/2 года опыта',
                        percent: '55%'
                    }
                ]
        }
        ,
        projects: {
            title: 'МОИ ПРОЕКТЫ',
            underTitle:
                'Посмотрите мои крайние работы',
            button:
                'Смотреть',
            projectOne:
                'Todolist',
            projectTwo:
                'Social Network'

        }
        ,
        slogan: {
            title: 'Рассматриваю варианты удаленной работы',
            button:
                'Найми меня'
        }
        ,
        news: {
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
        },
        contacts: {
            title: 'КОНТАКТЫ',
            underTitle:
                'Связаться со мной',
            content:
                [
                    {id: 1, title: 'Адрес:', text: 'г. Минск, ул. Неманская, д. 16, кв. 8'},
                    {id: 2, title: 'E-mail:', text: 'aleks.valushko@yandex.ru'},
                    {id: 3, title: 'Телефон:', text: '+375-33-662-48-22'},
                    {id: 4, title: 'Веб-сайт:', text: 'mywebsite.com'}
                ]
        }
    }
;

export default stateReducer;