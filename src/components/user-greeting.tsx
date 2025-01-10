const UserGreeting = ({ name }: {name:string}) => {
  return <div className='my-4'>Hello, {name ? name : "Nameless One 🫣"}!</div>;
};

export default UserGreeting;
