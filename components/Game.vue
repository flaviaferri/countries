<template>
  <div class="container">
    <div class="flag">
      <img v-bind:src="flag" alt="" class="flag" />
    </div>
    <div class="question">
      <h3>Whose flag is it?</h3>
      <div class="answer">
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
        <a class="button refresh" @click="$router.go()"> Try Again</a>
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
h3 {
  margin-top: 0;
  font-weight: 500;
}

.container {
  display: flex;
  margin-top: 40px;
}

.flag {
  width: 440px;
  max-height: 300px;
}

.answer-button {
  margin-bottom: 15px;
  background-color: hsl(208, 21%, 41%);
  border: 0;
  padding: 10px;
  min-height: 40px;
  width: 280px;
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

.refresh {
  margin: 5px 10px 5px 0px;
  width: 90px;
  height: 25px;
}

.question {
  margin-left: 20px;
}

.answer {
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 768px) {
  .flag {
    width: 100%;
    max-height: 100%;
  }
}

@media only screen and (max-width: 640px) {
  h3 {
    margin-top: 10px;
  }

  .flag {
    width: 100%;
  }

  .question {
    margin-left: 0;
  }

  .container {
    display: block;
    margin-top: 40px;
  }

  .button-answer {
    margin-right: 10px;
  }

  .refresh {
    width: -webkit-fill-available;
    height: 40px;
  }
}
</style>
