import React from 'react'

const AddPlant = () => {
  let [data, setData] = useState([]);
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
  return (
    <div>AddPlant</div>
  )
}

export default AddPlant