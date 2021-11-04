import {FiUser, FiStar, FiUsers, FiArrowRight } from 'react-icons/fi'

import './styles.scss';

export default function InfoUser(){
    return(
        <div className="infoUser-card">
            <div className="card-image">
                <img src="https://avatars.githubusercontent.com/u/86198272?v=4" alt="avatar usuário" />
            </div>
            <div className="content">
                <h1>Hitalo Rodrigo Alves</h1>
                <div className="info">
                    <div className="follows-stars">
                        <div className="followers">
                            <FiUsers /> 6 Seguidores
                        </div>
                        <div className="following">
                            <FiUser /> 21 Seguindo
                        </div>
                        <div className="stars">
                            <FiStar /> 12 
                        </div>
                    </div>

                </div>
                <a href="#">
                        <FiArrowRight />
                </a>
            </div>
        </div>
    )
}