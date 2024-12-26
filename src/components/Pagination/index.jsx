/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styles from './Pagination.module.scss'

export const Pagination = ({ value, onChange }) => {

  const numberOfPages = 3

  const switchingPages = (direction) => {
    if (direction === 'prev') {
      return value === 0 ? '' : onChange(value - 1)
    }
    if (direction === 'next') {
      return value === numberOfPages - 1 ? '' : onChange(value + 1)
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
                className={index === value ? styles.active : ''}
                onClick={() => onChange(index)}
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