import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import GameMatcher from './GameMatcher'

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">NumberBaseball</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">Rock Scissors Paper</Link>
        &nbsp;
        <Link to="/game/lotto-generator">Lotto</Link>
        &nbsp;
        <Link to="/game/index">GameMatcher</Link>
      </div>
      <div>
        <Switch>
          {/* Switch: 하나만 일치하면 나머지도 일치해도 하나만 렌더링한다. */}
          <Route exact path="/" render={(props) => <GameMatcher {...props} />} />
          <Route path="/game/:name" render={(props) => <GameMatcher {...props} />} />
        </Switch>
        {/* exact: 정확하게 일치하는 경우만 렌더링 */}
      </div>
    </BrowserRouter>
  )
}
export default Games; 