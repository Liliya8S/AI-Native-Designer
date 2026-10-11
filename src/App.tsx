import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Showcase from './Showcase'
import { ScreensIndex } from './screens/Index'
import { screens } from './screens/registry'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<ScreensIndex />} />
          {screens.map((screen) => (
            <Route key={screen.id} path={screen.route} element={<screen.component />} />
          ))}
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
