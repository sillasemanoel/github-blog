import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import * as S from './styles'

interface PostCardProps {
  title: string
  createdAt: string
  body: string
}

export function PostCard({ body, createdAt, title }: PostCardProps) {
  return (
    <S.PostCardWrapper>
      <header>
        <span>{title}</span>
        <time>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBr,
          })}
        </time>
      </header>

      <p>{body}</p>
    </S.PostCardWrapper>
  )
}
