import React from 'react';
import { Link } from 'react-router-dom';

const CollectionList = ({ collections }) => {
  return (
    <div>
      <h2>Lista de Coletas</h2>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>
            {collection.date} - {collection.route}
            <Link to={`/collections/${collection.id}/edit`}>Editar</Link>
          </li>
        ))}
      </ul>
      <Link to="/collections/new">Adicionar Coleta</Link>
    </div>
  );
};

export default CollectionList;
