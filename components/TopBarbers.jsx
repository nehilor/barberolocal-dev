export default function TopBarbers() {
      const barbers = [
        {
          id: 1,
          name: "John's Barbershop",
          rating: 4.9,
          image: "/images/barber1.jpg",
          services: ["Haircut", "Shave", "Beard Trim"],
        },
        // Add more barbers here
      ];

      return (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Top Rated Barbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {barbers.map((barber) => (
                <div
                  key={barber.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{barber.name}</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="ml-2 text-gray-600">
                        ({barber.rating})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {barber.services.map((service) => (
                        <span
                          key={service}
                          className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
