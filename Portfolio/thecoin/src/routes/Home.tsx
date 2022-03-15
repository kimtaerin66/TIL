import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ICoin {
  //받아오는 코인이 어떻게생겼는지 타입스크립트에게 말해주기
  english_name: string;
  korean_name: string;
  market: string;
}



const Wrap = styled.div`

`;


const Header = styled.header`
height: 50px;
margin-bottom: 15px;
background-color: aliceblue;

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinList = styled.div`
  width: 300px;
  background-color: #fff;
`;
const CoinHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;
const CoinBox = styled.li`
  list-style: none;
  font-size: 8px;
  margin: 10px 0;
  font-weight: bold;
  color: #353535;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  p {
    font-size: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: lighter;
  }
`;

const DetailBox = styled.div`
  width: 520px;
  height: 400px;
  background-color: white;
  margin-right: 15px;
  `;



function Home() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const getCoins = async () => {
    const res = await fetch(`https://api.upbit.com/v1/market/all`); ///
    const json = await res.json();
    setCoins(json.slice(0,150));
  };
  useEffect(() => {
    getCoins();
  }, []);
  return (
    <Wrap>
        <Header>
            Hello
        </Header>
        <Container>
        <DetailBox>

        </DetailBox>
      <CoinList>
        <CoinHeader>
          <span>한글명</span>
          <span>현재가</span>
        </CoinHeader>
        {coins.map((coin) => (
          <CoinBox key={coin.market}>
            <Link to={`/${coin.market}/detail`}>
              {coin.korean_name}
              <p> {coin.market}</p>
            </Link>
          </CoinBox>
        ))}
      </CoinList>
      </Container>
    </Wrap>
  );
}

export default Home;
