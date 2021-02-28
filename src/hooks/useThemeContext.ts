import {useContext} from 'react';
import {ThemeContext} from '../theme'
const useThemeContext=()=>{
  return useContext(ThemeContext)
}
export default useThemeContext