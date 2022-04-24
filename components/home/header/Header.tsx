import {NextFunctionComponent} from 'next'

import Logo from "./Logo"
import NavListRight from "./NavListRight"
import NavListLeft from "./NavListLeft"

import styles from "@/styles/Home.module.scss"

const Header: NextFunctionComponent = () => (
  <header className={styles.header}>
    <Logo/>
    <NavListLeft/>
    <NavListRight/>
  </header>
)

export default Header