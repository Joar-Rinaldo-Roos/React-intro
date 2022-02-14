

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={{ HeadingStyle }}>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
  title: 'Default Tracker'
}
const HeadingStyle = {
  color: 'red',
  backgroundColor: 'black',

}

// props Header.proptypes
export default Header