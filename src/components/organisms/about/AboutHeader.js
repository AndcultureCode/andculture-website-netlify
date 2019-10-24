import React             from "react";
import AfterHoursSquare  from "../../../img/about-after-hours_square-grid@2x.png";
import TealTeaAngleBrush from "../../../img/about-teal-tea-angles_brush@2x.png";
import VioletBirds       from "../../../img/about-violet blue_bird-flock@2x.png";

const AboutHeader = () => (
	<div className = "c-about-header">
		<img
			src       = { TealTeaAngleBrush }
			alt       = "Teal Tea Angle Brush"
			className = "c-about-header__teabrush"
		/>
		<img
			src       = { AfterHoursSquare }
			alt       = "After Hours Square Grid"
			className = "c-about-header__squaregrid"
		/>
		<img
			src       = { VioletBirds }
			alt       = "Violet Birds Flock"
			className = "c-about-header__birds"
		/>
		<div className = "c-about-header__content">
			<div className = "c-about-header__content__title">
				<h1>we're friends, so call us andculture.</h1>
			</div>
		</div>
	</div>
);

export default AboutHeader;