import React from 'react'
import Profile from './Profile'
import { setProfile } from '../../Redux/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import profileApi from '../../services/profile'

class ProfileC extends React.Component {

    componentDidMount() {
        profileApi.getProfile(this.props.match.params.profileId).then(({data}) => {
            if(data) {
                this.props.setProfile(data)
            }
        })
    }
    render() { 
        const { profile, setProfile } = this.props
        return <Profile profile={profile} setProfile={setProfile} />;
    }
}
 
const mapStateToProps = (state) => ({
    profile: state.myProfile.profile,
})

const ProfileConteiner = connect(mapStateToProps, { setProfile }) (withRouter(ProfileC))

export default ProfileConteiner;