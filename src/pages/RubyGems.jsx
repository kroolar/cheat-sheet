import React from 'react'
import Page from '../components/Page'
import Box from '../components/Box'
import Row from '../components/Row'

const RubyGems = () => (
  <Page>
    <Box title="General">
      <Row cmd="gem help" note="Helpful information" />
      <Row cmd="gem list" note="List of installed gems" />
      <Row cmd="gem outdated" note="Check outdated gems" />
    </Box>

    <Box title="Specific Gem">
      <Row cmd="gem search NAME" note="Find gems by name" />
      <Row cmd="gem install NAME / gem i NAME" note="Install gem" />
      <Row cmd="gem update NAME" note="Update gem" />
      <Row cmd="gem uninstall NAME" note="Uninstall gem" />
      <Row cmd="gem info NAME" note="Information about gem" />
      <Row cmd="gem owner NAME" note="Check who is the gem owner" />
    </Box>

    <Box title="Create and modify">
      <Row cmd="gem fetch NAME" note="Fetch gem without installing" />
      <Row cmd="gem unpack NAME" note="Unpack fetched gem" />
      <Row cmd="gem install ./NAME-0.0.0" note="Install own gem based on build file" />
      <Row cmd="gem push ./NAME-0.0.0.gem" note="Push your gem to the RubyGems repo" />
      <Row cmd="gem build NAME.gemspec" note="Build own gem based on gemspec" />
    </Box>
  </Page>
)

export default RubyGems
