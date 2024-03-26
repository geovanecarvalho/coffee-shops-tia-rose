import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCopyright, faMailBulk, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import style from './footer.module.css'

function Footer(){
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className={style.footer}>
                            <footer className="flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                                <h2 className="text-center"><FontAwesomeIcon icon={faCoffee} className='me-2'/>Contato</h2>
                                <h5 className="text-center"><FontAwesomeIcon icon={faCopyright} className='me-2'/>Coffee Shops Tia Rose</h5>
                                <h5><FontAwesomeIcon icon={faUser} className='me-2'/>Nome: Tia Rose</h5>
                                <h5><FontAwesomeIcon icon={faPhone} className='me-2'/>Telefone: 061-3321-4598</h5>
                                <h5><FontAwesomeIcon icon={faPhone} className='me-2'/>Celular: 061-99874-4536</h5>
                                <h5><FontAwesomeIcon icon={faMailBulk} className='me-2'/>Email: coffeeshops_tiarose@gmail.com</h5>
                            </footer>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer