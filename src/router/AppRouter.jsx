import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {

    const authStatus = 'not-authenticated';

    return (
    <Routes>
        <Route path='/auth/*' element/>
    </Routes>
  )
}
