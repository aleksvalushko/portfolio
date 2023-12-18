import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = ({ header, setCurrentLanguage }) => {

	let [activeMode, setActiveMode] = useState(false);

	let activeButton = activeMode ? `${ styles.toggle } ${ styles.toggleLines } ${ styles.active }` : `${ styles.toggle } ${ styles.toggleLines }`;

	let showHideBurgerMenu = () => {
		activeMode
			? document.querySelector('#menu').style.display = 'none'
			: document.querySelector('#menu').style.display = 'flex';
	};

	return (
		<div className={ styles.header }>
			<div className={ styles.container }>
				<div className={ styles.languageBlock }>
					<button onClick={ () => setCurrentLanguage('ru') }>ru</button>
					<button onClick={ () => setCurrentLanguage('en') }>en</button>
				</div>
				<div className={ styles.nav }>
					{ header.map(item => {
						return <a key={ item.id } href={ item.anchor } className={ styles.link }>{ item.link }</a>
					}) }
				</div>
				<button className={ activeButton } onClick={ () => {
					setActiveMode(!activeMode);
					showHideBurgerMenu()
				} }><span></span></button>
				<div className={ styles.burgerMenu } id='menu'>
					<div className={ styles.burgerMenuBlocks }>
						<div className={ styles.burgerMenuItem }>
							{ header.map(item => {
								return <a key={ item.id } href={ item.anchor } className={ styles.link } onClick={ () => {
									setActiveMode(!activeMode);
									showHideBurgerMenu()
								} }>{ item.link }</a>
							}) }
						</div>
						<div className={ styles.burgerLanguageBlock }>
							<button onClick={ () => setCurrentLanguage('ru') }>ru</button>
							<button onClick={ () => setCurrentLanguage('en') }>en</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
