const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {}
          <div className="lg:col-span-2">
            <a className="text-xl font-bold flex gap-2 items-center cursor-pointer mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 flex items-center justify-center text-white text-sm">
                DS
              </div>
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Dev Stack
              </span>
            </a>
            <p className="text-gray-500 mb-6 max-w-sm">
Curated tools, technologies, and resources for developers building
modern software.            </p>
            {}
            <div className="flex gap-4 font-medium">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">LinkedIn</a>
            </div>
          </div>

          {}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Product</h3>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-pink-500 transition">Home </a></li>
              <li><a href="#" className="hover:text-pink-500 transition">technology</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Project</a></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-pink-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Careers</a></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Legal</h3>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-pink-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Terms of Service</a></li>

     
            </ul>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;