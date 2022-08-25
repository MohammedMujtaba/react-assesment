import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const AboutForm = ({ handleChangeValue, values }) => {

    return (
        <Container >
            <Form.Group controlId="form.Team">
                <Form.Label>Team</Form.Label>
                <Form.Control type="text" placeholder="Enter team" name="team" value={values.team} onChange={(e) => handleChangeValue(e)} />
            </Form.Group>

            <Form.Group controlId="form.Location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" name="location" value={values.location} onChange={(e) => handleChangeValue(e)} />
            </Form.Group>

            <Form.Group controlId="form.Interests">
                <Form.Label>Interests</Form.Label>
                <Form.Control type="text" placeholder="Enter Interest" name="interests" value={values.interest} onChange={(e) => handleChangeValue(e)} />
            </Form.Group>

            <Form.Group controlId="form.Image">
                <Form.Label>Image
                </Form.Label>
                <Form.Control type="file" name="image" onChange={(e) => handleChangeValue(e)} value={values.image} />
            </Form.Group>

        </Container>
    )
}

export default AboutForm