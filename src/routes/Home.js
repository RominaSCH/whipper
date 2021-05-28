import React, {useState, useEffect} from "react";
import { dbService } from "../fireb";
import "./Home.css";

const Home = () => {
    const [whip, setWhip] = useState("");
    const [whips, setWhips] = useState([]);
    const getWhips = async() => {
        const dbWhips = await dbService.collection("whips").get();
        dbWhips.forEach((document) => {
            const whipObject = {
                ...document.data(),
                id: document.id,
            }
            setWhips((prev) => [whipObject, ...prev]);
        });
    }
    useEffect(() => {
        getWhips();
    }, []);
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
        <div className="home">
            <form onSubmit={onSubmit}>
                <input className="whip_input" value={whip} onChange={onChange} type="textarea" placeholder="What's on your mind?" maxLength={120} />
                <input className="whip_submit" type="submit" placeholder="whip"/>
            </form>
            <div>
                {whips.map((whip) => (
                    <div className="whipEach" key={whip.id}>
                        <h4>{whip.whip}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home;