import './Definition.css'
import cellbit from '../assets/cellbit.svg'
import banner from '../assets/banner.svg'
import op1 from '../assets/op1.svg'
import op2 from '../assets/op2.svg'
import op3 from '../assets/op3.svg'
import op4 from '../assets/op4.svg'
import op5 from '../assets/op5.svg'
import op6 from '../assets/op6.svg'

function VideoEmbed({ src }){
    function pauseVideo(e){
        const iframe = e.target
        const src = iframe.src
        iframe.src = src
    }

    return(
        <iframe 
        width="560" 
        height="315" 
        src={src}
        title="YouTube video player" 
        frameBorder="0"
        allow="autoplay; accelerometer; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; 
            web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        onMouseLeave={pauseVideo}></iframe>
    )
}

function Definition(){
    return(
        <>
            <img src={banner} className='banner' />
            <div className='container-definition'>
                <div className='container-text'>
                    <h1 className='titulo'>O QUE É ORDEM PARANORMAL?</h1>
                    <p className='definicao'>Ordem Paranormal é um universo de investigação paranormal criado por Rafael Lange (Cellbit), que teve seu início através de campanhas de RPG de mesa em transmissões ao vivo na Twitch. Um jogo da saga, Enigma do Medo, tem previsão de lançamento para 2024.</p>
                </div>
                <img src={cellbit} className='cellbit' /> 
            </div>

            <div className='container-campanha'>
                <h1 className='titulo'>CAMPANHAS</h1>
                <div className='container-imgs'>
                    <a href='' className="container">
                        <img src={op1} className='img-op'/>
                        <VideoEmbed 
                        src='https://www.youtube.com/embed/uplnCYc0fDg?autoplay=1&playsinline=1&mute=1&start=240'/>
                    </a>
                    <a href=''><img src={op2} className='img-op'/></a>
                    <a href=''><img src={op3} className='img-op'/></a>
                    <a href=''><img src={op4} className='img-op'/></a>
                    <a href=''><img src={op5} className='img-op'/></a>
                    <a href=''><img src={op6} className='img-op'/></a>
                </div>
            </div>

            <div className='container-classes'>
                <a href=''>
                    <img src='src/assets/personagens.svg'/>
                    <h1 className='texto-personagem'>PERSONAGENS</h1>
                </a>
                <a href='' className='classes-personagens'>
                    <img src='src/assets/jogo.svg'/>
                    <h1 className='texto-jogo'>JOGO</h1>
                </a>
            </div>
        </>
    )
}

export default Definition