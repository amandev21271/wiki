import not_found_meme from '../assets/not-found-meme.jpg'
import Header from '../components/Header';
import '../assets/NotFound.css';
const NotFound = () =>{
    return(
        <div className="not-found">
            <Header />
            <img className="not-found-meme" src={not_found_meme} />
        </div>
    );
}

export default NotFound;