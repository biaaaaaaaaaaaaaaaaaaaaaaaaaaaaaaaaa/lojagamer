import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] bg-black">
      <h1 className="logo p-2 text-[1.5rem] text-white cursor-pointer transition-all">LOJA<span className="text-[#95ff00] p-1">GAMER</span></h1>
      <nav>
        <ul className="flex list-none items-center gap-8">
          <li>
            <link to="/" className="text-white text-lg no-underline hover:text-[#95ff00] hover:no-underline transition-all">Home</link>
          </li>
          <li>
            <link to="/contato" className="text-white text-lg no-underline hover:text-[#95ff00] hover:no-underline transition-all">Contato</link>
          </li>
          <li>
            <link to="/jogo" className="text-white text-lg no-underline hover:text-[#95ff00] hover:no-underline transition-all">Jogos</link>
          </li>
          <li>
            <link to="/login" className="text-white text-lg no-underline hover:text-[#95ff00] hover:no-underline transition-all">Login</link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
