import * as React from 'react';
import LayoutPage from '../../components/LayoutPage';
import Post from './Post';

function action() {
  return (
    <LayoutPage>
      <Post/>
    </LayoutPage>
  );
}

export default action;