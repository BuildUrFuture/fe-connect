import { Link } from 'react-router-dom';
import feConnect from '../../assets/images/svg/FELOGOS.svg';

function Header() {
    return (
        <header className='container mx-auto shadow-sm'>
            <nav>
                <div id="logo-container" className='w-32 h-32'>
                    <img src={feConnect} alt="" className='h-full w-full' />
                </div>

                <div>
                    <ul>
                        <Link to={"#item1"}>teste</Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;