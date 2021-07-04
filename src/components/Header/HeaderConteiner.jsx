import React from 'react'
import getAuthProfile from '../../Redux/thunks/getAuthProfile'
import { connect } from 'react-redux';
import Header from './Header'

class HeaderC extends React.Component {
  
  componentDidMount() {
      this.props.getAuthProfile()
  }
  
  render() {
      const { login, email } = this.props
      return (
          <Header
            login={login}
            email={email}
          />
    )
  }
}
  const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  })
  const HeaderConteiner = connect(mapStateToProps, {
    getAuthProfile,
  }) (HeaderC)
  export default HeaderConteiner;