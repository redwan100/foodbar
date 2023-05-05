import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-gray-300 py-4 md:py-8">
      <div className="myContainer">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left">
            <p class="font-bold text-lg">© 2023 Food Recipe</p>
            <p class="mt-2">All rights reserved.</p>
          </div>
          <div class="mt-4 md:mt-0">
            <ul class="flex space-x-4">
              <li>
                <a href="#" class="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-4 md:mt-0 text-center md:text-right">
            <p className='text-center'>Follow us:</p>
            <div class="flex justify-center md:justify-end mt-2">
              <a href="#" class="text-gray-400 hover:text-gray-300 mx-2">
                <FaFacebook />
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300 mx-2">
                <FaTwitter />
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300 mx-2">
                <FaInstagram />
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300 mx-2">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer