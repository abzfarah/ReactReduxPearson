import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import  '../../styles/index.styl'

export const CoreLayout = ({ children }) => (
  <div >
    <Header />

      {children}

  </div>
)


export default CoreLayout
