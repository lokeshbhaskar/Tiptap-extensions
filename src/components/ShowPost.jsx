import React from 'react'
import parse from 'html-react-parser'

const ShowPost = ({content}) => {
  return (
    <div className='border-2 mt-2'>
      { parse(content)}
    </div>
  )
}

export default ShowPost