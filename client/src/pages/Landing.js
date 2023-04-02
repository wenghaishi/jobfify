import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';


const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className='logo' />
      </nav>
      <div className="container page">
        <h1>job <span>tracking</span> app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga?
        </p>
        <button className='btn btn-hero'>Login / register</button>
      </div>
      <img src={main} alt="job hunt" className='img main-img' />
    </main>
  )
}

export default Landing