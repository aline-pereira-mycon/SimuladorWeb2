'use client'
import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const montsserat = Montserrat( {
  weight: [ '300', '400', '500', '700' ],
  subsets: [ 'latin' ],
  display: 'swap',
} )

const theme = createTheme( {
  palette: {
    mode: 'light',
    primary: {
      main: '#5451FA',
    },
    secondary: {
      main: '#3A4256',
    },
    text: {
      primary: '#3A4256',
      secondary: '#5451FA',
      disabled: '#7d8596',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '2.8rem',
      color: '#3A4256',
      '@media only screen and (max-width: 345px)': {
        fontSize: '1.2rem!important',
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '.9rem',
      lineHeight: 2,
    },
    fontFamily: 'Montserrat',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "100%",
          "@media (min-width: 1200px)": {
            maxWidth: "20%",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '19px',
          fontSize: '0.9rem',
          fontWeight: '500',
          textTransform: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          fontSize: '1.1rem',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: '3px 0 0 ',
          "::after": {
            borderBottom: '1px solid #C1C7CD',
          },
        },
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: '.6rem',
        color: '#3A4256',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px',
            marginBottom: '0',
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: '#F2F4F8',
          width: '1.4em',
          height: '1.4em',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '8px 26px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#808080',
          '&.Mui-checked': {
            color: '#4240FF',
          },
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          padding: '0 8px',
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          padding: '0 8px',
          '& span': {
            borderColor: '#ACACAC',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent !important',
          },
        },
      },
    },
  },
} )

export default theme
