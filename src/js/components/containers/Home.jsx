// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientsActions from '@store/clients/actions';
import SingleClient from '../SingleClient/SingleClient';
// import Cr from '../fac/ConditionalRender';

type Props = {
  // appendClient: (data: number) => void,
  allClients: Array<{id: string, name: string}>,
  messages: Array<{id: string, userName: string, content: string}>
}

type State = {}

class Home extends Component<Props, State> {
  state = {};

  componentDidMount() {

  }

  render() {
    const { allClients, messages } = this.props;
    return (
      <div className="iframeHandler">
        <div>
          <h2>Clients:</h2>
          {allClients.length > 0 && (
            allClients.map(client => (
              <SingleClient key={client.id} client={client} />
            ))
          )}
        </div>
        <div>
          <h2>Chat:</h2>
          {messages.length > 0 && (
            messages.map(msg => (
              <div key={msg.id}>
                <h3>{msg.userName} says:</h3>
                <p>{msg.content}</p><hr />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.clientsReducer.messages,
  allClients: state.clientsReducer.allClients,
});

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
    ...clientsActions,
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
