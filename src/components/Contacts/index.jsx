import React, { useRef, useState } from 'react';
import { ERROR, SUCCESS } from "../../contants";
import FeedbackModal from "../Modals/FeedbackModal";
import styles from './Contacts.module.scss';
import Fade from "react-reveal/Fade";
import emailjs from '@emailjs/browser';

const Contacts = ({ contacts }) => {

	const form = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [messageError, setMessageError] = useState(false);
	const [invalidEmail, setInvalidEmail] = useState(false);
	const [sendingStatus, setSendingStatus] = useState('');

	const handleChangeName = (event) => {
		setName(event.target.value);
		if (event.target.value) {
			setNameError(false);
		} else {
			setNameError(true);
		}
	};

	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
		if (event.target.value) {
			setEmailError(false);
			/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(event.target.value) ? setInvalidEmail(false) : setInvalidEmail(true);
		} else {
			setEmailError(true);
			setInvalidEmail(false);
		}
	};

	const handleChangeMessage = (event) => {
		setMessage(event.target.value);
		if (event.target.value) {
			setMessageError(false);
		} else {
			setMessageError(true);
		}
	};

	const clearFields = () => {
		setName('');
		setEmail('');
		setMessage('');
		setNameError(false);
		setEmailError(false);
		setMessageError(false);
		setInvalidEmail(false);
	}

	const checkValidation = () => {
		!name ? setNameError(true) : setNameError(false);
		!email ? setEmailError(true) : setEmailError(false);
		!message ? setMessageError(true) : setMessageError(false);
	};

	const sendEmail = async (e) => {
		e.preventDefault();

		checkValidation();

		if (!name || !email || !message || invalidEmail) {
			return;
		}
		try {
			const response = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY);
			if (response.status === 200) {
				setSendingStatus(SUCCESS);
				clearFields();
			}
		} catch (error) {
			setSendingStatus(ERROR);
			console.error('Error: ', error);
		} finally {
			setTimeout(() => setSendingStatus(''), 5000);
		}
	};

	return (
		<Fade bottom>
			<div className={ styles.contacts } id='contacts'>
				<div className={ styles.container }>
					<div className={ styles.mainBlock }>
						<div className={ styles.title }>
							{ contacts.title }
							<span>{ contacts.underTitle }</span>
						</div>
						<div className={ styles.contentBlock }>
							<div className={ styles.block }>{ contacts.introduction }</div>
							<form className={ styles.form } ref={ form } onSubmit={ sendEmail }>
								<div className={ styles.nameBlock }>
									<input className={ [styles.item, nameError ? styles.validation : ''].join(' ') } type='text'
									       placeholder={ contacts.nameInputPlaceholder } name='from_name' value={ name }
									       minLength='1' maxLength='40' onChange={ handleChangeName }/>
									{ nameError && <span className={ styles.errorMessage }>{ contacts.validationError }</span> }
								</div>
								<div className={ styles.emailBlock }>
									<input className={ [styles.item, emailError || invalidEmail ? styles.validation : ''].join(' ') }
									       placeholder='E-mail' name='from_email' value={ email }
									       minLength='1' maxLength='30' onChange={ handleChangeEmail }/>
									{ emailError && <span className={ styles.errorMessage }>{ contacts.validationError }</span> }
									{ invalidEmail && <span className={ styles.errorMessage }>{ contacts.invalidEmail }</span> }
								</div>
								<div>
									<textarea className={ [styles.itemTextarea, messageError ? styles.validation : ''].join(' ') }
									          placeholder={ contacts.textareaPlaceholder } name='message' value={ message }
									          minLength='1' maxLength='500' onChange={ handleChangeMessage }/>
									{ messageError && <span className={ styles.errorMessage }>{ contacts.validationError }</span> }
								</div>
								<button className={ styles.sendButton } type='submit'>{ contacts.sendButton }</button>
							</form>
						</div>
					</div>
				</div>
				<FeedbackModal icon={ contacts.success.icon } message={ contacts.success.text }
				               show={ sendingStatus === SUCCESS }/>
				<FeedbackModal icon={ contacts.error.icon } message={ contacts.error.text } show={ sendingStatus === ERROR }/>
			</div>
		</Fade>
	);
};

export default Contacts;
