import axios from 'axios';

const Stadiumsurl = 'https://polar-tundra-98856.herokuapp.com/JSON/Data.json';

const FetchData = async () => {
    try {
      const { data} = await axios.get(Stadiumsurl);
        console.log(data)
      return data;
    } catch (error) {
    }
  }
  export default FetchData;


