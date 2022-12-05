export default function Main({ breeds }) {
  return (
    <ul>
      {breeds.map((breed) => (
        <li key={breed.id}>{breed.type}</li>
      ))}
    </ul>
  );
}
