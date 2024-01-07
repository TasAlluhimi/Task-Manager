import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@nextui-org/react';

function Nav() {

    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
      
    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    };

    const closeSidebar = (e) => {
      if (!e.target.closest('#sidebar') && !e.target.closest('#open-sidebar')) {
      setIsSidebarOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  const sign_out = ()=>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
         <div className="">
          <div
            className={`absolute bg-white border-r-2 w-56 min-h-screen overflow-y-auto 
            transition-transform ${isSidebarOpen ? 'transform translate-x-0' 
            : 'transform -translate-x-full'
            } ease-in-out duration-300`}
            id="sidebar"
            style={{ zIndex: 1000 }}
          >
            {/* Sidebar Content */}
            <div className="p-4">

              <button className={`w-7 h-7 text-gray-500 hover:text-gray-600`}
                id="open-sidebar" onClick={toggleSidebar}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" 
                      strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                  
              <ul className="mt-4">
                {/* for mobile only  */}
                <li className="mb-2 hidden max-sm:block">
                  <div className=''>
                  <Link to="/" 
                  className="flex items-center">
                    
                    <div className=''>Home</div>
                  </Link>
                  </div>
                  </li>

                  <li className="mb-2 hidden max-sm:block">
                  <div className=''>
                  <Link to="/" 
                  className="flex items-center">
                    
                    <div className=''>Tasks</div>
                  </Link>
                  </div>
                  </li>

                  <li className="mb-2 hidden max-sm:block">
                  <div className=''>
                  <Link to="/" 
                  className="flex items-center">
                    
                    <div className=''>Calendar</div>
                  </Link>
                  </div>
                  </li>

                  <li className="mb-2 hidden max-sm:block">
                  <div className=''>
                  <Link to="/" 
                  className="flex items-center">
                    
                    <div className=''>Settings</div>
                  </Link>
                  </div>
                  </li>

                  <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700 max-sm:my-7 hidden max-sm:block"/>

                
                <li className="mb-2">
                <Link to="/" 
                  className="block hover:text-[#5C8374]">
                    Project List
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" 
                  className="block hover:text-[#5C8374]">
                    Team Members
                  </Link>
                </li>

                <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700 max-sm:my-7"/>
                <li className="mb-2">
                  <Link to="/" 
                  className="block hover:text-[#5C8374]">
                    Notifications
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" 
                  className="block hover:text-[#5C8374]">
                    Recent Activity
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" 
                  className="block hover:text-[#5C8374]">
                    Logs
                  </Link>
                </li>

                <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700 max-sm:my-7"/>

                <li className="mb-2">
                  <Link to="/" 
                  className="block hover:text-[#5C8374]">
                    Reposetory
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" 
                  className="block hover:text-[#5C8374]">
                    Branches
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" 
                  className="block hover:text-[#5C8374]">
                    Logs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Content  */}
          <div className="flex-1 flex flex-col">
            {/* Navbar  */}
            <div className="shadow w-full">
              <div className="mx-5">

                <div className="flex items-center justify-between ">
                {/* first  */}

                <div className='flex items-center justify-center gap-4'>
                <button className={`w-7 h-7 text-gray-500 hover:text-gray-600`}
                id="open-sidebar" onClick={toggleSidebar}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" 
                      strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>

                    <Link to='/'>
                    <div className='flex items-center justify-center'>
                        <img src="https://cdn-icons-png.flaticon.com/128/10449/10449599.png" 
                        alt="" 
                        className='w-20'/>

                        {/* <p
                        className=' text-xl font-bold'
                        >Task Manager</p> */}
                    </div>
                    </Link>
                    
                 </div>


                    {/* second  */}

                 <div>
                 <Input type="search" label="Search" className='w-[40vw] max-sm:w-36 max-sm:h-10' />

                 </div>

              {/* thierd  */}


                    <div className='max-sm:hidden'>
                        <ul className='flex justify-center gap-5'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>Tasks</Link></li>
                            <li><Link to='/'>Calendar</Link></li>
                            <li><Link to='/'>Settings</Link></li>
                        </ul>
                    </div>                  
                 
                </div>
              </div>
            </div>
            </div>
            {/* <p className='text-white'>hi</p> */}
            </div>
    </>
  )
}

export default Nav