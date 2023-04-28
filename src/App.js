// import logo from './logo.svg';
import './App.css';
import { BsGithub,  BsLinkedin} from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <section className='resume-section p-3 p-lg-5' id='about'>
          <div className='auto'>
            <h1 className='mb-0'>Pallavi Ranganath</h1>
            <div className='subheading '>pallavi.masineni@gmail.com</div> 
            <p className='about'>I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!</p> 
            <ul className='list-inline list-social-icons'>
              <li className='list-inline-item'>
                <a href='/'>
                  < BsGithub className='fa fa-stack' />
                </a>
                <a href='/'>
                   < BsLinkedin className='fa fa-stack' />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className='resume-section p-3 p-lg-5' id='experience'>
          <div className='auto'>
            <h2 className='mb-5'>Experience</h2>
            <div className='resume-item '>
              <div className='resume-content mr-auto'>
                <h3 className='mb-0'>Web Developer</h3>
                <div className='subheading mb-3'>AppRight Software Solutions</div>
                <p className='about'> It's a Agricultural website...</p>
                <div className='resume-date text-md-right'><span className='text-primary'> June 2021 - Present</span></div>
              </div>
            </div>
          </div>
        </section>
        <section className='resume-section p-3 p-lg-5' id='education'>
          <div className='auto'>
          <h2 className='mb-5'>Education</h2>
          <div className='resume-item'>
            <div className='resume-content mr-auto'>
                <h3 className='mb-0'>VIJAYANAGARA SRI KRISHNADEVARAYA UNIVERSITY</h3>
                <div className='subheading mb-3'>Bachelor of Business Administration</div>
                <div className='about'>Human Resource</div>
                <p className='about'>GPA:</p>
            </div>
            <div className='resume-date'>
                <span className='text-primary'> June 2016 - May 2019</span>
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;