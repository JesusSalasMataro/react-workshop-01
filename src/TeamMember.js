import React from 'react';

const TeamMember = ({name, team}) =>
    <li>
        <span><b>{name}</b> </span>
        <span>{team}</span>
    </li>

export default TeamMember;
