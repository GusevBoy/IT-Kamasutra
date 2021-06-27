import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import getProfile from '../../Redux/thunks/getProfile'

class ProfileC extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.profileId)
    }

    render() { 
        const { profile, setProfile } = this.props
        return <Profile profile={profile} />;
    }
}
 
const mapStateToProps = (state) => ({
    profile: state.myProfile.profile,
})

const ProfileConteiner = connect(mapStateToProps, { getProfile }) (withRouter(ProfileC))

export default ProfileConteiner;