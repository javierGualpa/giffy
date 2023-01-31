import Gifs from './Gifs';
import apiGifs from '../api'
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';



export const Lists = () => {

  const { keyword } = useParams()

  const [images, setImages] = useState([])

  useEffect(
    () => {
      apiGifs(keyword)
        .then(res => {
          setImages(res)
        })
    }, [])

  return (
    <div className='bg-slate-700 min-h-screen'>
      <NavLink to='/' className={'mb-8 text-white p-4 underline'}>Volver al Home</NavLink>

      <section className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-3 justify-items-center">
        {
          images.map(({ url, title, id }) => (
            <Gifs url={url} title={title} key={id} />
          )
          )
        }
      </section>
    </div>


  )
}
