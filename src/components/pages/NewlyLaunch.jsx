import { useContext } from "react"
import { MdOutlineCurrencyRupee, MdLocalShipping } from "react-icons/md"
import { context } from "../../context/AppContext"
import {  useNavigate } from "react-router-dom"

const NewlyLaunch = () => {
  const data = useContext(context)
  let navigate = useNavigate()

  // Fetch the first 4 items from the API data
  const products = data.Allplants.slice(9, 13)

  return (
    <div className="bg-gradient-to-br from-[#83C026]/10 to-[#21543D]/10 rounded-lg w-full max-w-7xl mx-auto my-16 p-8 shadow-lg">
      <h1 className="text-4xl font-bold text-center text-[#21543D] mb-12">🌱 Newly Launched Products</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No products available right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col border border-[#83C026]/20"
            >
              <div className="relative">
                <img
                  src={item.primaryImage || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                  onClick={() => navigate("/details", { state: { item } })}
                />
                <div className="absolute top-0 right-0 bg-[#83C026] text-white px-2 py-1 m-2 rounded-full text-xs font-bold">
                  New
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#21543D] mb-2">{item.name}</h2>
                  <div className="text-[#83C026] font-bold text-2xl flex items-center gap-1 mb-2">
                    <MdOutlineCurrencyRupee />
                    {item.price}
                  </div>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MdLocalShipping className="text-[#21543D]" />
                    <span className="font-semibold">Availability:</span> {item.availability}
                  </p>
                </div>
                <button
                  className="w-full mt-4 bg-[#21543D] text-white py-2 px-4 rounded-lg hover:bg-[#83C026] transition duration-300"
                  onClick={() => alert(`Buying ${item.name}`)} // Replace with actual logic
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

  
    </div>
  )
}

export default NewlyLaunch

