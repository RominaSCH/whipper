import React, {useState} from "react";

const Home = () => {
    const [whip, setWhip] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
    };
    const onChange = (e) => {
        const {target : {value}} = e;
        setWhip(e);
    };
    return (
        <div>
            <form>
                <input value={whip} onChange={onChange} type="textarea" placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" placeholder="whip"
            </form>
        </div>
    );
};
export default Home;