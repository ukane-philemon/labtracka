// import {alpha, useTheme} from '@mui/material/styles';
// import { dividerClasses } from '@mui/material/Divider';
// import { checkboxClasses } from '@mui/material/Checkbox';
// import { menuItemClasses } from '@mui/material/MenuItem';
// import { autocompleteClasses } from '@mui/material/Autocomplete';
// import type { Fontface } from '@mui/material/styles/createTypography';
// import type { BgBlurInterface, BgGradientInterface, PaperInterface, Theme } from '@components/interface';
// import {IMAGE_PATH} from "@components/constants";
// import type {BgGradientResponse} from "@components/interface/theme";
// import {useSystemModeIsDark} from "@components/hooks";

// export const Paper = ({ bgcolor, dropdown }: PaperInterface): {
//   elevation?: number;
//   padding?: string;
//   boxShadow?: string;
//   borderRadius?: number;
//   backgroundPosition: string;
//   backgroundImage: string;
//   backgroundRepeat: string;
//   backgroundColor?: string;
//   backgroundSize?: string;
// } => {
//   const theme: Theme = useTheme();
//   return ({
//   ...BgBlur({
//     blur: 20,
//     opacity: 0.9,
//     ...(Boolean(bgcolor) && {
//       color: bgcolor,
//     }),
//   }),
//   backgroundImage: 'url(/assets/cyan-blur.png), url(/assets/red-blur.png)',
//   backgroundRepeat: 'no-repeat, no-repeat',
//   backgroundPosition: 'top right, left bottom',
//   backgroundSize: '50%, 50%',
//   ...(theme.direction === 'rtl' && {
//     backgroundPosition: 'top left, right bottom',
//   }),
//   ...(dropdown && {
//     padding: theme.spacing(0.5),
//     boxShadow: theme.customShadows.dropdown,
//     borderRadius: theme.shape.borderRadius * 1.25,
//   }),
// })}



// export const MenuItem = (): {
//   [x: string]: unknown;
//   padding: string;
//   borderRadius: number;
//   '&:not(:last-of-type)': {
//     marginBottom: number;
//   };
//   '@font-face'?: Fontface | Fontface[] | undefined;
// } => {
//   const theme: Theme = useTheme();
//   return ({
//   ...theme.typography.body2,
//   padding: theme.spacing(0.75, 1),
//   borderRadius: theme.shape.borderRadius * 0.75,
//   '&:not(:last-of-type)': {
//     marginBottom: 4,
//   },
//   [`&.${menuItemClasses.selected}`]: {
//     fontWeight: theme.typography.fontWeightSemiBold,
//     backgroundColor: theme.palette.action.selected,
//     '&:hover': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
//   [`& .${checkboxClasses.root}`]: {
//     padding: theme.spacing(0.5),
//     marginLeft: theme.spacing(-0.5),
//     marginRight: theme.spacing(0.5),
//   },
//   [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
//     backgroundColor: theme.palette.action.selected,
//     '&:hover': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
//   [`&+.${dividerClasses.root}`]: {
//     margin: theme.spacing(0.5, 0),
//   },
// })};



// export function BgBlur(props?: BgBlurInterface): {
//   position?: string;
//   backgroundImage?: string;
//   '&:before'?: {
//     position: string;
//     top: number;
//     left: number;
//     zIndex: number;
//     content: string;
//     width: string;
//     height: string;
//     backdropFilter: string;
//     WebkitBackdropFilter: string;
//     backgroundColor: string;
//   };
//   backdropFilter?: string;
//   WebkitBackdropFilter?: string;
//   backgroundColor?: string | undefined;
// } {
//   const theme: Theme = useTheme();
//   const color = props?.color || theme.palette.background.default;
//   const blur = props?.blur || 6;
//   const opacity = props?.opacity || 0.8;
//   const imgUrl = props?.imgUrl;
//   const mode = useSystemModeIsDark()

//   return imgUrl ? {
//     position: 'relative',
//     backgroundImage: `url(${IMAGE_PATH.concat(imgUrl)})`,
//     '&:before': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       zIndex: 9,
//       content: '""',
//       width: '100%',
//       height: '100%',
//       backdropFilter: `blur(${blur}px)`,
//       WebkitBackdropFilter: `blur(${blur}px)`,
//       backgroundColor: alpha(color, opacity),
//     },
//   } : {
//     backdropFilter: `blur(${blur}px)`,
//     WebkitBackdropFilter: `blur(${blur}px)`,
//     backgroundColor: mode ? undefined :  alpha(color, opacity),
//   };
// }



// export function BgGradient(props: BgGradientInterface): BgGradientResponse {
//   const direction = props.direction || 'to bottom';
//   const startColor = props.startColor;
//   const endColor = props.endColor;
//   const imgUrl = props.imgUrl;
//   const color = props.color;

//   if (imgUrl) {
//     return {
//       background: `linear-gradient(${direction}, ${startColor || color}, ${endColor || color
//         }), url(${IMAGE_PATH.concat(imgUrl)})`,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center center',
//     };
//   }

//   return {
//     background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
//   };
// }



// export const textGradient = (value: string): {
//   background: string,
//   WebkitBackgroundClip: string,
//   WebkitTextFillColor: string
// } => ({
//   background: `-webkit-linear-gradient(${value})`,
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
// })




// export const hideScroll = {
//   x: {
//     msOverflowStyle: 'none',
//     scrollbarWidth: 'none',
//     overflowX: 'scroll',
//     '&::-webkit-scrollbar': {
//       display: 'none',
//     },
//   },
//   y: {
//     msOverflowStyle: 'none',
//     scrollbarWidth: 'none',
//     overflowY: 'scroll',
//     '&::-webkit-scrollbar': {
//       display: 'none',
//     },
//   },
// };
