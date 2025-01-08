import {
  blue,
  blueDark,
  cyan,
  cyanDark,
  sky,
  skyDark,
  slate,
  slateDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...sky,      // 하늘색 계열 (밝은 바다)
    ...blue,     // 파란색 계열 (중간 바다)
    ...cyan,     // 청록색 계열 (얕은 바다)
    ...slate,    // 회색조 (기본 UI 요소)
  },
  dark: {
    ...skyDark,   // 어두운 하늘색
    ...blueDark,  // 어두운 파란색
    ...cyanDark,  // 어두운 청록색
    ...slateDark, // 어두운 회색조
  },
}
