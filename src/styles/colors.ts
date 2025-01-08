import {
  sky,
  skyDark,
  blue,
  blueDark,
  cyan,
  cyanDark,
} from "@radix-ui/colors"

export const colors = {
  light: {
    ...sky,     // 하늘색/밝은 바다색 계열
    ...blue,    // 중간 바다색 계열
    ...cyan,    // 청록색/얕은 바다색 계열
  },
  dark: {
    ...skyDark,  // 어두운 하늘색
    ...blueDark, // 어두운 바다색
    ...cyanDark, // 어두운 청록색
  },
}

export type Colors = typeof colors.light & typeof colors.dark