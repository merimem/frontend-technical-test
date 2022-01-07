import type { FC } from 'react'
import React, {useContext} from "react";
import { Context } from '../context';
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'

const Home: FC = () => {
  const year = new Date().getFullYear()

  return <div className="background">auth</div>;
}

export default Home