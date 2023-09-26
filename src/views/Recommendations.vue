<template>
  <div class="recommendations-container">
    <div class="recommendations-card">
    <h2>Submit a Recommendation</h2>
    <form @submit.prevent="submitRecommendation">
      <div class="form-group">
        <label for="name">Your Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="dishName">Dish Name:</label>
        <input type="text" id="dishName" v-model="formData.dish" required />
      </div>
      <div class="form-group">
        <label for="dishDescription">Dish Description (Short):</label>
        <textarea id="dishDescription" v-model="formData.desc" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <label for="ingredients">Ingredients:</label>
        <textarea id="ingredients" v-model="formData.ingredients" rows="4" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
  return {
    formData: {
      _id: '',
      name: '',
      dish: '',
      desc: '',
      ingredients: ''
    }
  };
},
  methods: {
    async submitRecommendation() {

      try {
        console.log('Form submitted with data:', this.formData);

        const response = await axios.post('http://localhost:8000/user/createReco', this.formData);

        console.log('Response from server:', response.data);

        this.formData.name = '';
        this.formData.dish = '';
        this.formData.desc = '';
        this.formData.ingredients = '';
      }

      catch (error) {
        console.error('Error submitting form:', error);
   }

  }
}
};
</script>

<style scoped>
.recommendations-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 2rem;
  background-color: #f5f5f5; 
}

.recommendations-card {
  background-color: #fff; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  padding: 20px;
  max-width: 600px;
  width: 100%;
  border-radius: 8px; 
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 6px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

textarea {
  resize: vertical;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

button:hover {
  background-color: #0056b3;
}
</style>
