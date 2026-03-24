import { PhoneIcon, Mail, MapPin, User, Headset } from "lucide-react";

type Props = {
  lifeAfterDutyline?: boolean;
};
export default function Contact({ lifeAfterDutyline }: Props) {
  return (
    <section
      id="contact"
      className="px-6 py-16 bg-gradient-to-b from-[#091717]  to-[#105625] text-white gap-12 items-start md:px-24 lg:px-32">
      <h1 className="text-3xl font-bold mb-12">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 mt-20">
          <h1 className="text-5xl font-bold">Our Information</h1>
          <p className="text-[#E6E6E6] leading-relaxed">
            Dutyline can be accessed at anytime and anywhere.
          </p>

          <div className="flex gap-2">
            <p>Our Dutyline 1:</p>
            <p className="text-[#E6E6E6]">+23402045545</p>
          </div>
          <div className="flex gap-2">
            <p>Our Dutyline 2:</p>
            <p className="text-[#E6E6E6]">+23402045546</p>
          </div>
          <div className="flex gap-2">
            <p>Email:</p>
            <p className="text-[#E6E6E6]">dymmyemail.com</p>
          </div>

          <p className="text-lg font-bold mt-4">
            We are open <br />
            <strong>Monday to Thursday</strong>, 09:00 – 17:00 <br />
            <strong> and on Friday...</strong>, 09:00 – 16:00
          </p>

          {/* Call Buttons */}
          {!lifeAfterDutyline && (
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                className="
                flex items-center justify-center 
                w-full sm:w-[266px] h-[58px] gap-3
                border border-[#B3B3B3]
                rounded-full
                bg-transparent
                px-6 py-3
                text-gray-800
                transition
              ">
                <PhoneIcon className="w-6 h-6 text-white" />
                <span className="text-[14px] text-white">
                  Call +234 813 941 4056
                </span>
              </button>

              <button
                className="
                flex items-center justify-center 
                w-full sm:w-[266px] h-[58px] gap-3
                rounded-full
                bg-[#0A1816]
                px-6 py-3
                text-[#E8F2FD]
                hover:bg-[#2d6742]
                transition
              ">
                <Headset className="w-6 h-6" />
                <span className="text-[#ffffff]"> Send us an email</span>
              </button>
            </div>
          )}
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 bg-[#0A1816] rounded-2xl p-8 shadow-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h1>

          <form className="flex flex-col gap-4">
            {/* First Name */}
            <div className="flex justify-between">
              <div>
                <h1 className="mb-1">First Name</h1>
                <div className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 w-full">
                  <User className="w-5 h-5 text-gray-300" />
                  <input
                    type="text"
                    placeholder="E.g Yaqub"
                    className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <h1 className="mb-1">Last Name</h1>
                <div className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 w-full">
                  <User className="w-5 h-5 text-gray-300" />
                  <input
                    type="text"
                    placeholder="E.g Ibrahim"
                    className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <h1 className="mb-1">Email</h1>
              <div className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 w-full">
                <Mail className="w-5 h-5 text-gray-300" />
                <input
                  type="email"
                  placeholder="E.g ahmedaliyubello@gmail.com"
                  className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Base Location */}
            <div>
              <h1 className="mb-1">Base Location</h1>
              <div className="flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 w-full">
                <MapPin className="w-5 h-5 text-gray-300" />
                <input
                  type="text"
                  placeholder="E.g Lagos, Kaduna"
                  className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Complaint */}
            <div>
              <h1 className="mb-1">Your Complaint</h1>
              <div className="flex items-start gap-2 border border-gray-400 rounded-2xl px-4 py-2 w-full">
                <textarea
                  placeholder="E.g I have a voucher card issue"
                  rows={3}
                  className="w-full bg-transparent focus:outline-none text-white placeholder-gray-400 resize-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[58px] rounded-full bg-[#1E7B40] text-white font-semibold hover:opacity-90 transition">
              Submit Complaint
            </button>
          </form>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-300 mt-4 text-center">
            We appreciate your trust in us regarding your data. To gain further
            assurance about our data security practices and the management of
            your personal information, feel free to check out our{" "}
            <a href="#" className="underline text-blue-300">
              Privacy Policy
            </a>{" "}
            for more details.
          </p>
        </div>
      </div>
    </section>
  );
}
