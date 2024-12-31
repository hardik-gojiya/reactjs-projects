import { useState } from "react";
import { initialTravelPlan } from "./assets/Places";

function onComplete(){
  
}

function PlaceTree({ id, placeById }) {
  const place = placeById[id];
  const childIds = place.childIds;
  return (
    <>
      <li>
        {place.title}
        <button onClick={() => onComplete()}>Complete</button>
        {childIds.length > 0 && (
          <ol>
            {childIds.map((childId) => (
              <PlaceTree key={childId} id={childId} placeById={placeById} />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places To Visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree key={id} id={id} placeById={plan} />
        ))}
      </ol>
    </>
  );
}
