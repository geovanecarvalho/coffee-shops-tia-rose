import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faList, faPhone } from '@fortawesome/free-solid-svg-icons'
import style from './header.module.css'

function Header(){
    return (
     <div>
        <div className="conteiner m-2 fixed-top">
            <div className="row">
                <div className="col">
                    <div className={style.navbar}>
                        <nav className="navbar navbar-light p-3 rounded">
                            <a className={style.coffeeShops} href="/coffee-shops-tia-rose/#"> <FontAwesomeIcon icon={faCoffee} className="me-2"/>Coffee Shops</a>
                            <div>
                                <a className="btn btn-outline-light me-2" href="/coffee-shops-tia-rose/#produto"><FontAwesomeIcon icon={faList} className='me-2'/>Produtos</a>
                                <a className="btn btn-outline-light" href="/coffee-shops-tia-rose/#footer"><FontAwesomeIcon icon={faPhone} className='me-2'/>Contato</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}
export default Header;