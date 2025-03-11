import styled, { css } from 'styled-components'

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    transform: translateY(-50%);
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    transform: translateY(-50%);

    @media (max-width: ${theme['breakpoint-md']}) {
      transform: translateY(-25%);
    }
  `}
`

export const ProfileContent = styled.div`
  ${({ theme }) => css`
    flex: 1;
    max-width: 1440px;
    padding: 2rem 2.5rem;
    min-height: 13rem;
    height: auto;
    padding: 1rem;

    background: ${theme['base-profile']};

    display: flex;
    gap: 2rem;

    @media (max-width: ${theme['breakpoint-md']}) {
      flex-direction: column;
      align-items: center;
    }

    > img {
      width: 9rem;
      height: 9rem;
      flex-shrink: 0;
      border-radius: 8px;
    }

    > div {
      width: 100%;
    }

    p {
      font-size: ${theme.md};
      padding-top: 1rem;
      padding-bottom: 1.5rem;

      @media (max-width: ${theme['breakpoint-md']}) {
        text-align: center;
      }
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;

      > h1 {
        font-size: ${theme['2xl']};
        font-weight: bold;
        color: ${theme['base-title']};

        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 60vw;

        @media (max-width: ${theme['breakpoint-md']}) {
          font-size: ${theme.xl};
        }
      }

      > a {
        color: ${theme.blue};
        text-transform: uppercase;
        font-weight: bold;
        font-size: ${theme.xs};

        display: flex;
        justify-content: center;
        align-items: center;

        line-height: 0;

        svg {
          margin-left: 0.5rem;
        }
      }
    }

    footer {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;

      @media (max-width: ${theme['breakpoint-md']}) {
        gap: 0.5rem;
        justify-content: center;
      }

      > span {
        font-size: ${theme.md};
        color: ${theme['base-subtitle']};
        line-height: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        line-height: 160%;

        white-space: nowrap;
        text-overflow: ellipsis;

        @media (max-width: ${theme['breakpoint-md']}) {
          &:not(:first-child)::before {
            content: '';
            width: 3px;
            height: 3px;
            background-color: ${theme['base-span']};
            border-radius: 100%;
            margin-right: 0.5rem;
          }
        }

        > svg {
          color: ${theme['base-label']};

          @media (max-width: ${theme['breakpoint-md']}) {
            display: none;
          }
        }
      }
    }
  `}
`
