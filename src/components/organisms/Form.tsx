import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface FormField {
    label: string;
    type: string;
    required: boolean;
    placeholder: string;
}

interface FormFieldWithId extends FormField {
    id: string;
}

interface PropsType {
    fields: FormField[];
    successMessage: string;
}

const nameToId = (str: string) => {
    return (
        str &&
        str
            .match(
                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            .map(x => x.toLowerCase())
            .join("_")
    );
};

const GravityForm: React.FC<PropsType> = props => {
    const [submitted, setSubmitted] = React.useState(false);

    const fields: FormFieldWithId[] = props.fields.map(field => ({
        ...field,
        id: nameToId(field.label)
    }));

    const handleValidate = (values: { [key: string]: string }) => {
        const errors = {};
        for (const [fieldId, value] of Object.entries(values)) {
            for (const field of fields) {
                if (field.id === fieldId) {
                    if (field.required && !value) {
                        errors[fieldId] = "Required";
                    } else if (
                        field.type === "email" &&
                        !emailRegex.test(value)
                    ) {
                        errors[fieldId] = "Invalid email address";
                    }
                }
            }
        }
        return errors;
    };

    const handleSubmit = (v, a) => {
        setSubmitted(true);
    };

    // Default every field to empty string
    const initialValues = fields.reduce((t, c) => ({ ...t, [c.id]: "" }), {});

    if (submitted) {
        const confirmationMessage = props.successMessage;
        return <p>{confirmationMessage}</p>;
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form
                    style={{ opacity: isSubmitting ? 0.5 : null }}
                    action="/form-submit"
                    data-netlify="true"
                >
                    {fields.map(field => (
                        <div className="sfield" key={field.id}>
                            <label className="sfield__label" htmlFor={field.id}>
                                {field.label}
                            </label>
                            <Field
                                className="sfield__input"
                                type={field.type}
                                name={field.id}
                                id={field.id}
                                placeholder={field.placeholder}
                                component={
                                    field.type === "textarea"
                                        ? "textarea"
                                        : null
                                }
                            />
                            <ErrorMessage
                                className="sfield__error"
                                name={field.id}
                                component="div"
                            />
                        </div>
                    ))}
                    <button
                        className="button-green"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    "i"
);

export default GravityForm;
