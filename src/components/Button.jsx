import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, to }) => (
  <Link className={`button button--${to}`} to={`/${to}`}>
    {text}
  </Link>
)

export default Button
