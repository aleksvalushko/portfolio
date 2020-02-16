import React from 'react';
import mod from './Contacts.module.sass';
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../Forms/FormsControl";
import Fade from "react-reveal/Fade";

let Contacts = ({contacts}) => {
    return (
        <div className={mod.contacts} id='contacts'>
            <Fade bottom>
                <div className={mod.container}>
                    <div className={mod.contactsMainBlock}>
                        <div className={mod.contactsTitle}>
                            {contacts.title}
                            <span>{contacts.underTitle}</span>
                        </div>
                        <div className={mod.contactsContentBlock}>
                            <div className={mod.contactsBlock}>
                                {
                                    contacts.content.map( el => {
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
                                <input className={mod.contactsItem} type='text' placeholder='Имя' name='name'/>
                                <input className={mod.contactsItem} type='e-mail' placeholder='E-mail' name='e-mail'/>
                                <textarea className={mod.contactsItemTextarea} placeholder='Ваше сообщение' name='text'/>
                                <button className={mod.contactsButton}>{contacts.button}</button>

                            </form>
                            {/*<ContactReduxForm/>*/}
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

const ContactForm = ({handleSubmit}) => {
    debugger
    return (
        <form onSubmit={handleSubmit}>
            <Field name='name' component={Input} placeholder='Имя' className={mod.contactsItem}/>
            <Field name='e-mail' component={Input} placeholder='e-mail' className={mod.contactsItem}/>
            <Field name='message' component={Textarea} placeholder='...your message'
                   className={mod.contactsItemTextarea}/>
            <div className={mod.contactsButton}>
                <button>Send</button>
            </div>
        </form>
)
};

const ContactReduxForm = reduxForm({
    form: 'contactForm'
})(ContactForm);

export default Contacts;
