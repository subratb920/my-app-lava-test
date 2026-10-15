import { useDispatch, useSelector } from 'react-redux'
import { increment, type RootState } from './store.ts'
import { Link, Route, Routes } from 'react-router'
import './App.css'

const name = 'my-app-lava-test'
const description = 'Testing project creation from continuum lava'

function Home({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <>
      <p>
        Edit <code>src/App.tsx</code> and save to see it change.
      </p>
      <button type="button" className="counter" onClick={onClick}>
        Count is {count}
      </button>
    </>
  )
}

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main className="app">
      <h1>{name}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home count={count} onClick={() => dispatch(increment())} />} />
        <Route path="/about" element={<p>{description}</p>} />
      </Routes>
      <section className="included">
        <h2>Included</h2>
        <ul>
          <li><a href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a></li>
          <li><a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">Redux Toolkit</a></li>
          <li><a href="https://axios-http.com/" target="_blank" rel="noreferrer">Axios</a></li>
          <li><a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">Tailwind CSS</a></li>
          <li><a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">React Hook Form</a></li>
        </ul>
      </section>
    </main>
  )
}

export default App
