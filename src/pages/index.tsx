import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Logo from '../components/Logo';
import Link from '@docusaurus/Link';


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <header>
        <h1 id='header' className='title'>SweeTen Team</h1>
      </header>
      <main>
        <p id='main-par' className='par'>Questo sito racchiude tutta la documentazione prodotta durante lo svolgimento del progetto di ingegneria del software dal gruppo 10: SweeTen Team durante l'anno accademico 2024/25.</p>


        <div id='link-div'>
          <Link id='link' href='/docs/page1'>Vai alla documentazione</Link>
        </div>
        <div className='wip'>
          The rest is Coming Soon...
          <Link id='link' href='https://github.com/SweeTenTeam'>Vai alla Repo</Link>
        </div>
      </main>
    </Layout>
  );
}