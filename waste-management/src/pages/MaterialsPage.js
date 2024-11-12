import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MaterialsPage = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('/api/materials');
        setMaterials(response.data);
      } catch (error) {
        console.error('Erro ao buscar materiais:', error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div>
      <h2>Materiais</h2>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            {material.type} - {material.subtype}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialsPage;
