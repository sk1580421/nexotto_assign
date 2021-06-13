import React, { useEffect, useState } from 'react'
import './pages_css/login.css'
import { Form, Button } from 'react-bootstrap';
import { isUserLoggedInwithEmail, loginwithemail } from '../action/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { motion } from 'framer-motion'



function Login() {



    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState(false)

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const firstName = localStorage.getItem('firstName')



    const submitEmail = (e) => {
        e.preventDefault()
        console.log("gvhbnjmemail")
        dispatch(loginwithemail(email))


    }

    useEffect(() => {
        if (auth.msg) {
            setAlert(true)

            setTimeout(() => {
                setAlert(false)

            }, 1500)

        }
    }, [auth])











    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 },
        },

    }







    console.log("reload")

    if (auth.authenticate) {
        return <Redirect to={"/pass"} />
    }



    return (
        <div className="loginbackground"

        >
            <motion.h5
                initial={{ y: "-250px" }}
                animate={{ y: "0" }}
            > {alert ? auth.msg : null}</motion.h5>

            <motion.div className="login"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                <div className="nexotto">
                    <span className="n">N</span>
                    <span className="e">e</span>
                    <span className="x">x</span>
                    <span className="o">o</span>
                    <span className="t">t</span>
                    <span className="t">t</span>
                    <span className="o">o</span>
                </div>
                <div className="subtitle">Sign in with your Nexotto account</div>

                <Form onSubmit={submitEmail} className="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="formlabel">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="input"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <a href="#" className="forgetemail">
                        forget email?
                    </a>
                    <div className="footer">
                        <div className="donthaveaccount">

                            <div >Don't have an account</div>




                            <a href="#" className="">
                                Create an account
                            </a>
                        </div>
                        <Button variant="primary" type="submit"
                            className="loginbutton"
                        >
                            Next
                        </Button>

                    </div>
                </Form>
            </motion.div>
        </div >
    )
}

export default Login
