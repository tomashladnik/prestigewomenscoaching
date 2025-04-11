import localFont from 'next/font/local'

export const rohnrounded = localFont({
  src: [
    {
      path: '../../public/fonts/RohnRounded-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RohnRounded-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/RohnRounded-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RohnRounded-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/RohnRounded-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RohnRounded-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/RohnRounded-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RohnRounded-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/RohnRounded-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RohnRounded-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/RohnRounded-Heavy.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RohnRounded-HeavyItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/RohnRounded-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/RohnRounded-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-rohnrounded',
  display: 'swap',
  preload: true,
  fallback: ['sans-serif']
}) 