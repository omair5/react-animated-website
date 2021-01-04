import React from 'react';
import Form from 'react-bootstrap/Form'
import styles from './FooterForm.module.css'
const FooterForm = () => {
    return (
        <>
                <Form >
                    <div className={styles.container1}>
                        <Form.Group className={styles.inputFieldBox}>
                            <Form.Control type="name" placeholder="NAME" className={styles.myinput} />
                        </Form.Group>
                        <Form.Group className={styles.inputFieldBox}>
                            <Form.Control type="email" placeholder="EMAIL" className={styles.myinput} />
                        </Form.Group>
                    </div>

                    <Form.Group className={styles.MessageBox}>
                        <Form.Control as="textarea" rows="4" placeholder="ADD A MESSAGE" className={styles.MessageBoxField} />
                    </Form.Group>

                    <div className={styles.SubmitButton}>SUBMIT</div>
                </Form>
        </>
    );
}

export default FooterForm;