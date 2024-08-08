import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import type {ColorSvgProps, SvgComponentProps} from './BrandIcon'
import {color} from "ansi-fragments";
import {Pressable} from "react-native";

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

const WarningIcon = ({length, color, ...props}: ColorSvgProps)  => (
  <Svg
    width={length??16}
    height={length??16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path
      fill={color??"#FB7945"}
      fillRule="evenodd"
      d="M8 1.333a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 8 1.333Zm.473 10.474a.765.765 0 0 1-.22.14.626.626 0 0 1-.507 0 .765.765 0 0 1-.22-.14.667.667 0 0 1-.193-.474.667.667 0 0 1 .193-.473.666.666 0 0 1 .727-.14.504.504 0 0 1 .12.06c.035.025.068.051.1.08a.7.7 0 0 1 .193.473.667.667 0 0 1-.193.474ZM8 9.333a.667.667 0 0 0 .666-.666v-4a.667.667 0 0 0-1.333 0v4c0 .368.298.666.667.666Z"
      clipRule="evenodd"
    />
  </Svg>
)

const LockIcon = ({length, ...props}: SvgComponentProps) => (
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

const Clock = ({length, ...props}: SvgComponentProps) => (
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

const Scan = ({length, ...props}: SvgComponentProps) => (
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

type SvgRef = React.ElementRef<typeof Svg>;

const Up = React.forwardRef<SvgRef,SvgComponentProps>(({length, ...props}: SvgComponentProps,ref) => (
  <Svg
    width={length??16}
    height={length??16}
    viewBox="0 0 16 16"
    fill="none"
    ref={ref}
    {...props}
  >
    <Path
      fill="#A5A5A5"
      d="M14.5 11.107a.667.667 0 0 1-.94.06L8 6.227l-5.56 4.94a.667.667 0 0 1-.88-1l6-5.333a.667.667 0 0 1 .88 0l6 5.333a.667.667 0 0 1 .06.94Z"
    />
  </Svg>
))

const QRCode = ({length, ...props}: SvgComponentProps) => (
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

const Copy = (props: SvgProps) => (
  <Svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    {...props}
  >
    <Path
      fill="#A5A5A5"
      d="M6 12.5c-.367 0-.68-.13-.942-.392a1.284 1.284 0 0 1-.391-.942v-8c0-.366.13-.68.391-.941.261-.261.575-.392.942-.392h6c.367 0 .68.13.942.392.26.26.391.575.391.941v8c0 .367-.13.68-.391.942A1.284 1.284 0 0 1 12 12.5H6Zm0-1.334h6v-8H6v8Zm-2.667 4c-.366 0-.68-.13-.941-.391A1.284 1.284 0 0 1 2 13.833V5.166c0-.189.064-.347.192-.475a.645.645 0 0 1 .475-.191c.189 0 .347.064.475.191a.645.645 0 0 1 .191.475v8.667H10c.189 0 .347.064.475.192a.645.645 0 0 1 .192.475.645.645 0 0 1-.192.475.645.645 0 0 1-.475.191H3.333Z"
    />
  </Svg>
)

const Edit = ({length, ...props}: SvgComponentProps) => (
  <Svg
    width={length??16}
    height={length??16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <Path
      fill="#A5A5A5"
      fillRule="evenodd"
      d="m6.227 12.6 7.82-7.82a2 2 0 1 0-2.827-2.827l-7.84 7.84a.767.767 0 0 0-.127.173L1.4 13.706a.667.667 0 0 0 .6.96.666.666 0 0 0 .313-.086l3.74-1.854a.765.765 0 0 0 .174-.126ZM14 14.666a.667.667 0 1 0 0-1.333H8a.667.667 0 0 0 0 1.333h6ZM10.88 6.06l-.94-.94-5.52 5.547-.927 1.867 1.84-.954 5.547-5.52Zm1.763-3.395c.183 0 .358.075.483.208a.666.666 0 0 1-.02.966L11.82 5.12l-.94-.94 1.28-1.306a.667.667 0 0 1 .483-.208Z"
      clipRule="evenodd"
    />
  </Svg>
)

const Settings = ({length, ...props}: SvgComponentProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M10.825 22.5c-.45 0-.838-.15-1.163-.45-.325-.3-.52-.667-.587-1.1L8.85 19.3a3.79 3.79 0 0 1-.613-.3 8.266 8.266 0 0 1-.562-.375l-1.55.65c-.417.183-.833.2-1.25.05a1.843 1.843 0 0 1-.975-.8l-1.175-2.05a1.587 1.587 0 0 1-.2-1.225c.1-.433.325-.792.675-1.075l1.325-1a2.387 2.387 0 0 1-.025-.338v-.675c0-.108.008-.22.025-.337l-1.325-1a1.897 1.897 0 0 1-.675-1.075c-.1-.433-.033-.842.2-1.225L3.9 6.475c.233-.383.558-.65.975-.8.417-.15.833-.133 1.25.05l1.55.65c.183-.133.375-.258.575-.375.2-.117.4-.217.6-.3l.225-1.65c.067-.433.262-.8.587-1.1.325-.3.713-.45 1.163-.45h2.35c.45 0 .837.15 1.162.45.325.3.521.667.588 1.1l.225 1.65c.217.083.42.183.612.3.192.117.38.242.563.375l1.55-.65c.417-.183.833-.2 1.25-.05.417.15.742.417.975.8l1.175 2.05c.233.383.3.792.2 1.225-.1.433-.325.792-.675 1.075l-1.325 1c.017.117.025.23.025.338v.675c0 .108-.017.22-.05.337l1.325 1c.35.283.575.642.675 1.075.1.433.033.842-.2 1.225l-1.2 2.05c-.233.383-.558.65-.975.8-.417.15-.833.133-1.25-.05l-1.5-.65a6.842 6.842 0 0 1-.575.375c-.2.117-.4.217-.6.3l-.225 1.65c-.067.433-.263.8-.588 1.1-.325.3-.712.45-1.162.45h-2.35ZM12.05 16c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0 0 15.55 12.5c0-.967-.342-1.792-1.025-2.475A3.373 3.373 0 0 0 12.05 9c-.983 0-1.813.342-2.488 1.025A3.393 3.393 0 0 0 8.55 12.5c0 .967.337 1.792 1.012 2.475.676.683 1.505 1.025 2.488 1.025Z"
    />
  </Svg>
)

const Certificate = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M18.9 12.2 18.19 9l.71-3.2a1 1 0 0 0-.68-1.17l-3.13-1-2.41-2.21a1 1 0 0 0-1.36 0L8.91 3.64l-3.13 1A1 1 0 0 0 5.1 5.8L5.81 9l-.71 3.2a1 1 0 0 0 .68 1.17l2.22.7V21a1 1 0 0 0 1.55.83L12 20.2l2.45 1.63A1 1 0 0 0 16 21v-6.93l2.22-.7a1 1 0 0 0 .68-1.17Zm-7.45 6-1.45 1v-3.84l1.32 1.22a1 1 0 0 0 .68.26 1.05 1.05 0 0 0 .68-.26L14 15.36v3.77l-1.45-.93a1 1 0 0 0-1.1 0Zm2.45-5.44c.11-.097.24-.172.38-.22l2.47-.8-.57-2.52a1.09 1.09 0 0 1 0-.44l.57-2.52-2.47-.77a1.11 1.11 0 0 1-.38-.22L12 3.52l-1.9 1.75a1.11 1.11 0 0 1-.38.22l-2.47.77.57 2.52c.03.146.03.295 0 .44l-.57 2.52 2.47.77c.14.048.27.123.38.22l1.9 1.75 1.9-1.72Z"
      clipRule="evenodd"
    />
  </Svg>
)

const Wallet = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M19 22a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14Zm-3-12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4-1h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7V9Zm-1-5a1 1 0 0 1 1 1v2h-7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h7v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14Z"
      clipRule="evenodd"
    />
  </Svg>
)

const Issue = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a10 10 0 0 1 0 20Zm1-9V7a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0Zm-.62 3.08a.754.754 0 0 1 .18.09c.052.037.102.077.15.12.183.192.286.446.29.71a1 1 0 0 1-.29.71c-.097.089-.209.16-.33.21a.94.94 0 0 1-.76 0 1.152 1.152 0 0 1-.33-.21A1 1 0 0 1 11 17a1 1 0 0 1 .29-.71 1 1 0 0 1 .9-.27c.066.01.13.03.19.06ZM12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"
      clipRule="evenodd"
    />
  </Svg>
)

const RightArrow = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#A5A5A5"
      d="m11.167 8.44-5.333 6a.667.667 0 0 1-1-.88L9.774 8l-4.94-5.56a.667.667 0 0 1 1-.88l5.333 6a.667.667 0 0 1 0 .88Z"
    />
  </Svg>
)

const Close = (props: SvgProps) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#A5A5A5"
      d="M14.473 14.027a.667.667 0 0 1 0 .947.667.667 0 0 1-.947 0L8 9.44l-5.527 5.534a.667.667 0 0 1-.947 0 .667.667 0 0 1 0-.947L7.06 8.5 1.526 2.974a.67.67 0 1 1 .947-.947L8 7.56l5.526-5.533a.67.67 0 0 1 .947.947L8.94 8.5l5.533 5.527Z"
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
  Copy,
  Edit,
  Settings,
  Certificate,
  Wallet,
  Issue,
  RightArrow,
  Close
}