import * as React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

function encode(data: { [key: string]: string }) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

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
    const formRef = React.useRef<HTMLFormElement>(null);

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

    const handleSubmit = async (
        values: any,
        { setSubmitting }: FormikHelpers<any>
    ) => {
        const form = formRef.current;
        if (form) {
            const formData = new FormData(form);
            for (const [key, value] of formData.entries()) {
                console.log({ [key]: value });
            }
            try {
                const data = {
                    "form-name": form.getAttribute("name"),
                    ...values
                };
                await fetch("/", {
                    method: "POST",
                    body: encode(data)
                });
                setSubmitting(false);
            } catch (error) {
                console.error(error);
                setSubmitting(false);
            }
        }
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
            {formProps => (
                <form
                    style={{ opacity: formProps.isSubmitting ? 0.5 : null }}
                    data-netlify="true"
                    name="contact"
                    onReset={formProps.handleReset}
                    onSubmit={formProps.handleSubmit}
                    ref={formRef}
                    action="/form-submit"
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
                        disabled={formProps.isSubmitting}
                    >
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
};

const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    "i"
);

export default GravityForm;
