import React from 'react'
import { setAuthUser } from '../../Redux/auth-reducers'
import { connect } from 'react-redux';
import Header from './Header'
import authApi from '../../services/auth'
import profileApi from '../../services/profile'

class HeaderC extends React.Component {
  
  componentDidMount() {
      console.log('authApi', authApi)
      const getUser = async () => {
        authApi.getAuthMe().then(({ data: { data: { email, id, login } } } ) => {
          return profileApi.getProfile(id).then(({data: {photos, contacts}}) => {
            this.props.setAuthUser(id, login, email, photos, contacts)
          })
        })
      }
      getUser()
  }
  
  render() {
      const { login, email } = this.props
      console.log('this.props', this.props)
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
    setAuthUser,
  }) (HeaderC)
  export default HeaderConteiner;