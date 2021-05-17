import React, {useState} from "react";
import { dbService } from "../fireb";

const Home = () => {
    const [whip, setWhip] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("whips").add({
            whip,
            createdAt: Date.now(),
        });
        setWhip("");
    };
    const onChange = (event) => {
        const {target : {value}} = event;
        setWhip(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={whip} onChange={onChange} type="textarea" placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" placeholder="whip"/>
            </form>
        </div>
    );
};
export default Home;