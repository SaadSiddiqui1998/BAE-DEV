import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/page.module.css';
import HomeMain from './HomeMain';


export default function Home() {

  return (
    <main className={styles.main}>
      {/* <Header /> */}
      <HomeMain />
    </main>
  )
}
