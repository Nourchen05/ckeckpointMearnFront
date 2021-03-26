import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button variant="success" onClick={() => dispatch(toggleAdd)}>
        Add contact
      </Button>
      <Link to="/">
        <Button variant="warning">List contacts</Button>
      </Link>
    </div>
  );
};

export default Home;
