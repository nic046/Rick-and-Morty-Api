import ResidentCard from "./ResidentCard";
import "../styles/ResidentsList.css"

export default function ResidentsList({ residents }) {
  return (
    <div className="cards">
      {residents?.map((resident, index) => (
        <ResidentCard key={index + resident} url={resident} />
      ))}
    </div>
  );
}
