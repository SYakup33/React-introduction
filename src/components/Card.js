export const Card = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.prenom}</td>
      <td>{props.nom}</td>
      <td>
        <a href={`mailto:${props.email}`}> {props.email}</a>
      </td>
      <td>
        <img className="img" src={props.avatar} alt="" />
      </td>
      <td>
        <a className="btn btn-primary" href="#!">
          Voir le profil
        </a>
      </td>
    </tr>
  );
};
