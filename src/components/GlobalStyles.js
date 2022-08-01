import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}

body {
  width: 100%;
  background-color: #FFFFFF;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  color: #293845;
}
h1 {
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #E8833A;
}
h2 {
  font-size: 26px;
  line-height: 30px;
}
h3 {
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.04em;
}
h4 {
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.04em;
}
h5 {
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.02em;
}
h6, input::placeholder {
  font-size: 18px;
  line-height: 21px;
}
input::placeholder {
  color: #AFAFAF;
}
`;
 