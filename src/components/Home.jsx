import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div className="bg-slate-700 min-h-screen text-white flex flex-col justify-center items-center gap-3">
        <h1 className='text-5xl font-semibold mb-10'>App</h1>
        <NavLink to='/gif/goku' className={'underline text-black hover:text-white text-lg font-medium'}>goku</NavLink>
        <NavLink to='/gif/vegeta' className={'underline text-black hover:text-white text-lg font-medium'}>vegeta</NavLink>
        <NavLink to='/gif/gohan' className={'underline text-black hover:text-white text-lg font-medium'}>gohan</NavLink>
        <NavLink to='/gif/trunks' className={'underline text-black hover:text-white text-lg font-medium'}>trunks</NavLink>
      </div>
    </>
  )
}
