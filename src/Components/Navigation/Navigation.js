import React, { memo } from 'react'
import './Navigation.css'
import profile from '../../images/Ellipse 1.png'

const Navigation = memo(() => {
  return (
    <div className="navigation flex">
      <div class="flex space-x-2 ">
        <div class="dropdown relative drop">
          <button
            class="
        dropdown-toggle
        px-6
        py-2.5
        
        text-dark
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg active:text-white
        transition
        duration-150
        ease-in-out
        flex
        items-center
        whitespace-nowrap
      "
            type="button"
            id="dropdownMenuButton3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Starbucks
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              class="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* -------- */}
      <div>
        <form>
          <input className="input-box" type="search" placeholder="Search" />
        </form>
      </div>
      {/* ------- */}
      <div className="flex profile">
        <i class="fas fa-bell icon"></i>
        <img src={profile} alt="" />
        <div class="flex space-x-2 ">
          <div class="dropdown relative drop">
            <button
              class="
        dropdown-toggle
        px-6
        py-2.5
        
        text-dark
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg active:text-white
        transition
        duration-150
        ease-in-out
        flex
        items-center
        whitespace-nowrap
      "
              type="button"
              id="dropdownMenuButton3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Jhon Doe
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Navigation
