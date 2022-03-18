import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";


interface IState {
  state: { name: string };
}

interface IPrice {
  market: string;
  trade_price: number;
}
const DetailTitle = styled.div``;
const DetailContainer = styled.div` 
  width: 520px;
  height: 400px;
  background-color: white;
  margin-right: 15px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const CoinName = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
`;
const Price = styled.div``;

function Detail() {
  const { market } = useParams<{ market: string }>();
  const [price, setPrice] = useState<IPrice[]>([]);
  useEffect(() => {
    (async () => {
      const priceDate = await (
        await fetch(`https://api.upbit.com/v1/ticker?markets=${market}`)
      ).json();
      setPrice(priceDate);
    })();
  }, []);
  const { state } = useLocation() as IState; //한글이름 받아옴
  return (
    <DetailContainer>
      <DetailTitle>
        {price.map((p, idx) => (
          <CoinName key={idx}>
            <Img
              src={`https://cryptoicon-api.vercel.app/api/icon/${p.market
                .substring(4)
                .toLowerCase()}`}
            />
            {state.name || "Lodaing..."}
            <Price>{p.trade_price}</Price>
          </CoinName>
        ))}
      </DetailTitle>
    </DetailContainer>
  );
}

export default Detail;
