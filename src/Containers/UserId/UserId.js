import './UserId.scss';
import Header from '../../Components/Header/Header';
import ChatWindow from '../../Components/ChatWindow/ChatWindow';
import SendMessage from './SendMessage/SendMessage';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserId = ({ data }) => {

    const { id } = useParams();

    const messages = useSelector((state) => state.send.value[id]);
    let info = data.filter((item) => item.id === id);
    info = info[0];
    const { name, img } = info;

    return (
        <div className="UserId">
            <Header img={img} name={name} />
            <ChatWindow img={img} messages={messages} />
            <SendMessage id={id} />
        </div>
    );
}
export default UserId;