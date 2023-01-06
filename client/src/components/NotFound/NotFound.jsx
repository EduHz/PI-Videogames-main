import Nav from '../Nav/Nav'
import logo from '../../assets/not-found.png'
import '../NotFound/NotFound.css'

export default function NotFound() {
  return (
    <>
      <Nav/>
      <div className='container-notfound'>
        <img src={logo} className="image-notfound" alt="imagen notFound" />
        <h1>Site Not Found</h1>
        <h3>Well, this is akward. The site you're looking for is not here</h3>
      </div>
    </>
  );
}
