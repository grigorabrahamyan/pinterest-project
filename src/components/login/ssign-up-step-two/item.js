import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

function Item(props) {

    const{urlImg, name, id, getTopicIdSignUpStep} = props;
    const[isChose, setIsChose] = useState(false);

    function getTopicId() {
        getTopicIdSignUpStep(id);
        setIsChose(!isChose);
    };

    return (
        <div 
            className = 'item'
            onClick = {getTopicId}
        >
            <img className = {isChose ? 'item-img-chose' : 'item-img'} src = {urlImg} alt = {`Category ${name}`} />
            <div class="middle">
                <div class={isChose ? 'text-chose' : "text"} >{isChose ? `unfollow`.toUpperCase() : `${name}`.toUpperCase()}</div>
            </div>
            {/* <div className = 'item-name'>
                <Typography>
                    {name}
                </Typography>
            </div> */}
        </div>
    );
};

export default Item;