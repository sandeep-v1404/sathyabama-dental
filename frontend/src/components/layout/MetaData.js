import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Sathyabama Dental`}</title>
        </Helmet>
    )
}

export default MetaData
MetaData.propTypes = {
    title: PropTypes.string,
};