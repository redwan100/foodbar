import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-100 py-4 md:py-8">
      <div class="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm text-gray-600 mb-2 md:mb-0">
          © 2023 My Recipe Blog
        </div>
        <ul class="flex flex-wrap justify-center md:justify-end">
          <li class="mr-4 mb-2 md:mb-0">
            <a href="#" class="text-gray-600 hover:text-gray-800">
              Privacy Policy
            </a>
          </li>
          <li class="mr-4 mb-2 md:mb-0">
            <a href="#" class="text-gray-600 hover:text-gray-800">
              Terms of Use
            </a>
          </li>
          <li class="mr-4 mb-2 md:mb-0">
            <a href="#" class="text-gray-600 hover:text-gray-800">
              Contact Us
            </a>
          </li>
          <li class="mr-4 mb-2 md:mb-0">
            <a href="#" class="text-gray-600 hover:text-gray-800">
              Advertise with Us
            </a>
          </li>
        </ul>
      </div>
      <div class="container mx-auto px-4 md:px-8 text-sm text-gray-600 mt-4 md:mt-8">
        <p>
          My Recipe Blog is your go-to source for delicious and healthy recipes.
          Our mission is to inspire you to cook more at home and enjoy the many
          benefits of homemade meals.
        </p>
      </div>
    </footer>
  );
}

export default Footer