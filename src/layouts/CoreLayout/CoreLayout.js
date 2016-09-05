import React from 'react'
import Header from '../../components/Header'
import Footer from '../../containers/Footer'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import Paragraph from '../../components/Paragraph'



import CSSClassnames from '../../components/utils/CSSClassnames';
import '../../styles/core.scss'
import  '../../styles/index.styl'
const CLASS_ROOT = CSSClassnames.CALENDAR;


export const CoreLayout = ({ children }) => (
  <div >
    <Header />



  </div>
)


export default CoreLayout
