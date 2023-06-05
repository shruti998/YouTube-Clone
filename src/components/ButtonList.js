import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex">
     <Button name="All"/>
     <Button name="Gaming"/>
     <Button name="Songs"/>
     <Button name="Movie"/>
     <Button name="Live"/>
     <Button name="News"/>
     <Button name="Cooking"/>
    </div>
  )
}

export default ButtonList
