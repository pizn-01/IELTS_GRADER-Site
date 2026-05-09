import React, { useState } from 'react';
import { Check, Sparkles, ChevronDown, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIProcessingModal from '../components/AIProcessingModal';
import PremiumConfirmationModal from '../components/PremiumConfirmationModal';
import { useGrade } from '../context/GradeContext';

const SelectionPage = () => {
  const navigate = useNavigate();
  const { startGrading, gradingStatus, setGradingStatus } = useGrade();
  const [trainingType, setTrainingType] = useState('Academic'); 
  const [selectedPlan, setSelectedPlan] = useState('Monthly'); 
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    startGrading();
  };

  const handlePremiumClick = () => {
    setShowPremiumModal(true);
  };

  const handleConfirmPremium = () => {
    setShowPremiumModal(false);
    navigate('/checkout');
  };

  const onGradingComplete = () => {
    setGradingStatus('completed');
    navigate('/report');
  };

  return (
    <div className="min-h-screen bg-white font-['Inter',_sans-serif]">
      <div className={`transition-all duration-700 ${gradingStatus === 'processing' ? 'blur-md pointer-events-none' : 'blur-0'}`}>
        <Navbar />
        
        <main className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-[32px] font-extrabold text-[#1a1f36] mb-2">Your essay is ready for analysis.</h1>
            <p className="text-[18px] text-[#1a1f36] font-medium">Choose your plan to reveal your score.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-[1100px] mx-auto">
            
            {/* Left Column: Free Plan / Sign Up */}
            <div className="bg-white rounded-[20px] p-10 border-2 border-[#3B82F6] shadow-[0_10px_40px_rgba(59,130,246,0.06)] relative flex flex-col">
              <h2 className="text-[24px] font-bold text-[#1a1f36] mb-1">Free Plan</h2>
              <p className="text-[14px] text-[#6B7280] mb-8">Get your first comprehensive report - No card needed.</p>

              <form onSubmit={handleSignup} className="space-y-4 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#4B5563] mb-1.5">First Name</label>
                    <input type="text" placeholder="Enter First Name" className="w-full h-[44px] px-4 bg-white border border-[#E5E7EB] rounded-[8px] text-[14px] focus:border-[#3B82F6] outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#4B5563] mb-1.5">Last Name</label>
                    <input type="text" placeholder="Enter Last Name" className="w-full h-[44px] px-4 bg-white border border-[#E5E7EB] rounded-[8px] text-[14px] focus:border-[#3B82F6] outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#4B5563] mb-1.5">Email</label>
                  <input type="email" placeholder="Enter Email" className="w-full h-[44px] px-4 bg-white border border-[#E5E7EB] rounded-[8px] text-[14px] focus:border-[#3B82F6] outline-none transition-all" />
                </div>

                <div className="relative">
                  <label className="block text-[13px] font-medium text-[#4B5563] mb-1.5">Create Password</label>
                  <input type="password" placeholder="Enter Password" className="w-full h-[44px] px-4 bg-white border border-[#E5E7EB] rounded-[8px] text-[14px] focus:border-[#3B82F6] outline-none transition-all pr-10" />
                  <div className="absolute right-3 top-[38px] text-[#9CA3AF] cursor-pointer">
                    <EyeOff className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[13px] font-medium text-[#4B5563] mb-1.5">Confirm Password</label>
                  <input type="password" placeholder="Re-enter Password" className="w-full h-[44px] px-4 bg-white border border-[#E5E7EB] rounded-[8px] text-[14px] focus:border-[#3B82F6] outline-none transition-all pr-10" />
                  <div className="absolute right-3 top-[38px] text-[#9CA3AF] cursor-pointer">
                    <EyeOff className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-[12px] text-[#6B7280] leading-relaxed py-1">
                  By clicking sign up, you agree to our <a href="#" className="text-[#3B82F6] underline">Terms of Service</a> and <a href="#" className="text-[#3B82F6] underline">Privacy Policy</a>.
                </p>

                <button type="submit" className="w-full h-[50px] bg-[#1a1f36] text-white rounded-[8px] font-bold text-[15px] hover:bg-[#2a2f46] transition-all">
                  Sign Up & Claim Free Report
                </button>
              </form>

              <div className="text-center mt-6">
                <p className="text-[14px] text-[#4B5563]">Already have an account? <button onClick={() => navigate('/login')} className="text-[#3B82F6] font-bold">Login</button></p>
              </div>

              <div className="relative flex items-center justify-center my-6">
                <div className="flex-1 border-t border-[#E5E7EB]"></div>
                <span className="mx-4 text-[13px] text-[#9CA3AF] uppercase">or</span>
                <div className="flex-1 border-t border-[#E5E7EB]"></div>
              </div>

              <button className="w-full h-[50px] bg-white border border-[#E5E7EB] rounded-[8px] flex items-center justify-center gap-3 text-[14px] font-bold text-[#1a1f36] hover:bg-[#F9FAFB] transition-all">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                Sign up with Google
              </button>
            </div>

            {/* Right Column: Premium Plan */}
            <div className="bg-white rounded-[20px] p-10 border border-[#E5E7EB] shadow-sm relative flex flex-col">
              <div className="absolute top-6 right-6 bg-[#EFF6FF] text-[#3B82F6] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recommended
              </div>

              <h2 className="text-[24px] font-bold text-[#1a1f36] mb-8">Premium Plan</h2>

              {/* Sub-Tabs */}
              <div className="bg-[#F3F4F6] p-1 rounded-lg flex items-center mb-8">
                {['Academic', 'General Training'].map(type => (
                  <button
                    key={type}
                    onClick={() => setTrainingType(type)}
                    className={`flex-1 py-2 text-[13px] font-bold rounded-md transition-all ${
                      trainingType === type ? 'bg-[#3B82F6] text-white shadow-sm' : 'text-[#6B7280] hover:text-[#1a1f36]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Pricing Options */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div 
                  onClick={() => setSelectedPlan('Weekly')}
                  className={`p-4 border-[1.5px] rounded-xl cursor-pointer transition-all ${
                    selectedPlan === 'Weekly' ? 'border-[#3B82F6] bg-white' : 'border-[#E5E7EB] hover:border-[#3B82F6]'
                  }`}
                >
                  <p className="text-[12px] font-bold text-[#6B7280] mb-1">Weekly Sprint</p>
                  <p className="text-[18px] font-extrabold text-[#1a1f36]">$9.99/Week</p>
                </div>
                <div 
                  onClick={() => setSelectedPlan('Monthly')}
                  className={`p-4 border-[1.5px] rounded-xl cursor-pointer transition-all ${
                    selectedPlan === 'Monthly' ? 'border-[#3B82F6] bg-[#EFF6FF]' : 'border-[#E5E7EB] hover:border-[#3B82F6]'
                  }`}
                >
                  <p className="text-[12px] font-bold text-[#6B7280] mb-1">Monthly Mastery</p>
                  <p className="text-[18px] font-extrabold text-[#1a1f36]">$24.99/Month</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "Unlimited Essay Evaluations",
                  "Limit 20 exams per week and 100 exams per month",
                  "Detailed Fix Cards & Grammar Analysis",
                  "Priority Support"
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#52B788] text-white rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-[11px] h-[11px]" strokeWidth={4} />
                    </div>
                    <span className="text-[14px] text-[#374151] font-medium leading-tight">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button onClick={handlePremiumClick} className="w-full h-[54px] bg-[#344054] text-white rounded-[10px] font-bold text-[16px] mb-4 hover:opacity-90 transition-all shadow-md">
                  Subscribe & Unlock Unlimited Practice
                </button>
                <p className="text-center text-[12px] text-[#6B7280]">Cancel anytime. No long-term commitment.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>

      <AIProcessingModal 
        isOpen={gradingStatus === 'processing'} 
        onComplete={onGradingComplete}
      />

      <PremiumConfirmationModal 
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        onConfirm={handleConfirmPremium}
        planName={selectedPlan === 'Weekly' ? 'Weekly Sprint' : 'Monthly Mastery'}
        price={selectedPlan === 'Weekly' ? '9.99/week' : '19.99/month'}
      />
    </div>
  );
};

export default SelectionPage;
