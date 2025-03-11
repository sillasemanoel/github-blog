import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { HomePage } from './pages/Home'
import { PostPage } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path="/">
        <Route element={<HomePage />} path="/" />
        <Route element={<PostPage />} path="/post/:issueId" />
      </Route>
    </Routes>
  )
}
