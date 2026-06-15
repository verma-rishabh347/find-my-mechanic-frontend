
function SimpleBox(props) {
  return (
    <div className='text-center'>
      <div>{props.img}</div>
        <h1 className='text-3xl text-blue-900'>{props.head}</h1>
        <p className='italic '>{props.body}</p>


    </div>
  )
}

export default SimpleBox