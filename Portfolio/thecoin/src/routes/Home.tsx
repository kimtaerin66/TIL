import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {  Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchAll } from "../api";

interface ThemeProps {
  toggle : () => void;
}

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

const Wrap = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;

const Loading = styled.div`
  text-align: center;
  margin: 300px;
`;

const Header = styled.header`
  font-family: "GmarketSansBold";
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinContainer = styled.div`
  width: 300px;
  display: inline-flex;
  flex-wrap: wrap;
`;
const CoinBox = styled.div`
  //props받기
  width: 100px;
  font-size: 6px;
  font-weight: bold;
  color: #353535;
  display: flex;
  text-align: center;
  a {
    width: 90px;
    height: 90px;
    margin: 5px 5px;
    background-color: #fff;
    border-radius: 20px;
  }
  &:hover {
    a {
      background-color: ${(props) => props.theme.textColor};
    }
  }
  p {
    font-size: 5px;
    -webkit-transform: scale(0.75);
    color: rgba(0, 0, 0, 0.5);
    font-weight: lighter;
  }
`;

const Img = styled.img`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 35px;
  height: 35px;
  padding: 15px 0;
`;

function Home({toggle}:ThemeProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchAll);
  const Kdata = data?.filter(el=>el.market[0] === 'K');
  return (
    <>
      {isLoading ? (
        <Loading> "Loading" </Loading>
      ) : (
        <Wrap>
          <Header>THE COINS
          <button onClick={toggle}> ThemeBtn </button>
          </Header>
          <Container>
            <CoinContainer>
              {Kdata?.slice(0,60).map((coin, idx) => (
                <CoinBox key={idx}>
                  <Link
                    to={`/${coin.market}`}
                    state={{ name: coin.korean_name }}
                  >
                    {/* <Img
                      src={`https://cryptoicon-api.vercel.app/api/icon/${coin.market
                        .substring(4)
                        .toLowerCase()}`}
                    /> */}
                    {coin.korean_name}
                    <p> {coin.market}</p>
                  </Link>
                </CoinBox>
              ))}
            </CoinContainer>
          </Container>
        </Wrap>
      )}
    </>
  );
}

export default Home;
