'use client'

import { useState, useEffect } from 'react'
import { clsx } from 'clsx'
import styles from './styles.module.scss'

export const NavMenu = () => {
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		const bodyTagElement = document.body

		if (isActive) {
			bodyTagElement.classList.add('lock')
		} else {
			bodyTagElement.classList.remove('lock')
		}
	}, [isActive])

	const activeToggleHandler = () => {
		setIsActive(state => !state)
	}

	const isActiveBurgerStyle = clsx(styles.header__burger, {
		active: isActive
	})

	const isActiveMenuStyle = clsx(styles.header__menu, {
		active: isActive
	})

	return (
		<>
			<div className={isActiveBurgerStyle} onClick={activeToggleHandler}>
				<span></span>
			</div>

			<nav className={isActiveMenuStyle}>
				<ul className={styles.header__list}>
					<li className={styles.header__link}>О нас</li>
					<li className={styles.header__link}>Кофе</li>
					<li className={styles.header__link}>Кав’ярені</li>
				</ul>
			</nav>
		</>
	)
}
