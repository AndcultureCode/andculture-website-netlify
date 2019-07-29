import React from 'react'
import Icon from '../atoms/Icon';

const IconGrid = () => (
  <div className="c-icon-grid">
    <IconGridRow>
      <Icon name="bolt" />
      <Icon name="triangle" />
      <Icon name="circle-full" />
      <Icon name="square-washer" />
      <Icon name="eye" />
    </IconGridRow>
    <IconGridRow>
      <Icon name="plus" />
      <IconSelection 
        name  = "eye"
        type  = "about"
        label = "About Us" />
      <Icon name="circle" />
      <Icon name="plus" />
      <Icon name="x" />
      <Icon name="square-washer" />
    </IconGridRow>
    <IconGridRow>
      <Icon name="circle" />
      <Icon name="square-washer" />
      <Icon name="raindrop-full" />
      <Icon name="bolt" />
      <Icon name="raindrop" />
      <Icon name="circle-full" />
      <Icon name="plus" />
    </IconGridRow>
    <IconGridRow>
      <Icon name="plus" />
      <Icon name="circle" />
      <Icon name="x" />
      <Icon name="raindrop-full" />
      <Icon name="plus" />
      <IconSelection 
        name  = "square-washer work"
        type  = "work"
        label = "The Work" />
      <Icon name="raindrop" />
    </IconGridRow>
    <IconGridRow>
      <Icon name="bolt" />
      <IconSelection 
        name  = "triangle"
        type  = "blog"
        label = "The Blog" />
      <Icon name="circle-full" />
      <Icon name="square-play" />
      <Icon name="eye" />
      <Icon name="circle" />
    </IconGridRow>
    <IconGridRow>
      <Icon name="square-play" />
      <Icon name="x" />
      <Icon name="circle" />
      <Icon name="square-washer" />
      <Icon name="go-sign" />
    </IconGridRow>
    <IconGridRow>
      <Icon name="bolt" />
      <Icon name="circle-full" />
      <Icon name="square-washer" />
      <IconSelection 
        name  = "go-sign"
        type  = "team"
        label = "The Team" />
      <Icon name="eye" />
      <Icon name="circle" />
    </IconGridRow>
    <IconGridRow>
      <Icon name="triangle" />
      <Icon name="circle" />
      <Icon name="x" />
      <Icon name="raindrop-full" />
      <Icon name="triangle" />
      <Icon name="square-play" />
      <Icon name="raindrop" />
    </IconGridRow>
    <IconGridRow>
      <Icon name="triangle" />
      <Icon name="circle-full" />
      <Icon name="square-play" />
      <Icon name="eye" />
      <Icon name="go-sign" />
    </IconGridRow>
  </div>
)

const IconGridRow = ({children}) => (
  <div className="c-icon-grid__row">
    {children}
  </div>
);

const IconSelection = ({name, type, label}) => (
  <div className={`c-icon-grid__selection ${type}`}>
    <Icon name={name} />
    <label className="c-icon-grid__selection__label">{label}</label>
  </div>
)

export default IconGrid
