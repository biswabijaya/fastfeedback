function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
        <Component {...pageProps} />
    </ProviderAuth>
  );

}



export default MyApp