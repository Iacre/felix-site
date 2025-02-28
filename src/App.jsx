import React, { useState } from "react";
import "./index.css";

function JourneyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      {/* Modal Overlay */}
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-scroll p-8 relative shadow-2xl"
        // Ensure modal is scrollable and fits within viewport
      >
        {/* Close Button - Larger, More Visible */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold hover:bg-blue-700 transition"
          aria-label="Close Modal"
        >
          ×
        </button>

        {/* Modal Content */}
        <h2 className="text-4xl font-bold text-primary text-center mb-12">My Journey</h2>
        <div className="space-y-16">
          {/* Childhood */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img
              src="/c.jpg" // Replace with actual path
              alt="Childhood"
              className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Humble Beginnings</h3>
              <p className="text-lg leading-relaxed">
                I was born into a poor family in a small village in Africa. Life was tough—food was scarce, and opportunities were even scarcer. My parents worked tirelessly, but we lived in a mud-brick house with no electricity or running water. Despite the odds, I dreamed of a better future.
              </p>
            </div>
          </div>

          {/* Education Struggles */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <img
              src="/s.jpg"
              alt="School Days"
              className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">The Fight for Education</h3>
              <p className="text-lg leading-relaxed">
                Studying wasn’t easy. I walked miles to a rundown school with few books and fewer teachers. At home, I studied by candlelight, determined to rise above my circumstances. Discipline became my strength—I avoided the temptations that derailed many peers, like drinking or skipping school. My commitment paid off with top grades, but the path was grueling.
              </p>
            </div>
          </div>

          {/* Finding Faith */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img
              src="/lig.jpg"
              alt="Finding God"
              className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">A Guiding Light</h3>
              <p className="text-lg leading-relaxed">
                As a teenager, I discovered God. Faith became my anchor, steering me away from the pitfalls of youth—drugs, crime, despair—that claimed so many around me. I joined a local church, and prayer gave me clarity and purpose. It wasn’t just survival anymore; I felt called to serve and succeed.
              </p>
            </div>
          </div>

          {/* Graduation & Move to Canada */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <img
              src="/g.jpg"
              alt="Graduation"
              className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">A New Horizon</h3>
              <p className="text-lg leading-relaxed">
                After years of hard work, I graduated with a scholarship to study in Canada. Leaving Africa was bittersweet, but in 2005, I earned an M.Sc. in Cybersecurity from the University of Toronto. Canada offered new opportunities, and I seized them—starting small jobs, learning the ropes, and dreaming big.
              </p>
            </div>
          </div>

          {/* Success with Pauline */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img
              src="/l.jpg"
              alt="With Pauline"
              className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Building a Legacy</h3>
              <p className="text-lg leading-relaxed">
                In Canada, I met Pauline, my rock and partner. Her wisdom and unwavering support fueled my ambitions. Together, we founded CyberPro Group in 2010, starting from a tiny office. Pauline’s strategic mind helped us expand to branches in Cameroon, the US, Canada, and Rwanda. She stood by me as I grew Light Christian Center and invested in Africa’s online banking revolution. Today, our success is a testament to faith, discipline, and her incredible role in my life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bgGray font-sans text-gray-800">
      {/* Hero Section */}
      <header className="bg-primary text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-blue-900 opacity-80"></div>
        <div className="relative z-10">
          <img
            src="/navg.jpg"
            alt="Felix Navaga"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-secondary"
          />
          <h1 className="text-5xl md:text-6xl font-bold">Felix Navaga</h1>
          <p className="text-xl md:text-2xl mt-4">
            CEO of CyberPro Group | Pastor of Light Christian Center | Pan-African Visionary
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-secondary text-primary py-3 px-8 rounded-full font-semibold hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            Explore My Journey
          </button>
        </div>
      </header>

      {/* Modal */}
      <JourneyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* About Section */}
      <section className="py-20 px-6 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <p className="text-lg leading-relaxed md:w-2/3">
            I’m Felix Navaga, a cybersecurity pioneer leading CyberPro Group, a global firm with branches in Cameroon, the US, Canada, and Rwanda. As the pastor of Light Christian Center, I serve my community with faith and compassion. My passion for Africa drives my investments in secure online banking solutions, aiming to transform the continent’s digital future.
          </p>
          <img
            src="/navg.jpg"
            alt="Felix Navaga at Work"
            className="md:w-1/3 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CyberPro Group Section */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-10">CyberPro Group</h2>
          <p className="text-lg text-center mb-12">
            CyberPro Group is a world-class cybersecurity firm protecting businesses and individuals across four continents. Our branches in Cameroon, the US, Canada, and Rwanda deliver tailored, cutting-edge solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Cameroon", "US", "Canada", "Rwanda"].map((location) => (
              <div key={location} className="text-center">
                <img
                  src={`/public/location/${location.toLowerCase()}.jpg`}
                  alt={`${location} Branch`}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <p className="text-lg font-semibold">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light Christian Center Section */}
      <section className="py-20 px-6 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">Light Christian Center</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <p className="text-lg leading-relaxed md:w-2/3">
            As the pastor of Light Christian Center, I lead with a mission to inspire faith, hope, and unity. Based in Canada, our church is a beacon of light, fostering spiritual growth and community outreach.
          </p>
          <img
            src="/lig.jpg"
            alt="Light Christian Center"
            className="md:w-1/3 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-10">My Vision</h2>
          <p className="text-lg text-center mb-12">
            I’m committed to revolutionizing Africa’s digital landscape by investing in secure online banking and IT infrastructure, driving economic empowerment and connectivity.
          </p>
          <img
            src="/bn.jpg"
            alt="Online Banking Vision"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-10">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="/a1.jpg"
              alt="Award Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-primary">Cybersecurity Leader</h3>
            <p className="text-gray-600">Grew CyberPro Group into a multi-national firm in 5 years.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="/a2.jpg"
              alt="Community Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-primary">Community Impact</h3>
            <p className="text-gray-600">Expanded Light Christian Center to 1,000+ members.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="/a3.jpg"
              alt="Investment Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-primary">Pan-African Innovator</h3>
            <p className="text-gray-600">Launched secure banking platforms in 3 African countries.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-10">Education</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <img
                src="/deg.png"
                alt="Degree Icon"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-semibold text-primary">M.Sc. in Cybersecurity</h3>
                <p className="text-gray-600">University of Toronto, Canada (2005-2007)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="/deg.png"
                alt="Degree Icon"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-semibold text-primary">B.A. in Theology</h3>
                <p className="text-gray-600">McGill University, Canada (2000-2004)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-primary text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-2"><a href="mailto:navagafelix@gmail.com">Email: felix.navaga@cyberprogroup.com</a></p>
        <p className="text-lg mb-6">Location: Based in Canada, Serving Globally</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-secondary hover:text-yellow-600">
            <img src="/link.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="#" className="text-secondary hover:text-yellow-600">
            <img src="/x.png" alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;