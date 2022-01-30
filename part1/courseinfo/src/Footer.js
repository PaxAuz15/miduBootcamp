const Footer = ({exercises}) => {
    let total = 0
    for (let i = 0; i < exercises.length; i++) {
      total += exercises[i]
    }
    return (
      <p>Number of exercises {total}</p>
    )
}

export default Footer