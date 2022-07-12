import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const test = ({login}) => {
  return (
    <div>
      <h1>
        Logged In as: {login.userName}
      </h1>
    </div>
  )
}

test.propTypes = {
  login: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    login:state.Login.login
})



export default connect(mapStateToProps)(test)