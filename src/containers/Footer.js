// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component } from 'react';

import Anchor from '../components/Anchor';
import Paragraph from '../components/Paragraph';
import Box from '../components/Box';
import Footer from '../components/Footer';
import Menu from '../components/Menu';


export default class BlogFooter extends Component {
  render () {

    return (
      <Footer size='small' appCentered={true} colorIndex='light-2'
        direction='column' primary={true} justify='between'
        pad={{horizontal: 'medium', vertical: 'medium', between: 'medium'}}>


        <Box align='center'>
          <Paragraph>This work is licensed under the <a href='http://creativecommons.org/licenses/by/4.0/legalcode' target='_blank'>Creative Commons Attribution 4.0 International License.</a></Paragraph>
        </Box>
        <Box align='center'>
          <Menu inline={true} direction='row' justify='center'
            size='small' responsive={false}>
            <Anchor href='http://slackin.grommet.io'
              icon={socialSlack} target='_blank' />
            <Anchor href='https://twitter.com/grommetux'
              icon={socialTwitter} target='_blank' />
            <Anchor href='https://www.facebook.com/grommetux'
              icon={socialFacebook} target='_blank' />
            <Anchor href='https://vimeo.com/grommetux'
              icon={socialVimeo} target='_blank' />
          </Menu>
        </Box>

        
      </Footer>
    );
  }
}
