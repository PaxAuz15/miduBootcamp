const Button = ({ option, func }) => {
  return <button onClick={func}>{option}</button>
}

export default Button