import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text ,detail}) => (
  <li
    onClick={onClick}
  >
    {text}
    <detail style = { {display: completed ? 'block' : 'none' } }>{detail}</detail>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  detail : PropTypes.string
}

export default Todo