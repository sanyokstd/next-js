import Heading from '../components/Heading';
import Styles from '../styles/Home.module.scss';
import Socials from '../components/Socials';

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { socials: data },
    }
  } catch {
    return {
      props: { socials: null },
    }
  }
};

const Home = ({socials}) => (
  <div className={Styles.wrapper}>
    <Heading text="Hello World!"/>
    <Socials socials={socials}/>
  </div>
)

export default Home;