import styled from 'styled-components'

import Cover from '../../assets/cover.png'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  background-image: url(${Cover});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19rem;
  flex: 1;
  max-width: 1440px;
  padding: 1rem;

  > img {
    height: 6rem;
    transform: translateY(-50%);
  }
`
