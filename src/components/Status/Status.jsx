import React from 'react'
import Input from '../Input/Input'
import { status, inputWrap} from './Status.module.css'


class Status extends React.Component {
    constructor(props) {
        super(props)
        this.doubleClick = this.doubleClick.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }

    state = {
        editMode: false
    }

    doubleClick() {
        this.setState({ editMode: true })
    }
    onBlur(e) {
        
        console.log('onBlur', e.currentTarget.value)
        this.setState({ editMode: false })
    }

    render() {
        const { children } = this.props
        const { editMode } = this.state
        console.log('editMode', this.state.editMode)
        return (
            editMode ? (
                <div className={inputWrap}>
                    <Input type="small" defaultValue={children} autoFocus={true} onBlur={(e) => this.onBlur(e)} />
                </div>
                
            ) : (
                <button onDoubleClick={() => this.doubleClick()} className={status}>
                    {children}
                </button>
            )

        );
    }
} 
  export default Status;