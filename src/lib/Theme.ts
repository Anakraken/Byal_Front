export const colors = {
  primary: '#3432C7',
  primaryOver: '#343270',
  shadow: '#3432c768',
  inactive: '#E5E4F8',
  border: '#323232',
  error: '#D30000',
  success: '#46CB18',
  warning: '#FFDE21'
}

const size = {
  mobileXS: '286px',
  mobileS: '321px',
  mobileM: '375px',
  mobileL: '425px',
  mobile: '711px',
  tablet: '767px',
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
/* @media ${device.mobile} {
    height: ${({ error }) => (!!error && error === 'true' ? "143px" : "93px")};
  } */