import React from 'react'
import './SearchInput.css'
export default function SearchInput() {
  return (
    <div className='SearchInput'>
      <div class="container">
        <h1 class="heading">Tiny Animated search bar</h1>
        <div class="searchInputWrapper">
          <input class="searchInput" type="text" placeholder='focus here to search'>
            <i class="searchInputIcon fa fa-search"></i>
          </input>
        </div>
      </div>
    </div>
  )
}
