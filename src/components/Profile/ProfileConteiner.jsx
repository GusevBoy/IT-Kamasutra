import React from 'react'
import Profile from './Profile'
import { setProfile } from '../../Redux/profile-reducer'
import { connect } from 'react-redux';
import * as axios from 'axios'
import { withRouter } from 'react-router'

class ProfileC extends React.Component {

    componentDidMount() {
        // this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.profileId}`).then(({data}) => {
            if(data) {
                // this.props.toggleFetching(false)
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