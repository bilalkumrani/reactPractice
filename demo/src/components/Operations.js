import { Button } from "react-bootstrap"

const Operations = (props) =>{

    return (
     <>
    <Button variant="success" onClick={props.increment}>Plus</Button>
    <Button variant="danger" onClick={props.decrement}>Minus</Button>

</>
    )
};
export default Operations;