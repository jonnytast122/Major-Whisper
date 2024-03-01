import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  useEffect(() => {
    // Burger menus
    const handleBurgerClick = () => {
        const menu = document.querySelectorAll('.navbar-menu');
        if (menu.length) {
            for (let j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        }
    };

    const handleNavbarCloseClick = () => {
        const menu = document.querySelectorAll('.navbar-menu');
        if (menu.length) {
            for (let j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        }
    };

    const handleBackdropClick = () => {
        const menu = document.querySelectorAll('.navbar-menu');
        if (menu.length) {
            for (let j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        }
    };

    const burger = document.querySelectorAll('.navbar-burger');
    if (burger.length) {
        for (let i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', handleBurgerClick);
        }
    }

    const close = document.querySelectorAll('.navbar-close');
    if (close.length) {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', handleNavbarCloseClick);
        }
    }

    const backdrop = document.querySelectorAll('.navbar-backdrop');
    if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', handleBackdropClick);
        }
    }

    // Cleanup event listeners on component unmount
    return () => {
        if (burger.length) {
            for (let i = 0; i < burger.length; i++) {
                burger[i].removeEventListener('click', handleBurgerClick);
            }
        }

        if (close.length) {
            for (let i = 0; i < close.length; i++) {
                close[i].removeEventListener('click', handleNavbarCloseClick);
            }
        }

        if (backdrop.length) {
            for (let i = 0; i < backdrop.length; i++) {
                backdrop[i].removeEventListener('click', handleBackdropClick);
            }
        }
    };
}, []);

  return (
    <div>
      	<nav class="relative px-4 py-4 flex justify-between items-center bg-white">
        <img src="src/assets/logo.jpg" alt="logo" class="h-14" />

		<div class="lg:hidden">
			<button class="navbar-burger flex items-center text-blue-600 p-3">
				<svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a class="text-sm text-blue-600 font-bold hover:text-gray-500" href="#">Home</a></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a class="text-sm text-gray-400 " href="#">Contact</a></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">About Us</a></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Get Started</a></li>
			<li class="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
		</ul>
		<Link to="/login" class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Login In</Link>
		<Link to="/register" class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</Link>
	</nav>
	<div class="navbar-menu relative z-50 hidden">
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<a class="mr-auto text-3xl font-bold leading-none" href="#">
        <img src="./public/asset/logo.png" alt="logo" class="h-14" />

				</a>
				<button class="navbar-close">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
					</li>
					<li class="mb-1">
						<a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Get Started</a>
					</li>
				</ul>
			</div>
			<div class="mt-auto mb-2">
				<div class="pt-6">
					<a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Log in</a>
					<a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
				</div>
			</div>
		</nav>
	</div>  

      <header className="text-center py-16 bg-white">
        <h1 className="text-4xl font-bold text-gray-800">Discover your perfect major</h1>
        <p className="text-gray-600 mt-4">Take our personality quiz, and we'll match you with the best college major for you</p>
        <button  className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-500">
            <Link to="/loginRegister">Let's Start</Link>
        </button>
      </header>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800">We're here to help you find the right path</h2>
        <div className="ml-8 mr-8 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-book-open fa-2x text-gray-800"></i>
            <h3 className="text-lg font-semibold mt-4">College Majors</h3>
            <p className="text-gray-600 mt-2">Explore hundreds of majors</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-briefcase fa-2x text-gray-800"></i>
            <h3 className="text-lg font-semibold mt-4">Career Paths</h3>
            <p className="text-gray-600 mt-2">Learn about the jobs you can get after graduation</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-comments fa-2x text-gray-800"></i>
            <h3 className="text-lg font-semibold mt-4">Guidance</h3>
            <p className="text-gray-600 mt-2">Get advice from current students and grads</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-pen fa-2x text-gray-800"></i>
            <h3 className="text-lg font-semibold mt-4">Major Descriptions</h3>
            <p className="text-gray-600 mt-2">Discover schools that offer your major</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-path fa-2x text-gray-800"></i>
            <h3 className="text-lg font-semibold mt-4">Learning Path</h3>
            <p className="text-gray-600 mt-2">Connect with other students and ask questions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-comments fa-2x text-gray-800"></i>
            <h3 className="text-lg font-semibold mt-4">Interactive Quiz Interface</h3>
            <p className="text-gray-600 mt-2">Get advice from current students and grads</p>
          </div>
        </div>
      </section>

      <footer
        class="bg-neutral-100 text-center text-black dark:bg-neutral-200 dark:text-neutral-200 lg:text-left">
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-black">
          <div class="flex flex-col justify-center items-center">
    <img src="src/assets/logo_round.png"/>
    <p class="text-center text-xl text-gray-800 text-sm font-semibold">Major Whisper</p>
</div>
            <div class="">
              <h6
                class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p class="mb-4">
                <a href="#!" class=""
                >About us</a>
              </p>
              <p class="mb-4">
                <a href="#!" class=""
                >Advertise</a
                >
              </p>
            </div>
            <div class="">
              <h6
                class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                POLICIES
              </h6>
              <p class="mb-4">
                <a href="#!" class=""
                >Privacy</a
                >
              </p>
              <p class="mb-4">
                <a href="#!" class=""
                >Term</a
                >
              </p>
              <p class="mb-4">
                <a href="#!" class=""
                >Orders</a
                >
              </p>
              <p>
                <a href="#!" class=""
                >Manage Coookies</a
                >
              </p>
            </div>
            <div>
              <h6
                class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact us
              </h6>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                majorwhisper@gmail.click
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                RUPP, Faculty of Engineering, DSE
              </p>
              {/* <p class="mb-4 flex items-center justify-center md:justify-start">
              </p> */}
            </div>
          </div>
        </div>

        <div class="bg-neutral-200 p-6 text-center text-black dark:bg-neutral-200">
          <span>Copyright © 2024 </span>
          <a
            class="font-semibold text-black dark:text-black"
            href="https://tw-elements.com/"
          >Major Whisper</a
          >
        </div>
      </footer>
      
    </div>
    
  );
}
