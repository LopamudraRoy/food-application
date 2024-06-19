import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SearchResult from './components/SearchResult';

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setFilteredData(json);
        setData(json);
        setLoading(false);
      }
      catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchData();
  }, []);

  const searchFood = (e) =>{
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  }

  if(error) return <div>{error}</div>
  if(loading) return<div>loading..</div>



  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="./public/Foody Zone.png" alt="" />
        </div>
        <div className="search">
          <input type="" onChange={searchFood} placeholder='search food..' />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>
          <button>All</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </Button>
      </FilterContainer>
      <SearchResult data={filteredData} />
    </Container>
  );
};

const Container = styled.div`
background-color : #323334;
margin: 0 auto;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 140px;
  padding: 16px;
  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      border-radius: 5px;
      height: 40px;
      color: white;
      width: 285px;
      padding:10px;
      font-size: 16px;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:12px;
  padding-bottom: 20px;
`;

export const Button = styled.div`
  button{
    background-color:#FF4343;
    gap:10px;
    padding: 6px 12px;
    border-radius: 5px;
    margin: 5px;
    border:none;
  }
`;




export default App;
