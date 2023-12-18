import React from 'react';

const ErrorMessage = ({ field, formik }) => {
  return (
    <>
      {formik.touched[field] && formik.errors[field] && (
        <div style={{ color: 'red', marginTop: '5px' }}>{formik.errors[field]}</div>
      )}
    </>
  );
};

export default ErrorMessage;
