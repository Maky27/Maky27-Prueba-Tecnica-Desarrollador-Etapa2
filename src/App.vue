<template>
  <div>
    <h1>Tabla de Datos</h1>
    <table>
      <thead>
        <tr>
          <th>Numero ID</th>
          <th>Nombre & Apellido</th>
          <th>Valor 1</th>
          <th>Valor 2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td>{{ row.index }}</td>
          <td>{{ row.nombre }}</td>
          <td>{{ parseFloat(row.valor1).toFixed(4) }}</td>
          <td>{{ parseInt(row.valor2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import db from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('/src/datos.txt')
        .then(response => response.text())
        .then(data => {
          const lines = data.split('\n');
          const processedData = lines.map(line => {
            const [index, nombre, valor1, valor2] = line.split('#').filter(Boolean);
            return { index, nombre, valor1, valor2 };
          });
          this.data = processedData;
        })
        .catch(error => console.error('Error al leer el archivo:', error));
    },
  },
};
</script>

<style>
/* Estilos CSS opcionales */
body {
  max-width: 100%;
  font-family: 'Kanit', sans-serif;
  margin: 20px;
}
h1 {
  text-align: center;
} 
table {
  background-color: silver;
  border-collapse: collapse;
  width: 200%;
  color: black;
}
th {
  background-color: gray;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  border-color: black;
  border-width: 5px;
}
</style>
