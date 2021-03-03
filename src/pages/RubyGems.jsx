import React from 'react'
import Page from '../components/Page'
import Box from '../components/Box'
import Row from '../components/Row'

const RubyGems = () => (
  <Page>
    <Box title="Basics">
      <Row cmd="gem install rails" note="Install Rails depedency to the project" />
      <Row cmd="gem update" note="Update all Rails depedency" />
    </Box>
  </Page>
)

export default RubyGems
