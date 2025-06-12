//Basics of how does react work
function Hello({ person }) {
  return (
    <div>
      <h3>Basics of React props:</h3>
      {person.message} {person.name}
      {person.seatNumber}
    </div>
  );
}

export default Hello;
