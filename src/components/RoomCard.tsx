import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IRoom } from '../interfaces/IRoom';

type IRoomCard = Pick<IRoom, 'roomId' | 'name' | 'pricePerNight'>;
type CardProps = {
    children: JSX.Element;
  };
  
  function Card(props: CardProps) {
    return <div>{props.children}</div>;
  }

const RoomCard: React.FC<IRoomCard> = (props: IRoomCard) => {

  const { roomId, name, pricePerNight } = props;

  return (
    <Card>
        <>
            <Link to={`/room/${roomId}`}>
              {name}
            </Link>
            ${pricePerNight} / Per Night
            <Link to={`/room/${roomId}`}>
              <Button className="w-100">View Details</Button>
            </Link>
            </>
    </Card>
  );
};

export default RoomCard;
