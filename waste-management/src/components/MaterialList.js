import React from 'react';
import { Link } from 'react-router-dom';

const MaterialList = ({ materials }) => {
  return (
    <div>
      <h2>Lista de Materiais</h2>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            {material.type} - {material.subtype} - {material.value}
            <Link to={`/materials/${material.id}/edit`}>Editar</Link>
          </li>
        ))}
      </ul>
      <Link to="/materials/new">Adicionar Material</Link>
    </div>
  );
};

export default MaterialList;
