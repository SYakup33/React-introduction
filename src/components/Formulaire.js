import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = (props) => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  // Fonction qui envoie le formulaire
  const submit = (evt) => {
    evt.preventDefault();
    // Chaque employé est un objet
    const newEmp = {
      id: uuidv4(),
      prenom: prenom,
      nom: nom,
      email: email,
      image: `https://robohash.org/${prenom + nom}.png?size=100x100&set=set4`,
    };
    console.log(newEmp);
    props.ajoutEmploye([newEmp, ...props.myNewEmploye]);
  };
  return (
    // <form onSubmit={(evt) => submit(evt)}>
    <form onSubmit={submit}>
      <div className="mb-3 ">
        <label htmlFor="prenom" className="form-label">
          Prénom
        </label>
        <input
          value={prenom}
          onChange={(evt) =>
            setPrenom(evt.target.value)
          } /* evt.target.value récupère ce qui ya dans l'input*/
          type="text"
          className="form-control"
          id="prenom"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Nom
        </label>
        <input
          value={nom}
          onChange={(evt) => setNom(evt.target.value)}
          type="text"
          className="form-control"
          id="nom"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Adresse Email
        </label>
        <input
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
};
