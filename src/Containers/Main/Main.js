import './Main.scss';
import Header from '../../Components/Header/Header';
import ChatWindow from './ChatWindow/ChatWindow';
import SendMessage from './SendMessage/SendMessage';

const Main = () => {
    return (
        <div className="Main">
             <Header />
             <ChatWindow />
             <SendMessage />
        </div>
    );
}
export default Main;