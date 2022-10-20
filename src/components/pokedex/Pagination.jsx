import React from 'react'
import './styles/pagination.css'

const Pagination = ({page, pagesLength, setPage}) => {

  const pagesPerBlock = 8
  const currentBlock = Math.ceil(page / pagesPerBlock)
  const blockLength = Math.ceil(pagesLength / pagesPerBlock)

  const arrPages = []
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1
  const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock
  for(let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i)
  }

  const handlePage = p => {
    setPage(p)
  }
  const handleNext = () => {
    setPage(page + 1)
  }
  const handleNextPlus = () => {
    setPage(page + 8)
  }
  const handlePrevPlus = () => {
    setPage(page - 8)
  }
  const handlePrev = () => {
    setPage(page - 1)
  }

  return (
    <div className='pagination'>
      {
        currentBlock > 1 && 
        <div onClick={handlePrevPlus} className='pagination__prev pagination__active'><i className="fa-solid fa-arrow-left"></i><i className="fa-solid fa-arrow-left"></i></div>
      }
      {
        page > 1 && 
        <div onClick={handlePrev} className='pagination__prev pagination__active'><i className="fa-solid fa-arrow-left"></i></div>
      }
      <ul className='pagination__container'>
        {
          arrPages.map(p => 
            <li  onClick={() => handlePage(p)} className={`pagination__page ${page === p && 'pagination__active'}`} key={p}>{p}</li>  
          )
        }
      </ul>
      {
        page < pagesLength && 
        <div onClick={handleNext} className='pagination__next pagination__active'><i className="fa-solid fa-arrow-right"></i></div>
      }
      {
        currentBlock < blockLength - 1 && 
        <div onClick={handleNextPlus} className='pagination__next pagination__active'><i className="fa-solid fa-arrow-right"></i><i className="fa-solid fa-arrow-right"></i></div>
      }
    </div>
  )
}

export default Pagination