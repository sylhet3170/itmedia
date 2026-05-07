export default function ShopWebsite() {
  const services = [
    {
      title: "কম্পিউটার সার্ভিসিং",
      desc: "ডেস্কটপ ও ল্যাপটপ সার্ভিসিং, সফটওয়্যার সেটআপ ও সমস্যা সমাধান।",
    },
    {
      title: "প্রিন্ট ও ফটোকপি",
      desc: "রঙিন ও সাদা-কালো প্রিন্ট, স্ক্যান ও ফটোকপি সার্ভিস।",
    },
    {
      title: "অনলাইন আবেদন",
      desc: "পাসপোর্ট, এনআইডি, চাকরি আবেদন ও বিভিন্ন অনলাইন ফর্ম পূরণ।",
    },
    {
      title: "ডিজাইন সার্ভিস",
      desc: "ব্যানার, পোস্টার, বিজনেস কার্ড ও সোশ্যাল মিডিয়া ডিজাইন।",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-700 text-white py-10 px-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold">IT Media Service Center</h1>
        <p className="mt-3 text-lg">
          সকল ডিজিটাল ও অনলাইন সার্ভিস একসাথে
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-white py-12 px-6 mt-6 shadow-inner">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">যোগাযোগ করুন</h2>
          <p className="text-lg">📞 Phone: 01XXXXXXXXX</p>
          <p className="text-lg mt-2">📍 Sylhet, Bangladesh</p>
          <p className="text-lg mt-2">✉ Email: yourshop@gmail.com</p>

          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-2xl text-lg shadow hover:scale-105 transition"
          >
            WhatsApp যোগাযোগ
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2026 IT Media Service Center. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
