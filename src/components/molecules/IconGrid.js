import React from 'react'
import Icon  from '../atoms/Icon';
import Menu  from './Menu';

const IconGrid = () => (
  <div className="c-icon-grid">
    <IconGridColumn>
      <IconLink name="empty" />
      <IconLink name="empty" />
      <IconLink name="circle" />
      <IconLink name="plus" />
      <IconLink name="empty" />
      <IconLink name="empty" />
      <IconLink name="empty" />
      <IconLink name="triangle" />
      <IconLink name="empty" />
      <IconLink name="empty" />
      <IconLink name="empty" />
    </IconGridColumn>
    <IconGridColumn>
      <IconLink name="bolt" />
      <IconLink name="plus" />
      <IconLink name="square-washer" />
      <IconLink name="circle" />
      <IconLink name="bolt" />
      <IconLink name="empty" />
      <IconLink name="bolt" />
      <IconLink name="circle" />
      <IconLink name="empty" />
      <IconLink name="empty" />
      <IconLink name="empty" />
    </IconGridColumn>
    <IconGridColumn>
      <IconLink name="triangle" />
      <IconSelection 
        name  = "eye"
        type  = "about"
        label = "About Us" />
      <IconLink name="raindrop-full" />
      <IconLink name="x" />
      <IconSelection 
        name  = "triangle"
        type  = "blog"
        label = "The Blog" />
      <IconLink name="square-play" />
      <IconLink name="circle-full" />
      <IconLink name="x" />
      <IconLink name="triangle" />
      <IconLink name="empty" />
      <IconLink name="plus" />
    </IconGridColumn>
    <IconGridColumn>
      <IconLink name="circle-full" />
      <IconLink name="circle" />
      <IconLink name="bolt" />
      <IconLink name="raindrop-full" />
      <IconLink name="circle-full" />
      <IconLink name="x" />
      <IconLink name="square-washer" />
      <IconLink name="raindrop-full" />
      <IconLink name="circle-full" />
      <IconLink name="empty" />
      <IconLink name="empty" />
    </IconGridColumn>
    <IconGridColumn>
      <IconLink name="square-washer" />
      <IconLink name="plus" />
      <IconLink name="raindrop" />
      <IconLink name="plus" />
      <IconLink name="square-play" />
      <IconLink name="circle" />
      <IconSelection 
        name  = "go-sign"
        type  = "team"
        label = "The Team" />
      <IconLink name="triangle" />
      <IconLink name="square-play" />
      <IconLink name="raindrop" />
      <IconLink name="empty" />
    </IconGridColumn>
    <IconGridColumn>
      <IconLink name="eye" />
      <IconLink name="x" />
      <IconLink name="circle-full" />
      <IconSelection 
        name  = "square-washer work"
        type  = "work"
        label = "The Work" />
      <IconLink name="eye" />
      <IconLink name="square-washer" />
      <IconLink name="eye" />
      <IconLink name="square-play" />
      <IconLink name="eye" />
      <IconLink name="empty" />
      <IconLink name="square-play" />
    </IconGridColumn>
    <IconGridColumn>
      <Menu />
      <IconLink name="empty" />
      <IconLink name="square-play" />
      <IconLink name="plus" />
      <IconLink name="raindrop" />
      <IconLink name="circle" />
      <IconLink name="go-sign" />
      <IconLink name="circle" />
      <IconLink name="raindrop" />
      <IconLink name="go-sign" />
      <IconLink name="circle" />
      <IconLink name="empty" />
    </IconGridColumn>
  </div>
)

const IconGridColumn = ({children}) => (
  <div className="c-icon-grid__column">
    {children}
  </div>
);

const IconLink = ({name}) => (
  <a href="#" className="c-icon-grid__link">
    <Icon name={name} />
  </a>
);

const IconSelection = ({name, type, label}) => (
  <a href="#" title={label} className={`c-icon-grid__selection ${type}`}>
    <Icon name={name} />
    <label className="c-icon-grid__selection__label">{label}</label>
  </a>
)

export default IconGrid
