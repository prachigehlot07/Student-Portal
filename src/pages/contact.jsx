function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Got feedback? Questions? Random compliments? We’re listening 💌
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
