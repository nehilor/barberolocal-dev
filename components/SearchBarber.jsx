export default function SearchBarber() {
      return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto -mt-20 relative z-10">
          <h2 className="text-2xl font-bold mb-6">Find a Barber</h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="City or ZIP Code"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Service</option>
              <option value="haircut">Haircut</option>
              <option value="shave">Shave</option>
              <option value="beard-trim">Beard Trim</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search Barbers
            </button>
          </form>
        </div>
      );
    }
