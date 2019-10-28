import PropTypes  from 'prop-types'
import React      from 'react'
import Icon       from '../atoms/Icon';
import Menu       from './Menu';
import { Link }   from 'react-scroll';
import RubberBand from 'react-reveal/RubberBand';

const IconGrid = ({onHover}) => (
  <div className="c-icon-grid">
    <IconGridColumn>
      <IconBlock name="bolt" />
      <IconBlock name="plus" />
      <IconBlock name="square-washer" />
      <IconBlock name="circle" />
      <IconBlock name="bolt" />
      <IconBlock name="empty" />
      <IconBlock name="bolt" />
      <IconBlock name="circle" />
      <IconBlock name="empty" />
      <IconBlock name="empty" />
      <IconBlock name="empty" />
      <RubberBand><p className="c-icon-grid__easteregg"><span>*</span>psst...new site coming soon</p></RubberBand>
    </IconGridColumn>
    <IconGridColumn>
      <IconBlock name="triangle" />
      <IconSelection
        name    = "eye"
        type    = "about"
        label   = "About Us"
        onHover = {onHover} />
      <IconBlock name="raindrop-full" />
      <IconBlock name="x" />
      {/* <IconSelection
        name    = "triangle"
        type    = "blog"
        label   = "The Blog"
        onHover = {onHover} /> */}
      <IconBlock name="triangle" />
      <IconBlock name="square-play" />
      <IconBlock name="circle-full" />
      <IconBlock name="x" />
      <IconBlock name="triangle" />
      <IconBlock name="empty" />
      <IconBlock name="plus" />
    </IconGridColumn>
    <IconGridColumn>
      <IconBlock name="circle-full" />
      <IconBlock name="circle" />
      <IconBlock name="bolt" />
      <IconBlock name="raindrop-full" />
      <IconBlock name="circle-full" />
      <IconBlock name="x" />
      <IconBlock name="square-washer" />
      <IconBlock name="raindrop-full" />
      <IconBlock name="circle-full" />
      <IconBlock name="empty" />
      <IconBlock name="empty" />
    </IconGridColumn>
    <IconGridColumn>
      <IconBlock name="square-washer" />
      <IconBlock name="plus" />
      <IconBlock name="raindrop" />
      <IconBlock name="plus" />
      <IconBlock name="square-play" />
      <IconBlock name="circle" />
      <IconSelection
        name    = "go-sign"
        type    = "contact"
        label   = "Contact"
        onHover = {onHover} />
      <IconBlock name="triangle" />
      <IconBlock name="square-play" />
      <IconBlock name="raindrop" />
      <IconBlock name="empty" />
    </IconGridColumn>
    <IconGridColumn>
      <IconBlock name="eye" />
      <IconBlock name="x" />
      <IconBlock name="circle-full" />
      <IconSelection
        name    = "square-washer work"
        type    = "work"
        label   = "Clients"
        onHover = {onHover} />
      <IconBlock name="eye" />
      <IconBlock name="square-washer" />
      <IconBlock name="eye" />
      <IconBlock name="square-play" />
      <IconBlock name="eye" />
      <IconBlock name="empty" />
      <IconBlock name="square-play" />
    </IconGridColumn>
    <IconGridColumn>
      {/* <Menu /> */}
      <IconBlock name="empty" />
      <IconBlock name="square-play" />
      <IconBlock name="plus" />
      <IconBlock name="raindrop" />
      <IconBlock name="circle" />
      <IconBlock name="go-sign" />
      <IconBlock name="circle" />
      <IconBlock name="raindrop" />
      <IconBlock name="go-sign" />
      <IconBlock name="circle" />
      <IconBlock name="empty" />
    </IconGridColumn>
  </div>
)

const IconGridColumn = ({children}) => (
  <div className="c-icon-grid__column">
    {children}
  </div>
);

const IconBlock = ({name}) => (
  <div className="c-icon-grid__block">
    <Icon name={name} />
  </div>
);

const IconLink = ({name}) => (
  <a href="#" className="c-icon-grid__link">
    <Icon name={name} />
  </a>
);

const IconSelection = ({name, type, label, onHover}) => (
  <Link href={`#${type}`} title={label} className={`c-icon-grid__selection ${type}`} onMouseEnter={(e) => onHover(e, type)} onMouseLeave={(e) => onHover(e, type)} to={type} smooth={true} duration={750}>
    <Icon name={name} />
    <label className="c-icon-grid__selection__label">{label}</label>
  </Link>
)

IconGrid.propTypes = {
  onHover: PropTypes.func,
}

export default IconGrid
