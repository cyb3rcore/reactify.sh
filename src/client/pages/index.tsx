export function getMeta() {
  return { title: 'reactify-sh', description: 'A Reactify project' }
}

export function getData() {
  return { message: 'Welcome to your Reactify app!' }
}

export default function Home() {
  return (
    <div>
      <h1>reactify-sh</h1>
      <p>Built with Reactify — Fastify + React + Vite</p>
      <nav>
        <a href="/demo">View demos</a>
      </nav>
    </div>
  )
}
