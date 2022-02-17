import { useState } from "react";
import { Form } from "./components/Formulaire";
import { Tableau } from "./components/Tableau";
import { list } from "./Data/List";

export const App = () => {
  // HOOKS
  // On initialise une variable isVisible, avec pour valeur false (le formulaire n'est pas visible) avec true il sera visible
  const [isVisible, setisVisible] = useState(false);
  const [listEmployes, setListEmployes] = useState(list);
  return (
    <main className="container my-5">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <h1>Intranet</h1>
        <button
          onClick={() => setisVisible(!isVisible)}
          className="btn btn-success"
        >
          Ajouter un employé
        </button>
      </div>
      {/* {isVisible} ? <Form /> : null */}
      {/* SI et seulement SI, isVariable est true, le formulaire s'affichera */}
      {isVisible && <Form />}

      <Tableau listDesEmployes={listEmployes} />
    </main>
  );
};
