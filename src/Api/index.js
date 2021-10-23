import axios from 'axios';

const url = 'https://polar-tundra-98856.herokuapp.com/JSON/Stadiums.json';

const FetchData = async () => {
    try {
      const { data:{Sheet2}} = await axios.get(url);
        
      return Sheet2;
    } catch (error) {
    }
  }
  export default FetchData;