import { useState } from "react";
import { Form } from "./components/Formulaire";
import { Tableau } from "./components/Tableau";
import { list } from "./Data/List";
import { cursus } from "./Data/cursus";

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
      {isVisible && (
        <Form ajoutEmploye={setListEmployes} myNewEmploye={listEmployes} />
      )}

      {/* EXERCICE: Afficher tous les cursus sous forme de tableau */}
      <section className="my-5">
        <h2>Table des cursus</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom du cursus</th>
            </tr>
          </thead>
          <tbody>
            {cursus.map((cours) => (
              <tr>
                <th scope="row">{cours.id}</th>
                <td>{cours.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Tableau listDesEmployes={listEmployes} />
    </main>
  );
};
