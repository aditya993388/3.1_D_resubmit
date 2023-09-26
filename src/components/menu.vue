<template>
  <div class=container>
    <h1 style="padding-top: 1.5rem;">Recommended Meals</h1>
    <div  class="main-container" v-show="c < 7">
      <h3>Select your meal for Today</h3>
      <div class=options-available>
        <ul>
          <li v-for="items in menu" :key="items">
            <h3>{{ items.dishName }}</h3>
            <p>{{ items.mealDescription }}</p>
            <button @click="selectMenu(items)">Add</button>
            <!-- <p>{{items.mealDescription}}</p> -->
          </li>
        </ul>
      </div>
    </div>

    <div class="chosen-container" v-show="c >= 1">
      <h3 style="padding-top: 3rem;"> Chosen Meals:</h3>
      <ul>
        <li v-for="meals in selectedItems" :key="meals">
          <h3>{{ meals.dishName }},</h3>
        </li>
      </ul>
      <h3 style="padding-top: 2rem;">Ingredients List: </h3>
      <div class="ingredients-output">
        <ul v-for="ingredients in selectedItems" :key="ingredients">
          <li v-for="test in ingredients.dishIngredients" :key="test">
            {{ test }},
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

  const menu = ref([
    {
      dishName: 'Achari baingan',
      dishIngredients: ['Brinjal', 'Indian Spices', 'Mango pickel'],
      mealDescription: 'Brinjal cooked with pickle spices in gravy'
  },
  {
      dishName: 'Aloo gobi',
      dishIngredients: ['Cauliflower', 'Potatoes', 'Indian Spices', 'Curry leanes'],
      mealDescription: 'Cauliflower with potatoes sautéed with garam masala, turmeric, sometimes kalonji and curry leaves.'
  },  
  {
      dishName: 'Chicken Tikka',
      dishIngredients: ['Chicken', 'Tomato Jar Sauce', 'Cream', 'Shredded Cheese'],
      mealDescription: 'Chicken marinated in a Yogurt tomato sauce. It is known to have a creamy texture.'
  },
  {
      dishName: 'Dum aloo',
      dishIngredients: ['Honey', 'Soy Sauce', 'Potatoes', 'Steamed Veggies'],
      mealDescription: 'Potatoes cooked in curry'
  },
  {
      dishName: 'Gobhi matar',
      dishIngredients: ['Cauliflower', 'Peas', 'Tomato', 'Indian Spices'],
      mealDescription: 'Cauliflower in a tomato sauce'
  }
  ])
  const selectedItems = ref([])

  let c = 0

  function selectMenu(meal) {
    while (c < 3) {
      removeItem(meal)
      selectedItems.value.push(meal)
      c++
      break
    }
  }
  function removeItem(item) {
    menu.value = menu.value.filter((t) => t !== item)
  }
</script>

<style scoped>
  .container {
    font-size: 1.4vw;
    padding: 0px 60px 40px 60px;
  }
  h1 {
    text-align: center;
  }
 
  .main-container {
    margin-top: 20px;
    text-align: center
  }
  ul {
    list-style: none;
  }
  .options-available li {
    padding: 10px;
    margin-top: 10px;
  }
  
  .main-container li h3{
    color: rgb(64, 166, 235);
  }
  .main-container li button{
    border: 2px solid #fff;
    color: #fff;
  }
  .main-container li button:hover{
    border: 2px solid rgb(64, 166, 235);
    color: rgb(64, 166, 235);
    background-color: #fff;
  }
  .options-available li h3 {
    margin-top: 10px;
    color: rgb(64, 166, 235);
  }
  li button {
    margin-top: 5px;
    padding: 4px;
    border: 2px solid rgb(9, 61, 95);
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: rgb(9, 61, 95);
    transition: 0.3s ease-in-out;
  }
  li button:hover {
    color: rgb(64, 166, 235);
    background-color: transparent;
  }
  .chosen-container ul {
    margin-top: 10px;
    margin-bottom: 10px;
    }
  .chosen-container li {
    display: inline-block;
    margin-left: 10px;
  }
  .chosen-container li{
    color: rgb(9, 61, 95);
  }
</style>