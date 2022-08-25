import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const BasicInfo = ({ handleChangeValue, values }) => {
    return (
        <Container >
            <Form.Group controlId="form.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" onChange={(e) => handleChangeValue(e)} value={values.name} />
            </Form.Group>

            <Form.Group controlId="form.Date">
                <Form.Label>Date of Birth
                </Form.Label>
                <Form.Control type="date" name="date" onChange={(e) => handleChangeValue(e)} value={values.date} />
            </Form.Group>

            <Form.Group controlId="form.Select">
                <Form.Label>Gender</Form.Label>
                <Form.Select aria-label="Default select example" name="gender" onChange={(e) => handleChangeValue(e)} value={values.gender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="form.Select">
                <Form.Label>Sports</Form.Label>
                <DropdownMultiselect
                    options={["Golf", "Tennis", "Cricket", "Basketball", "Baseball", "American Football"]}
                    name="sports"
                    handleOnChange={(sports) => handleChangeValue({ target: { name: "sports", value: sports } }
                    )}
                // onSelect={(e) => console.log(e)}
                />
            </Form.Group>
        </Container>
    )
}

export default BasicInfo