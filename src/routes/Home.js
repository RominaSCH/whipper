import React, {useState, useEffect} from "react";
import { dbService } from "../fireb";
import "./Home.css";

const Home = ({userObj}) => {
    const [whip, setWhip] = useState("");
    const [whips, setWhips] = useState([]);

    useEffect(() => {
        // getWhips();
        dbService.collection("whips").onSnapshot((snapshot) => {
            const whipArray = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data(),}));
            setWhips(whipArray);
            //rerender 가 적어 더 빠르게 실행된다
        });
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("whips").add({
            text:whip,
            createdAt: Date.now(),
            creatorId:userObj.uid,
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
                        <h4>{whip.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home;