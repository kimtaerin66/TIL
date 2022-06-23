export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: yellow;
        }
      `}</style>
    </>
  );
}

//Custom App은 두개의 prop을 받아야하는데
//첫번째는 Component,
//두번째는 pageProps
