import styled, { css } from 'styled-components'

export const HomePageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`

export const HomeMain = styled.main`
  max-width: 1440px;
  width: 100%;
`

export const PostList = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(350px, calc(100% / 2 - 1rem)), 1fr)
  );

  > a {
    color: unset;
  }
`

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    > h1 {
      font-size: ${theme.xl};
      font-weight: bold;
      color: ${theme['base-subtitle']};
    }

    > span {
      font-size: ${theme.sm};
      color: ${theme['base-span']};
    }
  `}
`

export const SearchForm = styled.form`
  ${({ theme }) => css`
    margin-top: 0.85rem;
    margin-bottom: 2.5rem;
    display: flex;
    gap: 1rem;

    > button {
      background: ${theme.blue};
      color: ${theme['base-title']};
      font-weight: bold;
      padding: 0 2rem;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        filter: brightness(0.8);
        transition: filter 0.3s;
      }

      > svg {
        display: none;
      }

      @media (max-width: ${theme['breakpoint-md']}) {
        padding: 0 1rem;

        > span {
          display: none;
        }

        > svg {
          display: block;
        }
      }
    }

    > input {
      flex: 1;
      border-radius: 6px;
      padding: 1rem 0.85rem;
      background: ${theme['base-input']};
      border: 1px solid ${theme['base-border']};
      color: ${theme['base-title']};

      &::placeholder {
        color: ${theme['base-label']};
      }
    }
  `}
`

export const Empty = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > strong {
      font-size: ${theme.xl};
    }
  `}
`
