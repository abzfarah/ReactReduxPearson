import React from 'react'
import Anchor from '../../components/Anchor'
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
  <Header fixed={true}>

  <Box size="large">

      <Box>

      </Box>

      <nav>

        <ul>
        <h1>
          <a></a>
        </h1>
          <li> Products</li>
          <li> Why Auth0</li>
          <li> Pricing</li>
          <li> Documentation</li>
        </ul>

      </nav>


  </Box>

</Header>

  </div>
)


export default CoreLayout
