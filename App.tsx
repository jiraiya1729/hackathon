

import img1 from './components/images/1.png'
import img2 from './components/images/2.png'
import img3 from './components/images/3.png'
import img4 from './components/images/4.png'
import img5 from './components/images/5.png'
import img6 from './components/images/6.png'
import img7 from './components/images/7.png'
import img8 from './components/images/8.jpg' 
function App() {
  return (
    <div className="container mx-auto p-5">
    <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div className="flex flex-row justify-center">
        
      </div>
      
    </div>

    <div className="md:flex md:flex-row mt-20">
      
      <div className="md:w-3/5">
        
      </div>
    </div> 

    <div className="my-20">
      <div className="flex flex-row justify-between my-5">
        
        <a href="#" className="flex flex-row text-lg hover:text-blue-700">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src={img1} className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="#">Room air conditioner</a></h3>
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-green-600 to-green-400 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-green-600 hover:to-green-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-blue-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src={img2} className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="#">Refrigerators</a></h3>
          
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-green-600 hover:to-green-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-blue-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src={img3} className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="#">Washers</a></h3>
          
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-green-600 hover:to-green-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-blue-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src={img4} className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="#">Dryers</a></h3>
          
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-green-600 hover:to-green-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-blue-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>  


    <div className="my-20">
      <div className="flex flex-row justify-between my-5">
        
        <a href="#" className="flex flex-row text-lg hover:text-blue-700">
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src={img5} className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="#">Light bulbs</a></h3>
          
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-green-600 hover:to-green-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-blue-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src={img7} className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="#">Comericial dish washer</a></h3>
          
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-green-600 hover:to-green-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-blue-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src={img8} className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="#">Air source heat pump</a></h3>
          
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-green-600 hover:to-green-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-blue-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src={img6} className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
          <h3><a href="#">Heat pump water heater</a></h3>
          
          <div className="flex flex-col xl:flex-row justify-between">
            <a className="bg-gradient-to-r from-green-600 to-green-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-green-600 hover:from-green-600 hover:to-green-600 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
            <a className="bg-blue-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-blue-700 flex flex-row justify-center" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>  

    
  </div>
  );
}

export default App;
