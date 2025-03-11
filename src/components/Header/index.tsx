import * as S from './styles'

import GithubBlogLogo from '../../assets/github-blog-logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">
          <img src={GithubBlogLogo} alt="" />
        </Link>
      </S.HeaderContent>
    </S.HeaderWrapper>
  )
}
