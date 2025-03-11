import { useEffect, useState } from 'react'

import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'

import { api } from '../../libs/axios'

import * as S from './styles'

interface User {
  avatar_url: string
  name: string
  html_url: string
  login: string
  company: string
  followers: number
  bio: string
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User)
  async function fetchUser() {
    const response = await api.get('/users/sillasemanoel')

    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <S.ProfileWrapper>
      <S.ProfileContent>
        <img src={user.avatar_url} alt={user.name} />
        <div>
          <header>
            <h1>{user.name} </h1>
            <a href={user.html_url} target="_blank" rel="noreferrer noopener">
              Github
              <BiLinkExternal size={15} />
            </a>
          </header>
          <p>{user.bio}</p>
          <footer>
            <span>
              <FaGithub size={18} /> {user.login}
            </span>
            <span>
              <FaBuilding size={18} /> {user.company}
            </span>
            <span>
              <FaUserFriends size={18} /> {user.followers} seguidores
            </span>
          </footer>
        </div>
      </S.ProfileContent>
    </S.ProfileWrapper>
  )
}
