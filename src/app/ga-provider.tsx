import Script from "next/script";

const GAProvider = () => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?
      id=G-K20DRKXNTC`}
    />
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K20DRKXNTC');
        `,
      }}
    />
  </>
);
export default GAProvider;
