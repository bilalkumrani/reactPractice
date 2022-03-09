import { Button, Container, FormControl, Table } from "react-bootstrap";
import { useState } from "react";

const MyTable = (props) => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const add = () => {
    setNames([...names, name]);
  };

  return (
    <>
      <Container>
        <FormControl
          className="mt-5 w-25 mb-5 d-inline mr-3"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button className="btn btn-success" onClick={add}>
          Add
        </Button>
        <Button className="btn btn-danger">Delete</Button>
        <Button className="btn btn-warning">Update</Button>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default MyTable;
