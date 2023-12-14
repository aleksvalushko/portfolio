import React from 'react';
import styles from './AboutMe.module.scss';
import TypedReact from "../Typed/Typed";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

let AboutMe = ({ aboutMe, currentLanguage }) => {

	let text = aboutMe.descriptionTitle.secondElement;

	return (
		<Fade bottom>
			<div className={ styles.aboutMe } id='aboutMe'>
				<div className={ styles.container }>
					<div className={ styles.title }>
						{ aboutMe.title }
						<span>{ aboutMe.underTitle }</span>
					</div>
					<div className={ styles.descriptionBlock }>
						<div className={ styles.description }>
							<h4 className={ styles.descriptionTitle }>
								{ aboutMe.descriptionTitle.firstElement }
								<span><TypedReact strings={ [text[0], text[1], text[2]] }/>.</span>
							</h4>
							<p className={ styles.descriptionText }>
								{ aboutMe.descriptionText.firstPart }
								<span>{ aboutMe.descriptionText.secondPart }</span>
								{ aboutMe.descriptionText.thirdPart }
							</p>
							<div className={ styles.information }>
								<div className={ styles.informationBlocks }>
									<div className={ styles.informationBlock }>
										{ aboutMe.information.blockWithInformation1.map(el => {
												return <div key={ el.id } className={ styles.blockWithInformation }>
													<div>{ el.title }</div>
													<div>{ el.text }</div>
												</div>
											}
										) }
									</div>
									<div className={ styles.informationBlock }>
										{ aboutMe.information.blockWithInformation2.map(el => {
												return <div key={ el.id } className={ styles.blockWithInformation }>
													<div>{ el.title }</div>
													<div>{ el.text }</div>
												</div>
											}
										) }
									</div>
								</div>
								<div className={ styles.buttons }>
									<button className={ styles.downloadCVButton }>
										{ currentLanguage ? <Link to="./CV_01_12_2023_Eng.pdf" target='_blank'
										                          download>{ aboutMe.buttons.downloadCVButton }</Link> :
											<Link to="./CV_01_12_2023_Rus.pdf" target='_blank'
											      download>{ aboutMe.buttons.downloadCVButton }</Link> }
									</button>
									<button className={ styles.sendMessageButton }>
										<a href={ aboutMe.anchor }>{ aboutMe.buttons.sendMessageButton }</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default AboutMe;
