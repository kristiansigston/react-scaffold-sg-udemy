import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOneStream, deleteStream } from '../../../actions'
import Modal from '../../modals'
import history from '../../../history'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchOneStream(this.props.match.params.id)
  }

  renderActions() {
    return (
      <Fragment>
        <button
          onClick={() => {
            this.props.deleteStream(this.props.match.params.id)
          }}
          className="ui button negative"
        >
          Delete
        </button>
        <NavLink to="/" className="ui button">
          Cancel
        </NavLink>
      </Fragment>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream'
    }
    return `Are you sure you want to delete the steram with title ${this.props.stream.title}`
  }

  render() {
    return (
      <Modal
        title="Delete stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  }
}

export default connect(mapStateToProps, { fetchOneStream, deleteStream })(
  StreamDelete
)
