import React from "react";
import { render } from "react-dom";

const BestComponentEver = () => {
    return (
        <div>
            javascript is fun 
        </div>
    );
};

const SecondBestComponentEver = (props) => {
    return (<div>I like {props.fruit}!</div>);
};

const AllComponents = () => {
    return (
        <React.Fragment>
            <BestComponentEver />
            <SecondBestComponentEver fruit="raspberry" />
        </React.Fragment>
    );
}

const AllComponents2 = () => {
    // hello world
    return (
        // using div elements here will cause them to be rendered div to be rendered
        <div> 
            {/* nice */}
            <BestComponentEver />
            <SecondBestComponentEver fruit="apple" />
        </div>
    );
}

render(<BestComponentEver />, document.getElementById("root"));
render(<SecondBestComponentEver fruit="banana" />, document.getElementById("bananaroot"));
render(<AllComponents />, document.getElementById("allcomponentsroot"));
render(<AllComponents2 />, document.getElementById("allcomponentsroot2"));
