import Nav from './components/Nav'
import Hero from './sections/Hero'
import Introduction from './sections/Introduction'
import Philosophy from './sections/Philosophy'
import Curricular from './sections/Curricular'
import CoCurricular from './sections/CoCurricular'
import Closing from './sections/Closing'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <Philosophy />
        <Curricular />
        <CoCurricular />
        <Closing />
      </main>
    </>
  )
}
