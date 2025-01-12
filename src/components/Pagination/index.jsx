/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Pagination.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePage } from '../../redux/slices/paginationSlice'

export const Pagination = () => {

  const dispatch = useDispatch()
  const activePage = useSelector((state) => state.paginationSlice.activePage)

  const numberOfPages = 3

  const switchingPages = (direction) => {
    if (direction === 'prev') {
      return activePage === 0 ? '' : dispatch(setActivePage(activePage - 1))
    }
    if (direction === 'next') {
      return activePage === numberOfPages - 1 ? '' : dispatch(setActivePage(activePage + 1))
    }
  }

  return (
    
    <ul className={styles.root}>
        <li>
          <a 
            className='prev'
            onClick={() => switchingPages('prev')}
          >
            &lt;
          </a>
        </li>
        {[...new Array(numberOfPages)].map((_, index) => (
            <li>
              <a 
                className={index === activePage ? styles.active : ''}
                onClick={() => dispatch(setActivePage(index))}
              >
                {index + 1}
              </a>
            </li>
        ))}
        <li>
          <a 
            className='next'
            onClick={() => switchingPages('next')}
          >
            &gt;
          </a>
        </li>
    </ul>
  )
}

export default Pagination