/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Status = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <g clipPath="url(#clip0)">
      <path d="M1.99805 2.77233C1.99805 2.34471 2.34471 1.99805 2.77233 1.99805H17.2257C17.6533 1.99805 18 2.34471 18 2.77233V7.58989V12.4079V17.2257C18 17.6533 17.6533 18 17.2257 18H2.77233C2.34471 18 1.99805 17.6533 1.99805 17.2257V12.4079V7.58989V2.77233ZM3.54662 13.1822V16.4514H16.4514V13.1822H3.54662ZM16.4514 11.6336H3.54662V8.36417H16.4514V11.6336ZM16.4514 3.54662V6.8156H3.54662V3.54662H16.4514Z"
        fillRule="evenodd" clipRule="evenodd" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" transform="translate(2 2)" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);
Status.displayName = 'Status';
Status.propTypes = {
  size: PropTypes.string
}
export default Status;
/* tslint:enable */
/* eslint-enable */
