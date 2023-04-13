import { NavLink, Link } from 'react-router-dom'
import learningGeek from '../assets/learning-geek.png'
function Home() {
  return (
    <div className='w-full bg-[#0a0a23] flex items-center justify-around py-4'>
        <div>
            <img className='w-[40px]' src={learningGeek} alt="" />
        </div>
        <div className='mr-4'>
            <Link to='/author' className='text-white text-center text-3xl font-bold'>S.J Developer</Link>
        </div>
        <div className='text-white text-xl'>
            <NavLink className='mr-6' to='/'>Home</NavLink>        
            <NavLink className='mr-6' to='about'>About</NavLink>
            <NavLink className='mr-6' to='contact'>Contact</NavLink>
        </div>
    </div>
  );
}

export default Home;