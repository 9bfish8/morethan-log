import { Global as _Global, css, useTheme } from "@emotion/react"

import { ThemeProvider as _ThemeProvider } from "@emotion/react"
import { pretendard } from "src/assets"

export const Global = () => {
  const theme = useTheme()

  return (
    <_Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
            color: ${theme.colors.blue12};               // 텍스트 색상을 진한 파란색으로
            background-color: ${theme.colors.blue2};     // 배경색을 연한 파란색으로
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
        }

          /* 다크모드 스타일 */
          [data-theme='dark'] body {
              color: ${theme.colors.blue11};
              background-color: ${theme.colors.blue4};  // 더 밝은 파란색으로 변경
          }

          [data-theme='dark'] hr {
              border-top: 1px solid ${theme.colors.blue6};  // 구분선도 좀 더 밝게
          }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: inherit;
          font-style: inherit;
        }

        a {
          all: unset;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: inherit;
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
            border-top: 1px solid ${theme.colors.blue6};  // gray6에서 blue6로 변경
        }
      `}
    />
  )
}
