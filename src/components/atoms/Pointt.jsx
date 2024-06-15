function Pointt(props) {
    const style = {
        display: 'inline-block',
        width: props.size || '10px', 
        height: props.size || '10px',
        borderRadius: '50%', 
        backgroundColor: props.color, 
        marginBottom: '0', 
        marginRight: '5px', 
    };

    return <span style={style}></span>
}

export default Pointt;
