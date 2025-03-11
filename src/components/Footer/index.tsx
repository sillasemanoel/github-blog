import React from 'react'

import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

import * as S from './styles'

import GithubBlogLogo from '../../assets/github-blog-logo.svg'

import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <Link to="/">
          <img src={GithubBlogLogo} alt="" />
        </Link>
        <ul>
          <li>Cookies </li>
          <li> Política de Privacidade </li>
          <li> Termos e Condições de Uso </li>
          <li> Regulamento das Promoções </li>
          <li> FAQs</li>
        </ul>

        <ul>
          <li>
            <a
              target="_blank"
              href="https://github.com/sillasemanoel"
              rel="noreferrer"
            >
              <FaGithub size={22} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sillas-emanoel-656478218/"
              rel="noreferrer"
            >
              <AiFillLinkedin size={26} />
            </a>
          </li>
        </ul>
      </S.FooterContent>
    </S.FooterWrapper>
  )
}
