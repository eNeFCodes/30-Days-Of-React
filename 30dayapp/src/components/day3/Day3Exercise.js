import React from "react";

const Day3Exercise = () => {
    return (
        <div>
            <img src={require('../../assets/frontend_technologies.png')} />
            <div style={styles.subscribe}>
                <h1>SUBSCRIBE</h1>
                <p>Sign up with your email address to receive news and updates.</p>
                <div style={styles.inputContainer}>
                    <input id='fname' placeholder="First name" style={styles.input}></input>
                    <input id='lname' placeholder="Last name" style={styles.input}></input>
                    <input id='email' placeholder="Email" style={styles.input}></input>
                </div>
                <button id='submit' style={styles.button}>Subscribe</button>
            </div>
        </div>
    );
};
export default Day3Exercise;

const styles = {
    subscribe: {
        backgroundColor: '#61DBFB',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid #000000',
    },
    input: {
        padding: 8,
        margin: 8,
        borderRadius: 8,
        borderWidth: 0,
    },
    button: {
        backgroundColor: 'red',
        color: 'white',
        padding: 8,
        marginTop: 20,
        marginBottom: 20,
        width: 200,
        borderRadius: 8,
        borderWidth: 0
    }
}