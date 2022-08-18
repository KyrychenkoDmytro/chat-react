import './Message.scss';

const Message = ({ img, content, time }) => {

    const AMorPM = (h) => {
        if (h < 12) return 'AM';
        return 'PM';
    }
    const addZero = (m) => {
        return m < 10 ? '0' + m : m;
    }

    const timeNow = (t = new Date(time)) => {
        const Y = String(t.getFullYear()).substring(2);
        const M = t.getMonth() + 1;
        const D = t.getDate();
        const h = t.getHours() % 12;
        const m = addZero(t.getMinutes());
        const format = AMorPM(t.getHours());
        return `${M}/${D}/${Y} ${h}:${m} ${format}`;
    }

    return (
        <div className='Message'>
            < img src={img} alt="avatar" />
            <p>{content}
                <span>{timeNow()}</span>
            </p>
        </div >

    );
}

export default Message;