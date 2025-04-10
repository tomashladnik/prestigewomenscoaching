import localFont from 'next/font/local'

export const rohnrounded = localFont({
  src: [
    {
      path: '../../public/fonts/Rohnrounded-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Rohnrounded-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-rohnrounded'
}) 