const Button = ({typeAction, onClick, children}) => {
  return (
    <button type={typeAction} onClick={onClick} className="primaryButton">{children}</button>
  )
}

export default Button