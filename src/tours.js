import Tour from "./tour";
const Tours = ({ tours, setTours }) => {
  return (
    <div className="container">
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} tours={tours} setTours={setTours} />
      ))}
    </div>
  );
};
export default Tours;
