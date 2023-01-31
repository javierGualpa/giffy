
const Gifs = ({ title, url }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-center">{title}</h4>
      <img src={url} className='w-60 h-60 object-cover' />
    </div>
  )
}
export default Gifs