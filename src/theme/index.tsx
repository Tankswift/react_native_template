import * as React from 'react';
import defaultTheme from './default';
import darkTheme from './dark';
type Theme =typeof defaultTheme
interface Props {
  children:React.ReactNode
  name:string
}
interface ContextValue {
  theme:Theme
  themeName:string
  changeTheme:(key:string)=>void
}
const themes:any={
  default:defaultTheme,
  dark:darkTheme
}
//初始化默认值
export const ThemeContext=React.createContext<ContextValue>({
  theme:themes.default,
  themeName:'default',
  changeTheme:()=>{}
})
//创建context容器
export const ThemeContextProvider=({children,name='default'}:Props)=>{
  const [theme,setTheme]=React.useState(name)
  return (
    <ThemeContext.Provider 
      value={{theme:themes[theme],themeName:theme,changeTheme:setTheme}}
    >
      {children}
    </ThemeContext.Provider>
  )
}