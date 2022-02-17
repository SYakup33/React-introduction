import { Card } from "./Card";

export const Tableau = (props) => {
  return (
    <table className="table table-dark table-striped align-middle text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">prenom</th>
          <th scope="col">nom</th>
          <th scope="col">email</th>
          <th scope="col">avatar</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.listDesEmployes.map((employe) => (
          <Card
            key={employe.id}
            id={employe.id}
            prenom={employe.prenom}
            nom={employe.nom}
            email={employe.email}
            avatar={employe.image}
          />
        ))}
      </tbody>
    </table>
  );
};
