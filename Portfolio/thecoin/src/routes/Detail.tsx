import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

interface IState {
  state: { name: string};
}

interface IPrice {
  //받아오는 코인이 어떻게생겼는지 타입스크립트에게 말해주기
  market: string;
  trade_price: number;
}
const DetailTitle = styled.div`

`;
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
  const { market } = useParams();
  const [price, setPrice] = useState<IPrice[]>([]);
  const { state } = useLocation() as IState;
  // const { state } = useLocation() as IState; //한글이름 받아옴
  return (
    <DetailContainer>
      <DetailTitle> 
        
        <Img src={`https://cryptoicon-api.vercel.app/api/icon/${p.market
                .substr(4)
                .toLowerCase()}`} />
        {state.name || "Lodaing..."}
        </DetailTitle>
      
    </DetailContainer>
  );
}

export default Detail;
