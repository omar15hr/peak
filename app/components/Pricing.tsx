import { CheckIcon } from "./Icons";

export default function Pricing() {
  const plans = [
    {
      name: "Quick Templates",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 12,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Solución a la medida",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 35,
      isMostPop: true,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Shopify Templates",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 60,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto text-center">
          <h3 className="text-[#191715] text-3xl font-bold sm:text-4xl">
            Nos adaptamos a lo que necesitas
          </h3>
          <div className="mt-3 max-w-xl text-[#71717A]">
            <p>Revisa los planes que tenemos para ti.</p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative shadow-md flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0 ${
                item.isMostPop
                  ? "mt-10 bg-[#191715] text-white"
                  : "bg-[#F9F8F6]"
              }`}
            >
              {item.isMostPop ? (
                <span className="w-full absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-md shadow-md bg-linear-to-br from-[#18CD40] to-[#191715] text-center text-white text-sm font-semibold">
                  Recomendado
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4">
                {item.isMostPop ? (
                  <span className="text-white font-bold text-xl">
                    {item.name}
                  </span>
                ) : (
                  <span className="text-black font-bold text-xl">
                    {item.name}
                  </span>
                )}
                <p>{item.desc}</p>
                <button className="px-3 text-[#191715] py-4 rounded-lg w-full font-semibold text-sm duration-150 bg-[#18CD40] hover:bg-[#18CD40]/80 active:bg-[#18CD40]/80 cursor-pointer">
                  Empecemos con tu proyecto
                </button>
              </div>
              <ul className="p-8 space-y-3">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#00c48c]">
                      <CheckIcon />
                    </div>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
