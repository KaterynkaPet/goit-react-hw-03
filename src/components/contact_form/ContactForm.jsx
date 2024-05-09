import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import ContactForm from './ContactForm.module.css'

const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, { resetForm }) => {
        addContact({ id: Math.random().toString(), ...values });
        resetForm();
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required')
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be less than 50 characters'),
        number: Yup.string()
            .required('Required')
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be less than 50 characters'),
    });
    
    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' name='name' id='name' />
                    <ErrorMessage name='name' component='div' />
                </div>
            
                <div>
                    <label htmlFor='number'>Number</label>
                    <Field type='number' name='number' id='number' />
                    <ErrorMessage name='number' component='div' />
                </div>
            
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
        
    );
};
export default ContactForm;