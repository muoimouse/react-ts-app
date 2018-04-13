import * as React from 'react';
/// <reference path="./interfaces.d.ts" />

class PostHeader extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mt-4">Post Title</h1>
        <p className="lead">
          by
          <a href="#">Start Bootstrap</a>
        </p>
        <hr/>
          <p>Posted on January 1, 2018 at 12:00 PM</p>
          <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />
        <hr/>
      </div>
    );
  }
}

class PostContent extends React.Component {
  render() {
    return (
      <p>This is content</p>
    );
  }
}

class PostCommentForm extends React.Component {
  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Leave a Comment:</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <textarea className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

class PostComment extends React.Component {
  render() {
    return (
      <div className="media mb-4">
        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
        <div className="media-body">
          <h5 className="mt-0">Commenter Name</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <div>
        <PostHeader/>
        <PostContent/>
        <PostCommentForm/>
        <PostComment/>
      </div>
    );
  }
}

export default Post;
