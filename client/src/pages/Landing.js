import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <img src={logo} alt="jobify" className='logo' />
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
        <button className='btn btn-hero'>Login / register</button>
      </div>
      <img src={main} alt="job hunt" className='img main-img' />
    </div>
    </Wrapper>
  )
}

export default Landing