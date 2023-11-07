import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__body}>
					<Link href="#">
						<Image
							src="https://d2kq0urxkarztv.cloudfront.net/62f5decbe0006300377c9a3c/3866525/image-d2669067-486c-4040-a2b0-e4580e666155.png?e=webp&nll=true"
							width={196}
							height={35}
							alt="Logo"
						/>
					</Link>
					<div className={styles.header__burger}>
						<span></span>
					</div>

					<nav className={styles.header__menu}>
						<ul className={styles.header__list}>
							<li className={styles.header__link}>О нас</li>
							<li className={styles.header__link}>Кофе</li>
							<li className={styles.header__link}>Кав’ярені</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
