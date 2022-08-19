import './UserId.scss';
import Header from '../../Components/Header/Header';
import ChatWindow from './ChatWindow/ChatWindow';
import SendMessage from './SendMessage/SendMessage';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserId = ({data}) => {
    const { id } = useParams();
    
    const message = useSelector((state) => state.send.value[id]);
    let info = data.filter((item) => item.id === id);
    info = info[0];
    const { name, img } = info;

    return (
        <div className="UserId">
            <Header img={img} name={name} />
            <ChatWindow img={img} message={message} />
            <SendMessage id={id} />
        </div>
    );
}
export default UserId;