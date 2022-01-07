import type { FC } from 'react'
import React, {useContext} from "react";
import { Context } from '../context';
import { useRouter } from 'next/router';
import axios from "axios";
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'

const Auth: FC = () => {
  

  return <div className="background">auth</div>;
}

export default Auth