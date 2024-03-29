import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions }) => {
  return (
    <div className="card mb-3">
  <div className="card-header">
    <span className="text-light">Reactions</span>
  </div>
  <div className="card-body">
    {reactions &&
      reactions.map(reaction => (
        <div className="pill mb-3" key={reaction._id}>
          <div className='mb-3'>{reaction.reactionBody}</div>
          <div className='top-border'><Link to={`/profile/${reaction.username}`} style={{ fontWeight: 700 }}>
            {reaction.username}           
          </Link> on {reaction.createdAt}
          </div>
        </div>
      ))}
  </div>
</div>
  );
};

export default ReactionList;
