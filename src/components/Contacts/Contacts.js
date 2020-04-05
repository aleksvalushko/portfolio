import React, {useState} from 'react';
import mod from './Contacts.module.sass';
import Fade from "react-reveal/Fade";

let Contacts = ({contacts}) => {

    let [activeValidation, setActiveValidation] = useState(false);

    let valid = activeValidation ? `${mod.contactsItem} ${mod.validation}` : `${mod.contactsItem}`;


    return (
        <Fade bottom>
            <div className={mod.contacts} id='contacts'>
                <div className={mod.container}>
                    <div className={mod.contactsMainBlock}>
                        <div className={mod.contactsTitle}>
                            {contacts.title}
                            <span>{contacts.underTitle}</span>
                        </div>
                        <div className={mod.contactsContentBlock}>
                            <div className={mod.contactsBlock}>
                                {
                                    contacts.content.map(el => {
                                        return <div className={mod.contactsContentElement} key={el.id}>
                                            <div>{el.title}</div>
                                            <div>{el.text}</div>
                                        </div>
                                    })
                                }
                                <div className={mod.contactsContentElement}>
                                    <div>{contacts.tel.title}</div>
                                    <a href='tel: +375-33-662-48-22'>{contacts.tel.number}</a>
                                </div>
                            </div>
                            <form className={mod.contactsForm} action='https://formspree.io/xknjadwo' method='POST'>
                                <input className={mod.contactsItem} type='text' placeholder='Имя' name='name'
                                       minLength='1' maxLength='40'/>
                                <input className={valid} type='e-mail' placeholder='E-mail' name='e-mail'
                                       required minLength='1' maxLength='30'
                                       onClick={() => {
                                           setActiveValidation(true)
                                       }}
                                       onBlur={() => {
                                           setActiveValidation(false)
                                       }}/>
                                <textarea className={mod.contactsItemTextarea} placeholder='Ваше сообщение' name='text'
                                          minLength='1' maxLength='200'/>
                                <button className={mod.contactsButton}>{contacts.button}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Contacts;
