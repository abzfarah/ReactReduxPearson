import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import  '../../styles/index.styl'

export const CoreLayout = ({ children }) => (
  <div id="header">
    <Header />

      {children}

  </div>
)


export default CoreLayout
