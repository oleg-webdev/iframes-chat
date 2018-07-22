// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientsActions from '@store/clients/actions';
import IframeComm from 'react-iframe-comm';
import { makeId } from '../../helpers/helper';

type Props = {
  client: Object,
  addAMessage: (message: Object) => void,
  detachClient: (data: number) => void,
}
type State = { message: string }

class SingleClient extends Component<Props, State> {
  state = {
    message: '',
    touched: false,
  }

  onChangeMessage = (e) => {
    this.setState({
      message: e.currentTarget.value,
      touched: true,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // @TODO: maybe it should be here...
  }

  onTryToSubmit = (data) => {
    const msg = {
      id: makeId(),
      userName: data.name,
      content: this.state.message,
    };
    this.props.addAMessage(msg);
    this.setState({ touched: false, message: '' });
  }

  onLeaveRoom = () => {
    const msg = {
      id: makeId(),
      userName: 'SYSTEM',
      content: `${this.props.client.name} has left room`,
    };
    this.props.addAMessage(msg);
    this.props.detachClient(this.props.client);
  }

  // parent received a message from iframe
  onReceiveMessage = (e) => {
    const { touched } = this.state;
    if (touched) {
      this.onTryToSubmit(JSON.parse(e.data));
      this.setState({ touched: false });
    }
  };

  render() {
    const { client } = this.props;
    const { message } = this.state;
    const attributes = {
      src: 'http://localhost:8080/iframe.html',
      width: '100%',
      height: '50',
      frameBorder: 0,
    };

    // iframe has loaded
    const onReady = () => {};
    return (
      <div>
        {client.name}
        <form action="" onSubmit={this.onSubmit}>
          <textarea value={message} onChange={this.onChangeMessage} />
          <IframeComm
            attributes={attributes}
            postMessageData={client}
            handleReady={onReady}
            handleReceiveMessage={this.onReceiveMessage}
          />
          <div style={{ textAlign: 'right' }}>
            <button
              type="button"
              onClick={this.onLeaveRoom}
            >Leave conversation
            </button>
          </div>
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
