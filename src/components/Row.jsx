import React from 'react'

const Row = ({ cmd, note }) => (
  <div className="row">
    <div className="row__cmd">{cmd}</div>
    <div className="row__note">{note}</div>
  </div>
)

export default Row
