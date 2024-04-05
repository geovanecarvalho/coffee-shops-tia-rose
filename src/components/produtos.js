function Produtos(){
    return (
        <div>
            <div id="produto" className="conteiner m-5">

                {/* três produtos cards */}

                <div className="row m-2">
                    <div className="col-sm">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="https://st2.depositphotos.com/5355656/7813/i/450/depositphotos_78138608-stock-photo-a-cup-of-cappuccino.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Cappuccino</h5>
                                    <p className="card-text">O Cappuccino é uma das bebidas de café mais populares em todo o mundo, apreciada por sua combinação equilibrada de café expresso, leite vaporizado e uma generosa camada de espuma de leite.</p>
                                    <p className="card-text"><small className="text-muted">R$ 6,00</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="https://img.freepik.com/fotos-gratis/deliciosa-xicara-de-cafe-de-qualidade_23-2150691369.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Macchiato</h5>
                                    <p className="card-text">O café Macchiato, originário da Itália, é uma deliciosa variação do café espresso que combina a intensidade do expresso com um toque suave de leite vaporizado.</p>
                                    <p className="card-text"><small className="text-muted">R$ 12,00</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="https://img.freepik.com/fotos-premium/uma-xicara-de-cafe-com-graos-de-cafe-em-uma-mesa-de-madeira_25996-3196.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Expresso</h5>
                                    <p className="card-text">A quantidade de café moído usada para cada dose de espresso é medida e colocada no porta-filtro.</p>
                                    <p className="card-text"><small className="text-muted">R$ 2,00</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* três produtos cards */}
                
                <div className="row m-2">
                    <div className="col-sm">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="https://media.istockphoto.com/id/1148270078/pt/foto/pouring-cold-brew-iced-coffee.jpg?s=612x612&w=0&k=20&c=LUrgoQOMluEG1a8z1LnMusEW45TlX1-xj79bl3AgMoE=" />
                                <div className="card-body">
                                    <h5 className="card-title">Cold Brew</h5>
                                    <p className="card-text">O café Cold Brew é uma bebida refrescante e suave, preparada através da infusão de grãos de café em água fria por um período prolongado.</p>
                                    <p className="card-text"><small className="text-muted">R$ 24,91</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="https://media.istockphoto.com/id/476824782/pt/foto/caf%C3%A9-caf%C3%A9-latte.jpg?s=612x612&w=0&k=20&c=lqCrPEmig5kpTPv4wvvy5OTgn0q6pWnQVd14PkWTWDk=" />
                                <div className="card-body">
                                    <h5 className="card-title">Café Affogatto</h5>
                                    <p className="card-text">O café Affogato é uma deliciosa sobremesa italiana que combina café espresso quente com sorvete de baunilha gelado.</p>
                                    <p className="card-text"><small className="text-muted">R$ 39,86</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src="https://maesbrasileiras.com.br/portal/wp-content/uploads/2014/09/Cafe%CC%81-na-xi%CC%81cara.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Café tradicional</h5>
                                    <p className="card-text">O café tradicional pode ser preparado de várias maneiras, mas vou descrever o processo básico de preparação utilizando um método de infusão com filtro, como a cafeteira de gotejamento.</p>
                                    <p className="card-text"><small className="text-muted">R$ 2,00 </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produtos;