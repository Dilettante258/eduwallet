import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import type { SvgComponentProps } from './BrandIcon'

const LeftArrow = (props: SvgProps) => (
  <Svg
    width={props.width??14}
    height={props.height??12}
    viewBox="0 0 14 12"
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
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



export {
  LeftArrow,
  WarningIcon
}