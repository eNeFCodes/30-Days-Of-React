import Day16Form from "./Forms";

const Day16 = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Day16 form submit...');
    };

    return (
        <Day16Form onSubmit={onSubmit}>
            <label className="day16-label" htmlFor="button" >BUTTON:</label>
            <input className="day16-input" id="button" type="button" /><br />
            <label className="day16-label" htmlFor="checkbox" >CHECKBOX:</label>
            <input className="day16-input" id="checkbox" type="checkbox" /><br />
            <label className="day16-label" htmlFor="color" >COLOR:</label>
            <input className="day16-input" id="color" type="color" /><br />
            <label className="day16-label" htmlFor="date" >DATE:</label>
            <input className="day16-input" id="date" type="date" /><br />
            <label className="day16-label" htmlFor="datetime-local" >DATETIME-LOCAL:</label>
            <input className="day16-input" id="datetime-local" type="datetime-local" /><br />
            <label className="day16-label" htmlFor="email" >EMAIL:</label>
            <input className="day16-input" id="email" type="email" /><br />
            <label className="day16-label" htmlFor="file" >FILE:</label>
            <input className="day16-input" id="file" type="file" /><br />
            <label className="day16-label" htmlFor="hidden" >HIDDEN:</label>
            <input className="day16-input" id="hidden" type="hidden" /><br />
            <label className="day16-label" htmlFor="image" >IMAGE:</label>
            <input className="day16-input" id="image" type="image" /><br />
            <label className="day16-label" htmlFor="month" >MONTH:</label>
            <input className="day16-input" id="month" type="month" /><br />
            <label className="day16-label" htmlFor="number" >NUMBER:</label>
            <input className="day16-input" id="number" type="number" /><br />
            <label className="day16-label" htmlFor="password" >PASSWORD:</label>
            <input className="day16-input" id="password" type="password" /><br />
            <label className="day16-label" htmlFor="radio" >RADIO:</label>
            <input className="day16-input" id="radio" type="radio" /><br />
            <label className="day16-label" htmlFor="range" >RANGE:</label>
            <input className="day16-input" id="range" type="range" /><br />
            <label className="day16-label" htmlFor="reset" >RESET:</label>
            <input className="day16-input" id="reset" type="reset" /><br />
            <label className="day16-label" htmlFor="search" >SEARCH:</label>
            <input className="day16-input" id="search" type="search" /><br />
            <label className="day16-label" htmlFor="submit" >SUBMIT:</label>
            <input className="day16-input" id="submit" type="submit" /><br />
            <label className="day16-label" htmlFor="tel" >TEL:</label>
            <input className="day16-input" id="tel" type="tel" /><br />
            <label className="day16-label" htmlFor="text" >TEXT:</label>
            <input className="day16-input" id="text" type="text" /><br />
            <label className="day16-label" htmlFor="time" >TIME:</label>
            <input className="day16-input" id="time" type="time" /><br />
            <label className="day16-label" htmlFor="url" >URL:</label>
            <input className="day16-input" id="url" type="url" /><br />
            <label className="day16-label" htmlFor="week" >WEEK:</label>
            <input className="day16-input" id="week" type="week" /><br />
        </Day16Form>
    );
}
export default Day16;