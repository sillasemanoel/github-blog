import { Link, useParams, useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { FaGithub, FaClock, FaComment, FaChevronLeft } from 'react-icons/fa'

import ReactMarkdown from 'react-markdown'

import { BiLinkExternal } from 'react-icons/bi'

import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../libs/axios'

interface Issue {
  title: string
  comments: number
  user: {
    login: string
  }
  body: string

  created_at?: string
  createdAt: string

  html_url?: string
  htmlUrl: string
}

export function PostPage() {
  const navigate = useNavigate()
  const { issueId } = useParams()

  const [issue, setIssue] = useState<Issue>({} as Issue)

  useEffect(() => {
    if (Number.isNaN(Number(issueId))) {
      navigate('/')
    }
  }, [issueId, navigate])

  const fetchIssue = useCallback(async () => {
    const response = await api.get<Issue>(
      `/repos/sillasemanoel/github-blog/issues/${issueId}`,
    )

    // eslint-disable-next-line camelcase
    const {
      body,
      comments,
      created_at: _createdAt,
      html_url: _htmlUrl,
      title,
      user,
    } = response.data

    setIssue({
      body,
      comments,
      createdAt: _createdAt as string,
      title,
      user,
      htmlUrl: _htmlUrl as string,
    })
  }, [issueId])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <S.PostPageWrapper>
      <S.PostPageContent>
        <S.PostHeader>
          <S.Navigation>
            <Link to="/">
              <FaChevronLeft />
              Voltar
            </Link>

            <a target="_blank" href={issue.htmlUrl} rel="noreferrer">
              Ver no Github <BiLinkExternal fontWeight="bold" />
            </a>
          </S.Navigation>

          <h1>{issue.title}</h1>
          <S.Summary>
            <span>
              <FaGithub size={16} />
              {issue?.user?.login}
            </span>
            <time>
              <FaClock size={16} />

              {formatDistanceToNow(new Date(issue?.createdAt || new Date()), {
                addSuffix: true,
                locale: ptBr,
              })}
            </time>
            <span>
              <FaComment size={16} />
              {issue.comments} comentários
            </span>
          </S.Summary>
        </S.PostHeader>
        <main>
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </main>
      </S.PostPageContent>
    </S.PostPageWrapper>
  )
}
