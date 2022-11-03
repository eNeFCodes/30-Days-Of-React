import React from "react";
import './UserCard.css'

const UserCard = ({ imageSRC,
    name,
    position = 'Developer, PH',
    skills = ['HTML', 'CSS', 'JS'],
    joined
}) => {

    return (
        <div style={styles.main}>
            <div className="user-card" style={styles.avatarContainer}>
                <img src={imageSRC} style={styles.avatar} />
                <div style={styles.nameContainer}>
                    <label className="name" style={styles.name}>{name}</label>
                    <img src={require('../../assets/check_green.png')} style={styles.checkmark} />
                </div>
                <label className="position" style={styles.position}>{position}</label>
            </div>
            <label className="skill-set-title">{'SKILLS'}</label>
            <div className="skill-set">
                {skills.map((skill, index) =>
                    <label key={index} className="skill">{skill}</label>
                )}
            </div>
            <div className="joined-date">
                <img className="clock" src={require('../../assets/clock.png')} />
                <label className="joined-label">Joined on {joined}</label>
            </div>
        </div>
    );
};
export default UserCard;

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left'
    },
    avatarContainer: {
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        overflow: 'hidden',
        objectFit: 'cover'
    },
    nameContainer: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center'
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        margin: 8
    },
    checkmark: {
        height: 20,
        width: 20,
        borderRadius: 10,
        overflow: 'hidden',
        objectFit: 'contain',
        marginLeft: 8
    },
    position: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        margin: 8
    },
};