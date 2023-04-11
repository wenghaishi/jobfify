import Logo from '../components/Logo.js';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo />
      </nav>
      <div className="container page">
      <div className='info'>
        <h1>job <span>tracking</span> app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum!
        </p>
        <Link to='/register' className='btn btn-hero'>Login / register</Link>
      </div>
      <img src={main} alt="job hunt" className='img main-img' />
    </div>
    </Wrapper>
  )
}

export default Landing