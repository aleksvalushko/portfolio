import React from 'react';
import styles from './FeedbackModal.module.scss';

const FeedbackModal = ({ message, icon, show }) => {
	return (
		<div className={[styles.feedbackModal, show ? styles.show : ''].join(' ') }>
			<div>{message}</div>
			<img src={icon} alt="status"/>
		</div>
	);
};

export default FeedbackModal;
