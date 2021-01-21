import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchOneStream, editStream } from '../../../actions'
import StreamForm from '../streamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchOneStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    if (!this.props.stream) return <div>loading</div>
    console.log('props', this.props)
    const { title, description } = this.props.stream
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          initialValues={{ title, description }}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  }
}

export default connect(mapStateToProps, { fetchOneStream, editStream })(
  StreamEdit
)
