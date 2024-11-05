import React from 'react'


interface CardProps {
    name: string;
    surname: string;
    mat: string;
    mail: string;
}

function Card(props: CardProps) {
    const { name, surname, mat, mail } = props;
    return (
        <div id='card'>
            <ul id='details-list'>
                <li> {name}</li>
                <li>{surname}</li>
                <li>{mat} </li>
                <li id='email'>
                    <a href={`mailto:${mail}`}>
                        <svg id='icon' width="30px" height="30px" viewBox="0 0 48 48" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><path className="cls-1" d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53" /></svg></a>
                </li>
            </ul>
        </div >
    )
}


export default Card