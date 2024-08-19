
import peppaLogo from '../imgs/peppa-logo.png'
import '../css/App.css'

export function HomePage() {
  return <div className='hello'>
    <img src={peppaLogo}></img>
    <h1>Welcome to peppa-mail</h1>
  </div>
}
