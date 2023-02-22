export const GA_MEASUREMENT_ID = 'G-0Q809JJD34';

export function gaInit() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}
