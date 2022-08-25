import React, { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import BasicInfo from './BasicInfo';
import AboutForm from './AboutForm';


const BASIC_INFO = 1;
const ABOUT = 2;
const DETAILS = 3;
export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        name: "",
        date: "",
        gender: "",
        sports: [],
        team: "",
        location: "",
        interests: "",
        image: ""
    });

    const next = () => {
        setStep(step + 1)
    }

    const prev = () => {
        setStep(step - 1)
    }

    console.log(formValues)
    const handleChangeValue = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <Form>
                {renderForm(step, handleChangeValue, formValues)}
            </Form>

            <div className="d-flex justify-content-space-between">
                <Button onClick={prev}>Previous</Button>
                <Button onClick={next}>Next</Button>
            </div>
        </>
    )
}

const renderForm = (formPage, updateForm, values) => {
    if (formPage === BASIC_INFO) {
        return <BasicInfo handleChangeValue={updateForm} values={values} />
    }
    if (formPage === ABOUT) {
        return <AboutForm handleChangeValue={updateForm} values={values} />
    }
    if (formPage === DETAILS) {
        return (
            <div>
                details page
            </div>
        )
    }
}
