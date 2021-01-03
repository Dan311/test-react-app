import UseStateExamples from "./use-state-examples";

function HooksExamples({ } ) {
 
    return (
        <>
            <UseStateExamples/>
            <UseStateExamples initialValue={10}/>
            <UseStateExamples initialValue={20}/> 
        </>
    );
}

export default HooksExamples