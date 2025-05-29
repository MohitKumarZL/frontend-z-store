import { FiArrowRight } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTiktok,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#404040] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left*/}
        <div className="flex-1">
          <h2 className="font-semibold text-lg mb-4">
            Join Our Club, Get 15% Off For Your Birthday
          </h2>

          <div className="flex items-center border border-gray-400 p-1 pr-2 max-w-md mb-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-transparent outline-none px-2 text-sm placeholder:text-[#D1D9CF]"
            />
            <button>
              <FiArrowRight className="text-white text-lg" />
            </button>
          </div>

          <label className="text-xs text-[#D1D9CF] flex items-start gap-2">
            <input type="checkbox" className="mt-[2px]" />
            By submitting your email, you agree to receive advertising emails
            from Z-Store.
          </label>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-5 sm:mt-20 text-xl text-white">
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
            <FaTiktok />
          </div>
        </div>

        {/* Right*/}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm flex-1">
          <div>
            <h3 className="font-semibold text-base mb-4">About Z-Store</h3>
            <ul className="space-y-2 text-[#D1D9CF]">
              <li>Collection</li>
              <li>Sustainability</li>
              <li>Privacy Policy</li>
              <li>Support System</li>
              <li>Terms & Condition</li>
              <li>Copyright Notice</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Help & Support</h3>
            <ul className="space-y-2 text-[#D1D9CF]">
              <li>Orders & Shipping</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Join Up</h3>
            <ul className="space-y-2 text-[#D1D9CF]">
              <li>Z Club</li>
              <li>Careers</li>
              <li>Visit Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom  */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1D9CF] border-t border-gray-600 pt-4">
        <div className="flex items-center gap-1">
          <FaRegCopyright /> 2025 Z-Store. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
