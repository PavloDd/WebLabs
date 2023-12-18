import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import { Button, Form } from "antd";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import "../css/Form.css"

function PurchaseForm() {
  const navigate = useNavigate();
  
  const handleButtonToCartClick = () => {
    navigate('/cart');
  }

  const formik = useFormik({

        initialValues: {
            firstname: '',
            surname: '',
            email: '',
            phoneNumber: '',
            promoCode: ''
        },
    
        validationSchema: Yup.object({
            firstname: Yup.string()
                .required('First name is a required field')
                .matches(/^[a-zA-Z-' ]{2,}$/, 'Invalid format for first name'),
            surname: Yup.string()
                .required('Surname is a required field')
                .matches(/^[a-zA-Z-' ]{2,}$/, 'Invalid format for last name'),
            email: Yup.string()
                .email('Email is incorrect')
                .required('Email is a required field'),
            phoneNumber: Yup.string()
                .matches(/^\d{10}$/, 'Phone number is incorrect')
                .required('Phone number is a required field'),
            promoCode: Yup.string().matches(
                /^$|^[a-z]\d{4}$/,
                'Promo code is incorrect'),
        }),
        
        onSubmit: (values) => {
            console.log(values);
            navigate('/success');
        }
    
    });
    
    return (
    <form onSubmit={formik.handleSubmit} type="form">
      <label htmlFor="firstname">Firstname:</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname}
        />
        <ErrorMessage field="firstname" formik={formik} />    
        <label htmlFor="surname">Surname:</label>
      <input
        type="text"
        id="surname"
        name="surname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.surname}
        />
        <ErrorMessage field="surname" formik={formik} />    
        <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        <ErrorMessage field="email" formik={formik} />    
        <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
        />
        <ErrorMessage field="phoneNumber" formik={formik} />    
        <label htmlFor="promoCode">Promocode:</label>
      <input
        type="text"
        id="promoCode"
        name="promoCode"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.promoCode}
        />
        <ErrorMessage field="promoCode" formik={formik} />    
        <Button type="primary" htmlType="submit">Purchase</Button>
        <Button className='backToCart' onClick={handleButtonToCartClick}>Back to Cart</Button>
    </form>
  );
}

export default PurchaseForm;