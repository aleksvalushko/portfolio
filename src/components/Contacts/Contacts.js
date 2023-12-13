import React, {useState} from 'react';
import styles from './Contacts.module.scss';
import Fade from "react-reveal/Fade";

let Contacts = ({contacts}) => {

    let [activeValidation, setActiveValidation] = useState(false);

    let valid = activeValidation ? `${styles.contactsItem} ${styles.validation}` : `${styles.contactsItem}`;


    return (
        <Fade bottom>
            <div className={styles.contacts} id='contacts'>
                <div className={styles.container}>
                    <div className={styles.contactsMainBlock}>
                        <div className={styles.contactsTitle}>
                            {contacts.title}
                            <span>{contacts.underTitle}</span>
                        </div>
                        <div className={styles.contactsContentBlock}>
                            <div className={styles.contactsBlock}>
                                {
                                    contacts.content.map(el => {
                                        return <div className={styles.contactsContentElement} key={el.id}>
                                            <div>{el.title}</div>
                                            <div>{el.text}</div>
                                        </div>
                                    })
                                }
                                <div className={styles.contactsContentElement}>
                                    <div>{contacts.tel.title}</div>
                                    <a href='tel: +375-33-662-48-22'>{contacts.tel.number}</a>
                                </div>
                            </div>
                            <form className={styles.contactsForm} action='https://formspree.io/xknjadwo' method='POST'>
                                <input className={styles.contactsItem} type='text' placeholder='Имя' name='name'
                                       minLength='1' maxLength='40'/>
                                <input className={valid} type='e-mail' placeholder='E-mail' name='e-mail'
                                       required minLength='1' maxLength='30'
                                       onClick={() => {
                                           setActiveValidation(true)
                                       }}
                                       onBlur={() => {
                                           setActiveValidation(false)
                                       }}/>
                                <textarea className={styles.contactsItemTextarea} placeholder='Ваше сообщение' name='text'
                                          minLength='1' maxLength='200'/>
                                <button className={styles.contactsButton}>{contacts.button}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Contacts;
