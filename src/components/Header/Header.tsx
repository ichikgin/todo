


import {HeaderLink, HeaderNavigate, HeaderBlock} from './Header.styled'
const Header = () => {

  return (
     <HeaderBlock >
        <HeaderNavigate>
          <HeaderLink to='/'  >ToDo</HeaderLink>
          <HeaderLink to='/list/'>List</HeaderLink>

        </HeaderNavigate>
    </HeaderBlock>
  )
}

export default Header