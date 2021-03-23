import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import NumberBaseball from '../NumberBasball/NumberBaseball_class'
import RSP from '../RSP/RSP_class'
import Lotto from '../Lotto/Lotto_class'

class GameMatcher extends Component {
  render() {
    if(this.props.match.params.name === 'number-baseball'){
      return <NumberBaseball />
    } else if (this.props.match.params.name === 'rock-scissors-paper'){
      return <RSP />
    } else if (this.props.match.params.name === 'lotto-generator'){
      return <Lotto />
    }
    return (
      <div>일치하는 게임이 없습니다.</div>
    );
  }
}

export default GameMatcher;
// export default withRouter(GameMatcher);
