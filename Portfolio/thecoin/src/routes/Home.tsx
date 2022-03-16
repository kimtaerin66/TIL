import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Detail from "./Detail";

interface DetailProps {
  market: string;
}

interface ICoin {
  //받아오는 코인이 어떻게생겼는지 타입스크립트에게 말해주기
  english_name: string;
  korean_name: string;
  market: string;
}
interface IPrice {
  //받아오는 코인이 어떻게생겼는지 타입스크립트에게 말해주기
  market: string;
  trade_price: number;
}

const Wrap = styled.div``;

const Loading = styled.div`
  text-align: center;
  margin: 300px;
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

const CoinList = styled.ul`
  width: 300px;
  height: 520px;
  background-color: #fff;
  overflow: auto;
  box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.02);

  &::-webkit-scrollbar {
    width: 7px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
`;
const CoinHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;
const CoinBox = styled.li`
  list-style: none;
  font-size: 8px;
  font-weight: bold;
  color: #353535;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  a {
    display: block;
    padding: 10px 0;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
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
  box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.02);
`;

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [price, setPrice] = useState<IPrice[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api.upbit.com/v1/market/all`);
      const json = await res.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading> "Loading" </Loading>
      ) : (
        <Wrap>
          <Header>Hello</Header>
          <Container>
            <DetailBox>
              <p></p>
              <p>1111</p>
            </DetailBox>
            <CoinList>
              <CoinHeader>
                <span>한글명</span>
                <span>현재가</span>
              </CoinHeader>
              {coins.map((coin, idx) => (
                <CoinBox key={idx}>
                  <Link to={`/${coin.market}`} state={{ name: coin.korean_name }}>
                    {coin.korean_name}
                    <p> {coin.market}</p>
                  </Link>
                </CoinBox>
              ))}
            </CoinList>
          </Container>
        </Wrap>
      )}
    </>
  );
}

export default Home;
