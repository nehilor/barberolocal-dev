export default function JoinSection() {
      return (
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Are You a Barber? Join Our Platform!
            </h2>
            <p className="text-xl mb-8">
              Reach more clients, manage your appointments, and grow your
              business with BarberConnect
            </p>
            <Link
              href="/signup?role=barber"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Sign Up as Barber
            </Link>
          </div>
        </section>
      );
    }
