


import { useDispatch, useSelector } from 'react-redux'
import {HeaderLink, HeaderNavigate, HeaderBlock, ToggleButton} from './Header.styled'
import { toggleThemeAction } from '../../features/themesList'
import { RootState } from '../../store'
const Header = () => {

  const theme = useSelector((state: RootState) => state.themeList.theme )
  const dispatch = useDispatch()

  return (
     <HeaderBlock >
        <HeaderNavigate>
          <HeaderLink to='/'  >ToDo</HeaderLink>
          <HeaderLink to='/list/'>List</HeaderLink>
          <ToggleButton onClick={() => dispatch(toggleThemeAction())}>{theme.name}</ToggleButton>

        </HeaderNavigate>
    </HeaderBlock>
  )
}

export default Header