import React from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchPrice } from "../api";
import { fetchCandles } from "./../api";

interface IDark {
  darkMode : boolean;
}

interface IState {
  state: { name: string };
}

interface IPrice {
  market: string;
  trade_price: number;
  prev_closing_price: number;
  signed_change_price: number;
  signed_change_rate: number;
}

type RouterParams = {
  market: string;
};

interface ICandle {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  first_day_of_period: string;
}

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  background-color: #fff;
  height: 500px;
  margin-top: 10px;
  border-radius: 10px;
`;
const DetailCoin = styled.div`
  align-items: center;
`;
const CoinName = styled.div`
  margin-top: 50px;
  font-family: "GmarketSansBold";
  text-align: center;
  font-size: 30px;
  padding: 30px 0;
  color: #353535;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const CoinPrice = styled.div<{ isPlus: boolean }>`
  margin: 15px;
  color: ${(props) =>
    props.isPlus ? props.theme.accentColor : props.theme.lowColor};
  font-size: 30px;
  font-family: "GmarketSansBold";
  span {
    padding-left: 5px;
    font-size: 15px;
    font-family: "Noto Sans", sans-serif;
  }
  p:last-child {
    font-size: 13px;
  }
`;

function Detail({darkMode}:IDark) {
  const { market } = useParams() as RouterParams;
  const { state } = useLocation() as IState; //한글이름 받아옴
  const { isLoading: priceLoading, data: priceDate } = useQuery<IPrice[]>(
    market,
    () => fetchPrice(market)
  );
  const { isLoading: candleLoading, data: candleData } = useQuery<ICandle[]>(
    ["week", market],
    () => fetchCandles(market)
  );
  return (
    <Container>
      {priceDate?.map((price, idx) => (
        <>
          <DetailCoin key={idx}>
            <CoinName>{state.name || "Lodaing..."}</CoinName>
            <CoinPrice isPlus={price.signed_change_rate > 0}>
              <p>
                {price.trade_price.toLocaleString("ko-kr")}
                <span>KRW</span>
              </p>
              <p> {price.signed_change_price}</p>
            </CoinPrice>
            {candleLoading ? (
              "Lodaing..."
            ) : (
              <ApexChart
                type="line"
                series={[
                  {
                    name: "Price",
                    data: candleData?.map((price) => price.trade_price) ?? [], //없으면 빈배열추가.
                  },
                ]}
                options={{
                  theme: {
                    mode: darkMode ? "dark" : "light",
                  },
                  chart: {
                    width: 500,
                    height: 300,
                    toolbar: {
                      show: false,
                    },
                    background: "transparent",
                  },
                  grid: {
                    show: false,
                  },
                  stroke: {
                    curve: "smooth",
                    width: 3,
                  },
                  yaxis: {
                    show: false,
                  },
                  xaxis: {
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                    labels: { show: false },
                    type: "datetime",
                    categories:
                      candleData?.map((data) => data.candle_date_time_kst) ??
                      [],
                  },
                  fill: {
                    type: "gradient",
                    gradient: {
                      gradientToColors: ["#4cd137"],
                      stops: [0, 100],
                    },
                  },
                  colors: ["#00a8ff"],
                  tooltip: {
                    y: {
                      formatter: (value) => `$${value.toFixed(3)}`,
                    },
                  },
                }}
              />
            )}
          </DetailCoin>
        </>
      ))}
    </Container>
  );
}

export default Detail;
