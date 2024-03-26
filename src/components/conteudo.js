import style from './conteudo.module.css'

function Conteudo(){
    return (
        <div className={style.config}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={style.conteudoCoffee}>

                            <div className="jumbotron jumbotron-fluid">
                                <div className="container text-center p-2">
                                    <h1 className="display-4">Coffee Shops da Tia Rose</h1>
                                    <hr className="my-4 "/>
                                    <p className="lead">Seja bem-vindo a nossa cafeteria online, onde cada gole é uma experiência que aquece a alma e desperta os sentidos. Localizada no coração da cidade, 
                                    nossa cafeteria é um refúgio acolhedor para os amantes do café e apreciadores de momentos de tranquilidade. Desde o momento em que você adentra nossas portas, é envolvido por uma atmosfera única, permeada pelo aroma tentador de grãos torrados e pela calorosa hospitalidade que só a Tia Rose sabe oferecer. Nossa missão é proporcionar não apenas uma bebida, mas uma jornada sensorial completa, 
                                    onde cada xícara conta uma história de dedicação, qualidade e paixão.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Conteudo;