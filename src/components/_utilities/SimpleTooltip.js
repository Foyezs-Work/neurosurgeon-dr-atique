import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

/**
 * 
 * @param {string} title 
 * @param {Element} children 
 * @param {string} position 
 * @returns SimpleTooltip
 */
const SimpleTooltip = ({ title, children, position = "top" }) => {

    return (
        <>
            <OverlayTrigger
                key={position}
                placement={position}
                overlay={
                    <Tooltip id={`tooltip-${position}`} className="text-capitalize">
                        {title}
                    </Tooltip>
                }
            >
                {children}
            </OverlayTrigger>
        </>
    );
}
export default SimpleTooltip;