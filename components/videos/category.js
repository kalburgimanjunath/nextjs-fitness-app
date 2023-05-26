export default function Category() {
  const category = [
    'Personality',
    'SEO',
    'Social Media',
    'Posive Thinking',
    'Workout / Gym',
    'Dance Workout',
    'Programming',
    'Passion',
    'Reading',
    'Hindu Culture',
    'Parents',
    'Metrimonial Help',
  ];
  return (
    <div className="bands">
      {category.map((item) => {
        return <div className="band-item">{item}</div>;
      })}
    </div>
  );
}
