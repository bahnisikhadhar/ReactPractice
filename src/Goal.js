export default function Goal(props){
    const isGoal = props.isGoal;
    function MissedGoal() {
        return <h1>MISSED!</h1>;
    }
    
    function MadeGoal() {
        return <h1>GOAL!</h1>;
    }
    
    return(
        (isGoal) ? <MadeGoal/> : <MissedGoal /> // conditional rendering
       
    );
}