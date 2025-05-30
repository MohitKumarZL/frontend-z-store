import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FaChevronDown, FaChevronUp,FaRegUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

const toggleDropdown = (section) => {
  setIsOpen((prev) => (prev === section ? null : section));
};
    const handleClick = (path,link) => {
        setIsOpen(false); // Close any open panel
        navigate(path);  // Navigate to desired route
            console.log(`Clicked on ${link}`);  

    };

    


    return (
        <div className="sm:hidden absolute  backdrop-blur-2xl  max-w-full z-20 flex sm:px-[7.5vw] sm:pt-[2.222vw] py-[6vw] px-[5vw] sm:pb-[4.444vw] space-y-[3.75vw] w-full">
            <div className='w-full flex flex-col space-y-4 '>
                <div className=' w-full border-b-1 border-[#1e1e1e] pb-1     ' >
                    <button className='w-full flex items-center justify-between '
                        onClick={ () => toggleDropdown("collection")}>
                        <span className='text-lg'>Collection</span>
                        {isOpen === "collection" ?  <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isOpen === "collection" && (
                        <div className="space-y-4 text-[#404040] text-sm  py-[5vw] px-[9vw] ">
            <div><Link to="/shopAll" onClick={()=>handleClick("shopAll")}>Shop All</Link></div>
                            <div>Blouses & Top</div>
                            <div>Pants</div>
                            <div>Dress & Jumpsuits</div>
                            <div>Outwear & Jackets</div>
                            <div>Pullovers</div>
                            <div>Tees</div>
                            <div>Shots & Skirts</div>
                        </div>
                    )}
                </div>
                <div className=' w-full border-b-1 border-[#1e1e1e] pb-1     ' >
                    <button className='w-full flex items-center justify-between '
                        onClick={ () => toggleDropdown("newin")}>
                        <span className='text-lg'>New In</span>
                        {isOpen === "newin" ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isOpen === "newin" && (
                        <div className="space-y-4 text-[#404040] text-sm  py-[5vw] px-[9vw] ">
                            <div>Shop All</div>
                            <div>Blouses & Top</div>
                            <div>Pants</div>
                            <div>Dress & Jumpsuits</div>
                            <div>Outwear & Jackets</div>
                            <div>Pullovers</div>
                            <div>Tees</div>
                            <div>Shots & Skirts</div>
                        </div>
                    )}
                </div>
                <div className=' w-full border-b-1 border-[#1e1e1e] pb-1     ' >
                    <button className='w-full flex items-center justify-between '
                        onClick={ () => toggleDropdown("zhopfest")}>
                        <span className='text-lg'>ZhopFest</span>
                        {isOpen === "zhopfest" ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isOpen === "zhopfest"  && (
                        <div className="space-y-4 text-[#404040] text-sm  py-[5vw] px-[9vw] ">
                            <div>Shop All</div>
                            <div>Blouses & Top</div>
                            <div>Pants</div>
                            <div>Dress & Jumpsuits</div>
                            <div>Outwear & Jackets</div>
                            <div>Pullovers</div>
                            <div>Tees</div>
                            <div>Shots & Skirts</div>
                        </div>
                    )}
                </div>
                <div className=' w-full border-b-1 border-[#1e1e1e] pb-1     ' >
                    <button className='w-full flex items-center justify-between '
                        onClick={ () => toggleDropdown("plussize")}>
                        <span className='text-lg'>Plus Size</span>
                        {isOpen === "plussize" ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isOpen === "plussize" && (
                        <div className="space-y-4 text-[#404040] text-sm  py-[5vw] px-[9vw] ">
                            <div>Shop All</div>
                            <div>Blouses & Top</div>
                            <div>Pants</div>
                            <div>Dress & Jumpsuits</div>
                            <div>Outwear & Jackets</div>
                            <div>Pullovers</div>
                            <div>Tees</div>
                            <div>Shots & Skirts</div>
                        </div>
                    )}
                </div>
                <div className=' w-full border-b-1 border-[#1e1e1e] pb-1     ' >
                    <button className='w-full flex items-center justify-between '
                        onClick={ () => toggleDropdown("sustainbility")}>
                        <span className='text-lg'>Sustainbility</span>
                        {isOpen === "sustainbility" ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {isOpen === "sustainbility" && (
                        <div className="space-y-4 text-[#404040] text-sm  py-[5vw] px-[9vw] ">
                            <div>Mission</div>
                            <div>Blouses & Top</div>
                            <div>Processing</div>
                            <div>Materials</div>
                            <div>Packing</div>
                            <div>Product Care</div>
                            <div>Our Suppliers</div>
                        </div>
                    )}
                </div>

                <div className=' w-full flex justify-between ' >
                <button className='border w-[48%] flex justify-center items-center gap-4 p-[4vw] text-[14px]'><FaRegUser className='w-[24px] h-auto'/><span >Log In</span></button><button className='border w-[48%] p-[4vw] text-[14px]' onClick={()=>handleClick("signin")}>Create Account</button>
            </div>
            </div>
            

        </div>
    )
}

export default Menu;
