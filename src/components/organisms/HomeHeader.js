import React    from 'react'
import IconGrid from '../molecules/IconGrid';

const HomeHeader = () => (
  <header className="c-home-header">
    <aside className="c-home-header__content">
      <h1>a<span className="fade">ndculture</span><br />
      design<br />
      company</h1>
      <label className="c-home-header__scroll">Take a stroll, then scroll</label>
    </aside>
    <IconGrid />
  </header>
);

export default HomeHeader
