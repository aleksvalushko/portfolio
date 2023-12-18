import React from 'react';
import styles from './Footer.module.scss';
import Fade from "react-reveal/Fade";

const Footer = ({ footer }) => {
	return (
		<div className={ styles.footer }>
			<Fade bottom>
				<div className={ styles.container }>
					<div>{ footer.author }</div>
					<div className={ styles.footerMainBlock }>
						{ footer.links.map(item => {
							return <div key={ item.id } className={ styles.footerItem }>
								<a href={ item.link } target='_blank' rel="noopener noreferrer">
									<img src={ item.image } alt={ item.alt }/>
								</a>
							</div>
						}) }
					</div>
					<div className={ styles.footerCopyright }>{ footer.copyright }</div>
					{/*<a href='#main' className={styles.anchor}><img src={arrowUp} alt="arrow"/></a>*/}
				</div>
			</Fade>
		</div>
	);
};

export default Footer;