import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import type { SvgComponentProps } from './BrandIcon'
import {color} from "ansi-fragments";

const LeftArrow = (props: SvgProps) => (
  <Svg
    width={props?.width??14}
    height={props?.height??12}
    viewBox="0 0 14 12"
    fill="none"
    {...props}
  >
    <Path
      fill={props?.color??"#fff"}
      d="M13.666 6a.667.667 0 0 1-.666.667H2.446l3.06 3.567a.667.667 0 0 1-1.013.866l-4-4.666a.553.553 0 0 1-.06-.107.554.554 0 0 1-.053-.08A.773.773 0 0 1 .333 6a.773.773 0 0 1 .047-.246.554.554 0 0 1 .053-.08.553.553 0 0 1 .06-.107l4-4.667a.667.667 0 1 1 1.013.867l-3.06 3.567H13c.368 0 .666.298.666.666Z"
    />
  </Svg>
)

const WarningIcon = ({length, props}: SvgComponentProps) => (
  <Svg
    width={length??16}
    height={length??16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path
      fill="#FB7945"
      fillRule="evenodd"
      d="M8 1.333a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 8 1.333Zm.473 10.474a.765.765 0 0 1-.22.14.626.626 0 0 1-.507 0 .765.765 0 0 1-.22-.14.667.667 0 0 1-.193-.474.667.667 0 0 1 .193-.473.666.666 0 0 1 .727-.14.504.504 0 0 1 .12.06c.035.025.068.051.1.08a.7.7 0 0 1 .193.473.667.667 0 0 1-.193.474ZM8 9.333a.667.667 0 0 0 .666-.666v-4a.667.667 0 0 0-1.333 0v4c0 .368.298.666.667.666Z"
      clipRule="evenodd"
    />
  </Svg>
)

const LockIcon = ({length, props}: SvgComponentProps) => (
  <Svg
    width={length??24}
    height={length??24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path fill-rule="evenodd" clip-rule="evenodd"
          d="M19 11V9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9V11C3.34315 11 2 12.3431 2 14V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V14C22 12.3431 20.6569 11 19 11ZM7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V11H7V9ZM19 20C19.5523 20 20 19.5523 20 19V14C20 13.4477 19.5523 13 19 13H5C4.44772 13 4 13.4477 4 14V19C4 19.5523 4.44772 20 5 20H19Z"
          fill="white"/>
  </Svg>
)

const Clock = ({length, props}: SvgComponentProps) => (
  <Svg
    width={length??32}
    height={length??32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M16 2.667C8.637 2.667 2.667 8.637 2.667 16c0 7.364 5.97 13.334 13.333 13.334 7.364 0 13.334-5.97 13.334-13.334A13.333 13.333 0 0 0 16 2.667Zm0 24c-5.89 0-10.666-4.775-10.666-10.666S10.11 5.334 16.001 5.334c5.89 0 10.666 4.776 10.666 10.667a10.667 10.667 0 0 1-10.666 10.666Zm4-8a1.333 1.333 0 0 0 1.334-.907 1.334 1.334 0 0 0-.907-1.693l-3.093-1.027V9.333a1.333 1.333 0 0 0-2.667 0V16a1.333 1.333 0 0 0 .907 1.267l4 1.333c.138.04.282.063.426.067Z"
      clipRule="evenodd"
    />
  </Svg>
)

const Scan = ({length, props}: SvgComponentProps) => (
  <Svg
    width={length??32}
    height={length??32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M2.667 6.667V12a1.333 1.333 0 1 0 2.667 0V6.667c0-.736.597-1.333 1.333-1.333H12a1.333 1.333 0 1 0 0-2.667H6.667a4 4 0 0 0-4 4Zm17.333-4h5.334a4 4 0 0 1 4 4V12a1.333 1.333 0 0 1-2.667 0V6.667c0-.736-.597-1.333-1.333-1.333H20a1.333 1.333 0 1 1 0-2.667Zm8 16c-.736 0-1.333.597-1.333 1.333v5.334c0 .736-.597 1.333-1.333 1.333H20a1.333 1.333 0 1 0 0 2.667h5.334a4 4 0 0 0 4-4V20c0-.736-.597-1.333-1.334-1.333Zm-21.333 8H12a1.333 1.333 0 1 1 0 2.667H6.667a4 4 0 0 1-4-4V20a1.333 1.333 0 1 1 2.667 0v5.334c0 .736.597 1.333 1.333 1.333Zm4-18.667h10.666A2.667 2.667 0 0 1 24 10.667v10.666A2.667 2.667 0 0 1 21.333 24H10.667A2.667 2.667 0 0 1 8 21.333V10.667A2.667 2.667 0 0 1 10.667 8Zm0 2.667h10.667v10.667H10.667V10.667Z"
      clipRule="evenodd"
    />
  </Svg>
)

const Up = ({length, props}: SvgComponentProps) => (
  <Svg
    width={length??16}
    height={length??16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <Path
      fill="#A5A5A5"
      d="M14.5 11.107a.667.667 0 0 1-.94.06L8 6.227l-5.56 4.94a.667.667 0 0 1-.88-1l6-5.333a.667.667 0 0 1 .88 0l6 5.333a.667.667 0 0 1 .06.94Z"
    />
  </Svg>
)

const QRCode = ({length, props}: SvgComponentProps) => (
  <Svg
    width={length??24}
    height={length??24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M3 10V4c0-.283.096-.52.288-.712A.968.968 0 0 1 4 3h6c.283 0 .52.096.713.288.191.191.287.429.287.712v6c0 .283-.096.52-.287.713A.968.968 0 0 1 10 11H4a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 10Zm2-1h4V5H5v4ZM3 20v-6c0-.283.096-.52.288-.713A.967.967 0 0 1 4 13h6c.283 0 .52.096.713.287.191.192.287.43.287.713v6c0 .283-.096.52-.287.712A.968.968 0 0 1 10 21H4a.967.967 0 0 1-.712-.288A.968.968 0 0 1 3 20Zm2-1h4v-4H5v4Zm8-9V4c0-.283.096-.52.287-.712A.968.968 0 0 1 14 3h6c.283 0 .52.096.712.288.192.191.288.429.288.712v6c0 .283-.096.52-.288.713A.968.968 0 0 1 20 11h-6a.968.968 0 0 1-.713-.287A.968.968 0 0 1 13 10Zm2-1h4V5h-4v4Zm4 12v-2h2v2h-2Zm-6-6v-2h2v2h-2Zm2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm2 2v-2h2v2h-2Zm2-2v-2h2v2h-2Zm0-4v-2h2v2h-2Zm2 2v-2h2v2h-2Z"
    />
  </Svg>
)

export {
  LeftArrow,
  WarningIcon,
  LockIcon,
  Clock,
  Scan,
  Up,
  QRCode,
}