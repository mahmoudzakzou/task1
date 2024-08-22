import React from "react";
import FunctionalProps from "./Componets/FunctionalProps/FunctionalProps";
import ClassProps from "./Componets/ClassProps/ClassProps";

const App = () => {
  return (
    <div>
      {/* <FunctionalProps  fname='mahmoud' lname='Ezzat' age={20} phone="01554525841" /> */}

      <ClassProps course1="React" course2="Node.js">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rem nesciunt voluptatum reprehenderit nihil cum maxime asperiores sunt hic pariatur eaque temporibus corrupti laboriosam, porro rerum fugit tenetur ex similique.</p>
      </ClassProps>
    </div>
  );
};

export default App;
