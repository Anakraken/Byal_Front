export const colors = {
  primary: '#3432C7',
  shadow: '#3432c768',
  inactive: '#E5E4F8',
  overlay: '#AEADE9',
  border: '#323232'
}

// D30000 rojo
// 46CB18 verde
// 3432C7 primario
// FFDE21 amarillo

const size = {
  mobileXS: '281px',
  mobileS: '321px',
  mobileM: '375px',
  mobileL: '425px',
  mobile: '580px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px',
  height: '1024px',
};
export const device = {
  mobileXS: `(max-width: ${size.mobileXS})`,
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
  height: `(min-height: ${size.height})`
};