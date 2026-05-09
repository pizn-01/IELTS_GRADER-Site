import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGrade } from '../context/GradeContext';
import { Coins, User, Shield, CreditCard, HelpCircle, LogOut } from 'lucide-react';

const Navbar = ({ showCredits }) => {
  const { userStatus, setUserStatus } = useGrade();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setUserStatus(prev => ({ ...prev, isLoggedIn: false }));
    setIsProfileOpen(false);
  };

  return (
    <nav className="h-[72px] sticky top-0 left-0 w-full bg-white z-[1000] border-b border-[#E5E7EB]">
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center">
        {/* Logo */}
        <Link to="/" className="text-[19px] font-extrabold text-[#1a1f36] uppercase tracking-tight cursor-pointer shrink-0 no-underline">
          IELTSGRADER
        </Link>

        {/* Vertical Divider */}
        <div className="w-[1px] h-[20px] bg-[#D1D5DB] mx-4 shrink-0"></div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {['About', 'How it works', 'Sample Report', 'FAQS', 'Contact'].map((link) => (
            <li key={link}>
              <a
                href={`/#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[14px] font-semibold text-[#4B5563] no-underline hover:text-[#1a1f36] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-6">
          {showCredits && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#EFF6FF] rounded-full border border-[#DBEAFE]">
              <Coins className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-[13px] font-bold text-[#1e40af]">{userStatus.credits}/5 Remaining</span>
            </div>
          )}

          {userStatus.isLoggedIn ? (
            <div className="flex items-center gap-6 relative" ref={dropdownRef}>
              <Link 
                to="/dashboard" 
                className="text-[14px] font-semibold text-[#0066FF] no-underline hover:text-[#0052CC] transition-colors"
              >
                Switch to Dashboard
              </Link>
              
              <button className="p-0 bg-transparent border-none cursor-pointer text-[#9CA3AF] hover:text-[#6B7280] transition-colors flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" fill="currentColor"/>
                </svg>
              </button>

              {/* Profile Icon Button */}
              <div 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="w-[38px] h-[38px] bg-[#313E50] rounded-[10px] flex items-center justify-center text-white text-[14px] font-bold tracking-tight cursor-pointer hover:bg-[#252f3d] transition-colors shadow-sm"
              >
                {userStatus.firstName?.[0]?.toUpperCase()}{userStatus.lastName?.[0]?.toUpperCase()}
              </div>

              {/* Dropdown Modal */}
              {isProfileOpen && (
                <div className="absolute top-[50px] right-0 w-[280px] bg-white rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#F3F4F6] py-4 z-[1001] animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* User Header */}
                  <div className="px-6 py-2 flex items-center gap-4 mb-2">
                    <div className="w-[52px] h-[52px] bg-[#313E50] rounded-full flex items-center justify-center text-white text-[18px] font-bold">
                      {userStatus.firstName?.[0]?.toUpperCase()}{userStatus.lastName?.[0]?.toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-bold text-[#111827]">{userStatus.firstName} {userStatus.lastName}</span>
                      <span className="text-[14px] text-[#6B7280]">{userStatus.email}</span>
                    </div>
                  </div>

                  <div className="h-[1px] bg-[#F3F4F6] mx-6 my-3"></div>

                  {/* Links */}
                  <div className="flex flex-col px-3">
                    {[
                      { icon: <User className="w-[18px] h-[18px]" />, label: 'Profile' },
                      { icon: <Shield className="w-[18px] h-[18px]" />, label: 'Security' },
                      { icon: <CreditCard className="w-[18px] h-[18px]" />, label: 'Subscription' },
                      { icon: <HelpCircle className="w-[18px] h-[18px]" />, label: 'Support' },
                    ].map((item) => (
                      <button 
                        key={item.label}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-[10px] hover:bg-[#F9FAFB] text-[#374151] hover:text-[#111827] transition-all border-none bg-transparent cursor-pointer text-left"
                      >
                        <span className="text-[#6B7280]">{item.icon}</span>
                        <span className="text-[14px] font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="h-[1px] bg-[#F3F4F6] mx-6 my-3"></div>

                  {/* Logout */}
                  <div className="px-3">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-[10px] hover:bg-[#F0F7FF] text-[#0066FF] transition-all border-none bg-transparent cursor-pointer text-left"
                    >
                      <LogOut className="w-[18px] h-[18px]" />
                      <span className="text-[14px] font-semibold">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-[#1a1f36] text-white px-6 py-2 rounded-[8px] text-[14px] font-bold no-underline hover:bg-[#2a2f46] transition-colors flex items-center justify-center h-[40px]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
