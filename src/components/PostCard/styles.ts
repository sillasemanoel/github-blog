import styled, { css } from 'styled-components'

export const PostCardWrapper = styled.article`
  ${({ theme }) => css`
    display: flex;

    width: 100%;
    height: 260px;
    background: ${theme['base-post']};

    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 10px;
    overflow: hidden;

    > header {
      display: flex;
      justify-content: space-between;

      > span {
        color: ${theme['base-title']};
        font-weight: bold;
        font-size: ${theme.xl};
      }

      > time {
        color: ${theme['base-span']};
        font-size: ${theme.xs};
        white-space: nowrap;
        margin-left: 0.5rem;
      }
    }

    > p {
      margin-top: 1.5rem;
      font-size: ${theme.xl};

      overflow: hidden;

      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      line-height: 160%;
    }
  `}
`
