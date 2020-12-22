<template>
  <div class="container">
    <div class="wrapper">
      <div class="flag">
        <img v-bind:src="flag" alt="" class="flag" />
      </div>
      <div class="question">
        <h3>Whose flag is it?</h3>
        <div class="answers">
          <button
            v-for="country in sortedList()"
            :key="country"
            class="answer-button"
            :disabled="isCorrect != null"
            @click="isCorrectCountry(country)"
          >
            {{ country }}
          </button>
        </div>

        <div v-if="isCorrect != null">
          <div v-if="isCorrect">CORRECT!</div>
          <div v-else>
            INCORRECT! The correct Country is <b>{{ name }}</b>
          </div>
          <a class="button try-again" @click="$router.go()"> Try Again</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  props: ['flag', 'name', 'name2', 'name3'],

  data() {
    return {
      isCorrect: null,
    }
  },

  methods: {
    isCorrectCountry(selectedName) {
      this.isCorrect = selectedName == this.name
    },
    sortedList() {
      return [this.name, this.name2, this.name3].sort()
    },
  },
})
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 40px;
}

@media only screen and (max-width: 640px) {
  .container {
    display: block;
    margin-top: 40px;
  }
}

/* Wrapper */
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

@media only screen and (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}

/* Flag */
.flag {
  max-height: 300px;
}

@media only screen and (max-width: 768px) {
  .flag {
    width: 100%;
    max-height: 100%;
  }
}

/* Text */
h3 {
  margin-top: 0;
  font-weight: 500;
}

@media only screen and (max-width: 640px) {
  h3 {
    margin-top: 10px;
  }
}

/* Button */
.answer-button {
  margin-bottom: 15px;
  background-color: hsl(208, 21%, 41%);
  border: 0;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
  transition: all 0.05s ease-in-out;
  color: white;
}

.answer-button:hover {
  transform: translateY(2px);
}

.answer-button:focus {
  background-color: hsl(209, 22%, 20%);
}

.answer-button:active {
  transform: scale(0.99);
}

/* Answers */
.answers {
  display: flex;
  flex-direction: column;
}

/* Try again */
.try-again {
  margin: 5px 10px 5px 0px;
  width: 90px;
  height: 25px;
}

@media only screen and (max-width: 640px) {
  .try-again {
    width: -webkit-fill-available;
    height: 40px;
  }
}
</style>
