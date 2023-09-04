import React from 'react'
import styles from './page.module.css'
import { StreamPlayer } from '@/components/StreamPlayer/index';

export default function Home() {

  let jsmpegPlayer = null;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <StreamPlayer/>
      </div>
    </main>
  )
}
