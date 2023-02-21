import Image from 'next/image'
import styles from '@/styles/organisms/_header.module.css'

export function Header(){
  return (
    <header className={styles.header__container}>
      <Image src="company-icon.svg" alt="Logo of the company" width={32} height={32}/>
      <h1 className={styles.web__title}>Sweet Petals</h1>
    </header>
  );
}