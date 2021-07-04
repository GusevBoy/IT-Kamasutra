import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import  Loader from '../components/Loader/Loader';

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
  })

const withAuthRedirect = Component => {
    
    const RedirectComponent = (props) => {
        console.log('props.isLoading', props.isLoading)
        if(props.isLoading) return <Loader />
        if(!props.isAuth) return <Redirect to='/login' />
        return <Component {...props} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect