import type { NextPage } from "next"
import Head from "next/head"

import Header from "@/home/header/Header"
import HeroSection from "@/home/HeroSection"
import FeatureSection from "@/home/FeatureSection"
import BetterTomorrowSection from "@/home/BetterTomorrowSection"

import styles from "@/styles/Home.module.scss"

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Slack is where the future works</title>
      <meta 
        name="description" 
        content="Generated by create next app" />
      <link rel="icon" href="/slack.ico" />
    </Head>
    <Header/>
    <main className={styles.main}>
      <HeroSection/>
      <FeatureSection/>
      <BetterTomorrowSection/>
    </main>
  </div>
)

export default Home
