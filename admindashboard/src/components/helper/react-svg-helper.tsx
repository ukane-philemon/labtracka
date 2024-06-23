import { ReactSVG } from 'react-svg';

interface Parameter {
  color?: string;
  height?: number;
  margin?: string;
  src: string;
  width?: number;
}

export const ReactSVGHelper = ({
  color = 'black',
  height = 20,
  margin = '0',
  src,
  width = 21,
}: Parameter) => (
  <ReactSVG src={src} beforeInjection={(svg) => {
    svg.setAttribute(
      'style',
      `color: ${color}; width: ${width}px; height: ${height}px; margin: ${margin}`
    )
  }} />
)