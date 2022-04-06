import styled from "styled-components";
import { useState } from "react";
import { notificationData } from "../helper/data";

const Notifications = () => {
  const [notification, setNotification] = useState([...notificationData]);

  const clearNotification = () => {
    setNotification([]);
  };

  if (notification.length === 0) {
    return (
      <Wrapper>
        <p>no recent notifications</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="notification-wrapper">
      <article>
        {notification.map((item) => {
          const { id, text } = item;
          return (
            <div key={id}>
              <p>{text}</p>
            </div>
          );
        })}
      </article>
      <button className="clear-notify" onClick={clearNotification}>
        clear notifications
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 28rem;
  display: none;

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
    margin-bottom: 1rem;
  }

  div {
    p {
      font-size: 1rem;
      text-transform: capitalize;
      text-align: left;
      margin-left: 2%;
    }
  }

  .clear-notify {
    display: inline-block;
    margin: 0 auto;
    background-color: var(--clr-secondary-1);
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem;
  }
`;

export default Notifications;
