import './Header.css'
import banner from '../assets/banner.svg'

function Header(){
    return(
        <>
            <div className='body'>
                <a className='titulo' href=''>Início</a>
                <a className='titulo' href=''>Campanhas</a>
                <a className='titulo' href=''>Personagens</a>
                <a className='titulo' href=''>Jogo</a>
            </div>

        </>
    )
}

export default Header