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
            <p className='subheading '>pallavi.masineni@gmail.com</p> 
            <p className='aboutme'>I am a creative designer and developer, who aims to work with small businesses and marginalized communities to bring their passions to life. I offer both design and development services of web applications or websites!</p> 
            <ul className='list-inline list-social-icons'>
              <li className='list-inline-item'>
                <a href='#'>
                  < BsGithub className='fa fa-stack' />
                </a>
                <a href='#'>
                   < BsLinkedin className='fa fa-stack' />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

//  <span class="fa-stack">
//                   <i class="fa fa-circle fa-stack-2x"></i>
//                   <i class="fa fa-facebook" aria-hidden="true"></i>
//                   <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
//                 </span> 