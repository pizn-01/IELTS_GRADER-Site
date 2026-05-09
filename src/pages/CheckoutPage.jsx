import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, CreditCard } from 'lucide-react';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'johndoe@gmail.com',
    cardNumber: '',
    expiry: '',
    cvc: '',
    cardholderName: '',
    country: 'Nigeria',
    address1: '',
    address2: '',
    suburb: '',
    city: '',
    postalCode: '',
    state: ''
  });

  const price = 24.99;

  const handleSubscribe = () => {
    // In a real app, payment processing would happen here
    navigate('/report');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-['Inter',_sans-serif]">
      
      {/* Left Column: Summary (Sky Blue) - 50/50 Split */}
      <div className="w-full lg:w-1/2 bg-[#4FA1FF] text-white flex flex-col min-h-screen" style={{ padding: '48px 0 48px 0' }}>
        <div className="max-w-[380px] w-full" style={{ margin: '0 auto 0 28%' }}>
          {/* Logo & Back */}
          <div className="flex items-center gap-3 mb-14">
            <button onClick={() => navigate(-1)} className="hover:opacity-80 transition-opacity">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center p-1.5">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <span className="text-[14px] font-bold tracking-tight">IELTSGRADER</span>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold mb-1 opacity-90">Subscription fee</p>
            <div className="flex items-end gap-2 mb-12">
              <span className="text-[44px] font-extrabold leading-none tracking-tight">${price}</span>
              <div className="text-[11px] font-medium leading-[1.3] pb-1 opacity-90">
                Per <br /> month
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-[13px] font-semibold">Premium Plan - Academic Monthly Masterty</span>
                  <span className="text-[13px] font-semibold">${price}</span>
                </div>
                <p className="text-[11px] opacity-70">Billed monthly</p>
              </div>

              <div className="w-full h-[1px] bg-white/20"></div>

              <div className="space-y-2.5">
                <div className="flex justify-between text-[13px]">
                  <span className="font-medium opacity-90">Subtotal</span>
                  <span className="font-semibold">${price}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="font-medium opacity-90">Tax</span>
                  <span className="font-semibold">$0.00</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-white/20"></div>

              <div className="relative">
                <input 
                  type="text"
                  placeholder="Add Promotion Code"
                  className="w-full h-[44px] px-4 bg-white/15 border border-white/10 rounded-[6px] text-[13px] text-white placeholder:text-white/70 outline-none focus:bg-white/25 transition-all"
                />
              </div>

              <div className="w-full h-[1px] bg-white/20"></div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-[14px] font-bold">Total due today</span>
                <span className="text-[14px] font-bold">${price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Payment Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-start bg-white overflow-y-auto" style={{ padding: '48px 0' }}>
        <div className="w-full max-w-[380px] space-y-6">
          
          {/* Contact Info */}
          <section>
            <h2 className="text-[15px] font-semibold text-[#1a1f36] mb-3">Contact information</h2>
            <div className="w-full h-[44px] px-4 bg-[#F3F4F6] border border-[#E5E7EB] rounded-[6px] flex items-center justify-between">
              <span className="text-[13px] text-[#6B7280]">Email</span>
              <span className="text-[13px] text-[#111827] font-medium">{formData.email}</span>
            </div>
          </section>

          {/* Payment Method */}
          <section>
            <h2 className="text-[15px] font-bold text-[#1a1f36] mb-3">Payment method</h2>
            
            <div className="space-y-4">
              {/* Card Number Area */}
              <div>
                <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Card information</label>
                <div className="border border-[#E5E7EB] rounded-[6px] overflow-hidden bg-white">
                  <div className="h-[44px] px-4 flex items-center justify-between border-b border-[#E5E7EB]">
                    <input type="text" placeholder="Enter text" className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-[#9CA3AF]" />
                    <div className="flex items-center gap-1.5">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MC" className="h-4" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-3" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PP" className="h-3" />
                    </div>
                  </div>
                  <div className="flex h-[44px]">
                    <input type="text" placeholder="MM / YY" className="w-2/3 px-4 border-r border-[#E5E7EB] outline-none text-[13px] placeholder:text-[#9CA3AF]" />
                    <div className="w-1/3 px-4 flex items-center justify-between">
                      <input type="text" placeholder="CVC" className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-[#9CA3AF]" />
                      <CreditCard className="w-4 h-4 text-[#9CA3AF]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Cardholder name</label>
                <input 
                  type="text"
                  placeholder="Full name on card"
                  className="w-full h-[44px] px-4 border border-[#E5E7EB] rounded-[6px] text-[13px] outline-none focus:border-[#4FA1FF] transition-all placeholder:text-[#9CA3AF]"
                />
              </div>

              {/* Billing Address Group */}
              <div>
                <label className="block text-[13px] font-medium text-[#374151] mb-1.5">Country or region</label>
                <div className="border border-[#E5E7EB] rounded-[6px] overflow-hidden bg-white">
                  <div className="relative h-[44px] px-4 flex items-center bg-white border-b border-[#E5E7EB]">
                    <span className="text-[13px] text-[#111827] flex-1">{formData.country}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" />
                  </div>
                  <input type="text" placeholder="Address line 1" className="w-full h-[44px] px-4 border-b border-[#E5E7EB] text-[13px] outline-none placeholder:text-[#9CA3AF]" />
                  <input type="text" placeholder="Address line 2" className="w-full h-[44px] px-4 border-b border-[#E5E7EB] text-[13px] outline-none placeholder:text-[#9CA3AF]" />
                  <input type="text" placeholder="Suburb" className="w-full h-[44px] px-4 border-b border-[#E5E7EB] text-[13px] outline-none placeholder:text-[#9CA3AF]" />
                  <div className="flex h-[44px] border-b border-[#E5E7EB]">
                    <input type="text" placeholder="City" className="w-2/3 px-4 border-r border-[#E5E7EB] outline-none text-[13px] placeholder:text-[#9CA3AF]" />
                    <input type="text" placeholder="Postal code" className="w-1/3 px-4 outline-none text-[13px] placeholder:text-[#9CA3AF]" />
                  </div>
                  <div className="relative h-[44px] px-4 flex items-center bg-white">
                    <span className="text-[13px] text-[#9CA3AF] flex-1">State</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <button 
            onClick={handleSubscribe}
            className="w-full h-[48px] bg-[#4FA1FF] text-white rounded-[6px] font-bold text-[15px] mt-2 hover:bg-[#3b8de6] transition-all active:scale-[0.99]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
