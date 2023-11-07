import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'
import { NavMenu } from '../NavMenu'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__body}>
					<div className={styles.header__logo}>
						<Link href="#">
							<Image
								src="https://d2kq0urxkarztv.cloudfront.net/62f5decbe0006300377c9a3c/3866525/image-d2669067-486c-4040-a2b0-e4580e666155.png?e=webp&nll=true"
								width={196}
								height={35}
								alt="Logo"
							/>
						</Link>
					</div>
					<NavMenu />
				</div>
			</div>
		</header>
	)
}
