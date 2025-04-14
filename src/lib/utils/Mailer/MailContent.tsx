import React from 'react';

const MailContent = (props: { content: string }) => {
  return (
    <div>
      <h1>Hello</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default MailContent;
