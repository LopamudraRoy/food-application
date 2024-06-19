import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../App';
import { Button } from '../App';

function SearchResult({data}) {
    return (
        <div>
            <CardContainer>
                <AllCards>
                    <CardInfo>
                    {data?.map((data) => (
                        <FoodCard key={data.name}>
                            <div className="food_image">
                                <img src={BASE_URL + data.image}/>
                            </div>
                            <div className="food_info">
                                <div className="info">
                                    <h3>{data.name}</h3>
                                    <p>{data.text}</p>
                                </div>
                            </div>
                            <Button>
                                <button>
                                    ${data.price.toFixed(2)}
                                </button>
                            </Button>
                        </FoodCard>
                    ))}
                    </CardInfo>
                    
                </AllCards>
            </CardContainer>
        </div>
    )
}



const CardContainer = styled.section`
  background-image: url("/bg.png");
  height: calc(100vh - 210px);
`;

const AllCards = styled.div`
`;
const CardInfo =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

const FoodCard = styled.div`
  width: calc(33.33% - 90px);
  margin: 20px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;


export default SearchResult
