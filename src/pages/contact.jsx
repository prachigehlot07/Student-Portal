function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-purple-900 text-white px-6 py-12">
      <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-purple-300 mb-4">Contact Us</h1>
        <p className="text-purple-100 mb-6">
          Got feedback? Questions? Random compliments? We’re listening 💌
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-purple-200">Name</label>
            <input
              type="text"
              className="w-full bg-white/10 text-white border border-purple-500/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-purple-200">Email</label>
            <input
              type="email"
              className="w-full bg-white/10 text-white border border-purple-500/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-purple-200">Message</label>
            <textarea
              rows="4"
              className="w-full bg-white/10 text-white border border-purple-500/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
