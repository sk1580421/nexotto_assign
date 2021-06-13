import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './pages_css/require_pass.css'
import { isUserLoggedInwithPass, loginwithpass } from '../action/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'
import { motion } from 'framer-motion'


function Require_pass() {

    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const submitPass = (e) => {
        e.preventDefault()
        dispatch(loginwithpass(password))
        if (auth.msg) {
            setAlert(true)

            setTimeout(() => {
                setAlert(false)


            }, 2000)


        }

    }



    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 },
        }
    }


    const loginresult = localStorage.getItem('loginresult')
    const firstName = localStorage.getItem('firstName')
    console.log(firstName)

    useEffect(() => {
        if (loginresult) {
            dispatch(isUserLoggedInwithPass())
        }
    }, [])



    console.log("reload")

    if (auth.loginResult) {
        return window.location.href = "https://www.nexotto.com/";

    }



    return (
        <div className="passbackground">

            <motion.h5
                initial={{ y: "-250px" }}
                animate={{ y: "0" }}
            > {alert ? auth.msg : null}</motion.h5>

            <motion.div className="pass"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="nexotto">
                    <span className="n">N</span>
                    <span className="e">e</span>
                    <span className="x">x</span>
                    <span className="o">o</span>
                    <span className="t">t</span>
                    <span className="t">t</span>
                    <span className="o">o</span>

                </div>
                <div className="passsubtitle">{`Welcome ${firstName} please  enter your password to proceed`}</div>


                <Form className="form" onSubmit={submitPass}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="formlabel">Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="input"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your Password with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <a Link className="forgetemail">
                        forget Password?
                    </a>
                    <div className="footer">
                        <div className="donthaveaccount">







                            <a href="/email" className="">
                                Login with different email
                            </a>
                        </div>


                        <Button variant="primary" type="submit"
                            classsName="loginbutton"
                        >
                            Next
                        </Button>

                    </div>
                </Form>

            </motion.div>
        </div >
    )
}

export default Require_pass
