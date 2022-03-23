import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import { useRouter } from 'next/router';
import { ImPhone } from 'react-icons/im';
import { IoMdMail } from 'react-icons/io';
import {AiFillLinkedin} from 'react-icons/ai'

const Home =()=> {
  const route = useRouter();
    return (
        <div className={styles.aboutContainer}>
            <Head>
                <meta name="description" content="about"></meta>
            </Head>
            <div className={styles.aboutme}>
                <h1>About me</h1>
                <hr />
                <p>
                    I&rsquo;m a Copywriter,<br />
                    Passionated about persuasion, human psychology,<br />
                    and professional developement.<br />
                    My goal and motivation is to transform your prospects into<br />
                    loyal customers, your vistors into converts through hypnotic,<br />
                    captiving and converting texts.

                    <br /><br />
                    <b>Your expension, Our target.</b>
                </p>

                <div>
                <h1>Contacts</h1>
                <ul className={styles.listUl}>
                    <li className={ styles.listLi}>
                        <ImPhone />
                        <span className={styles.contactspan}>
                            <a className={styles.num1} href="tel:+250783375293">+250 783 375 293 ,</a>
                            <a className={styles.num2} href="tel:+243974903406">+243 974 903 406</a>
                        </span>
                    </li>
                    <li className={styles.listLi}>
                        <IoMdMail />
                        <span className={styles.contactspan}>
                            <a href="mailto:eliedemole2@gmail.com">eliedemole2@gmail.com</a>
                        </span>
                        </li>
                        <li className={styles.listLi}>
                            <AiFillLinkedin className={styles.icon} />
                        <span className={styles.contactspan}>
                                <a
                                    href="https://www.linkedin.com/in/%C3%A9lie-demole-480256230/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Élie Demole
                                </a>
                        </span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Home