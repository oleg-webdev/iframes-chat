// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientsActions from '@store/clients/actions';
import { makeId } from '../../helpers/helper';

type Props = {
  client: Object,
  addAMessage: (message: Object) => void,
  // detachClient: (data: number) => void,
}
type State = { message: string }

class SingleClient extends Component<Props, State> {
  state = {
    message: '',
  }

  onChangeMessage = e => this.setState({ message: e.currentTarget.value });

  onSubmit = (e) => {
    const { client, addAMessage } = this.props;
    e.preventDefault();
    if (this.state.message.trim().length < 1) {
      alert('message cannot be blank'); // eslint-disable-line
      return false;
    }

    addAMessage({
      id: makeId(),
      userName: client.name,
      content: this.state.message,
    });

    this.setState({ message: '' });

    return true;
  }

  render() {
    const { client } = this.props;
    const { message } = this.state;
    return (
      <div>
        {client.name}
        <form action="" onSubmit={this.onSubmit}>
          <textarea value={message} onChange={this.onChangeMessage} />
          <button type="submit">Send</button>
          <hr />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
    ...clientsActions,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(SingleClient);
