import React        from 'react';
import IconGrid     from '../../molecules/IconGrid';
import HomeCollage  from '../../molecules/HomeCollage';
import SquiggleLine from '../../atoms/SquiggleLine';
import Menu         from '../../molecules/Menu';
import LogoMarkSVG  from '../../atoms/LogoMarkSVG';

const HomeHeader = () => (
	<header className="c-home-header">
		<LogoMarkSVG cssClass="c-home-header__logo" />
		<HomeCollage />
		<SquiggleLine />
		<aside className="c-home-header__content">
			<h1>
				a<span className="fade">ndculture</span>
				<br />
				design
				<br />
				company
			</h1>
			<label className="c-home-header__scroll">Take a stroll, then scroll</label>
			<Menu />
		</aside>
		<IconGrid />
	</header>
);

export default HomeHeader;
