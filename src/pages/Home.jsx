import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';
import Hero from '../components/common/hero';
import Profile from '../components/common/profile';
import CardsList from '../components/features/card/CardsList';
import Works from '../data/works'
import TechList from '../components/features/techList';

const Home = () => {
  const works = Works;
  console.log(works);
  return (
    <>
      <Hero
        title="My name is Gantulga,"
        subtitle="I am Front-End developer"
      />
      <div id='about'>
        <Container>
          <h2>About me</h2>
          <p>I am passionate about building good experiences for web pages accessible to anyone, including those who have never used the web site before.</p>
          <p>Technologies I use:</p>
          <TechList/>
       
        </Container>
        <svg className='svg' width="100%" viewBox="0 0 1442 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M83.3605 9.912C-30.4279 19.907 -203 53.6229 -203 53.6229V94H1662V3.24423C1662 3.24423 1529.9 -2.34949 1445.96 3.24423C1324.45 11.3419 1263.85 43.283 1142.73 53.6229C1010.69 64.895 934.137 63.2134 801.793 53.6229C678.947 44.7206 615.078 19.5889 492.367 9.912C333.773 -2.59448 241.685 -3.99498 83.3605 9.912Z" fill="url(#paint0_linear_69_886)" />
          <path d="M83.3605 16.912C-30.4279 26.907 -203 60.6229 -203 60.6229V101H1662V10.2442C1662 10.2442 1529.9 4.65051 1445.96 10.2442C1324.45 18.3419 1263.85 50.283 1142.73 60.6229C1010.69 71.895 934.137 70.2134 801.793 60.6229C678.947 51.7206 615.078 26.5889 492.367 16.912C333.773 4.40552 241.685 3.00502 83.3605 16.912Z" fill="#282A35" />
          <defs>
            <linearGradient id="paint0_linear_69_886" x1="-203" y1="50.5" x2="1662" y2="50.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F766E" />
              <stop offset="1" stopColor="#D9F99D" />
            </linearGradient>
          </defs>
        </svg>

      </div>
      <div id='works'>
        <Container>
          <div className='card-list'>
            <h2>Works</h2>
            <CardsList works={works}/>
          </div>
        </Container>
      </div>
      <div id='contact'>
          <Container>
            <Profile/>
          </Container>
      </div>
    </>
  )
}

export default Home;