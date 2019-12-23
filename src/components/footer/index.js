import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function TransitionsTooltips() {
    return (
        <div>
            <Tooltip title="Instagram">
                <InstagramIcon></InstagramIcon>
            </Tooltip>
            <Tooltip
                title="Facebook">
                <FacebookIcon></FacebookIcon>
            </Tooltip>
            <Tooltip
                title="LinkedIn">
                <LinkedInIcon></LinkedInIcon>
            </Tooltip>
        </div>
    );
}