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
          class="button-answer"
          :disabled="isCorrect != null"
          @click="isCorrectCountry(country)"
        >
          {{ country }}
        </button>

        <div v-if="isCorrect != null">
          <div v-if="isCorrect">CORRECT!</div>
          <div v-else>
            INCORRECT! The correct Country is <b>{{ name }}</b>
          </div>
          <a class="refresh-button" @click="$router.go()"> Try Again</a>
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
      if (selectedName == this.name) {
        this.isCorrect = true
      } else {
        this.isCorrect = false
      }
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

.button-answer {
  margin-bottom: 15px;
}

.button {
  margin: 5px 10px 5px 0px;
  background-color: hsl(209, 23%, 22%);
  box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.33);
  border-style: solid 2px;
  padding: 0 17px;
  height: 25px;
  display: inline-flex;
  align-items: center;
}

.refresh-button {
  width: 90px;
  height: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  outline: none;
  background-color: hsl(209, 23%, 22%);
  border-radius: 2px;
  border-style: none;
  -webkit-box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.33);
  box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.33);
}

.question {
  margin-left: 20px;
}

.answer {
  display: flex;
  flex-direction: column;
}

div {
  color: white;
}

@media only screen and (max-width: 800px) {
  .flag {
    width: 100%;
    max-height: 100%;
  }
}

@media only screen and (max-width: 375px) {
  h3 {
    margin-top: 10px;
  }

  .flag {
    width: 100%;
  }

  .border-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
    height: 40px;
  }
  .refresh-button {
    width: -webkit-fill-available;
    height: 40px;
  }
}
</style>
