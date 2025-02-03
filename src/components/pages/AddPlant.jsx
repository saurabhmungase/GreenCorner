import React from 'react'

const AddPlant = () => {
  let [data, setData] = useState([
    {
    "name": "",
    "id": '',
    "description" :"",
    "price": 0,
    "rating": 4.5,
    
    
    "totalSalesLastMonth": 50,
    "sellerName": "Pune Plant Co.",
    "sellerAddress": {
      "street": "Bhosale Nagar",
      "city": "Pune",
      "state": "Maharashtra",
      "country": "India",
      "pincode": "411007"
    },
    "availability": "In Stock",
    "quantityAvailable": 100,
    "categories": [
      "Outdoor Plants",
      "Indoor Plants",
      "Flowering Plants"
    ],
    "sunlightRequirement": "Full Sun",
    "moistureRequirement": "Medium",
    "soilType": "Loamy soil",
    "season": "Winter, Spring",
    "growthRate": "Moderate",
    "potSizeRequired": "Medium",
    "genus": "Rosa",
    "localName": "गुलाब (Gulab)",
    "regionalName": "गुलाब (Gulab)",
    "biologicalName": "Rosa spp.",
    "botanicalName": "Rosa hybrida",
    "tags": [
      "Gift Ideas",
      "Flowering Plants",
      "Indoor Decor"
    ],
    "shippingStates": [
      "Maharashtra",
      "Goa",
      "Karnataka"
    ],
    "primaryImage": "https://nurserylive.com/cdn/shop/products/nurserylive-miniature-rose-button-rose-yellow-plant_600x600.jpg?v=1634224134",
    "secondaryImages": [
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-rose-orange-plant_600x600.jpg?v=1634227422",
      "https://nurserylive.com/cdn/shop/products/nurserylive-rose-orange-plant-1_540x720.jpg?v=1634227420",
      "https://nurserylive.com/cdn/shop/products/nurserylive-rose-orange-plant-4_540x720.jpg?v=1634227413",
      "https://nurserylive.com/cdn/shop/products/nurserylive-g-rose-orange-plant_600x600.jpg?v=1634227422"
    ],
 
  }
  ]);
  useEffect(() => {
    axios.get("http://116.75.62.44:8000/plants").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  const addNewPlantFunc = (obj) => {
    axios.post("http://116.75.62.44:8000/addPlant", obj).then(() => {
      axios.get("http://116.75.62.44:8000/plants").then((res) => {
        setData(res.data);
      });
    });
  };
  return (
    <div>AddPlant</div>
  )
}

export default AddPlant