<script lang="ts">
export default {
    data(){
        return {
            names: ['Paul, mcguire' , 'Ricky, martin' , 'Karim, benzema'],
            selected: '',
            last: '',
            first: '',
            prefix: ''
        }
    },
    computed: {
        filteredNames(): string {
            return this.names.filter((name) =>
                name.toLowerCase().startsWith(this.prefix.toLowerCase())
            )
        }
    },
     watch: {
        selected(name) {
            ;[this.last, this.first] = name.split(', ')
        }
    },
    methods: {
        create() {
            if (this.hasValidInput()) {
                const fullName = `${this.last}, ${this.first}`
                if (!this.names.includes(fullName)) {
                    this.names.push(fullName)
                    this.first = this.last = ''
                }
        }
        },
        update() {
            if (this.hasValidInput() && this.selected) {
                const i = this.names.indexOf(this.selected)
                this.names[i] = this.selected = `${this.last}, ${this.first}`
            }
        },
        del() {
            if (this.selected) {
                const i = this.names.indexOf(this.selected)
                this.names.splice(i, 1)
                this.selected = this.first = this.last = ''
            }
        },
        hasValidInput() {
            return this.first.trim() && this.last.trim()
        }
  }
}
</script>


<template>
    <div>
        <h2>Test for forms</h2>
    </div>

    <div class="form">
        <input type="text" placeholder="Search.." v-model="prefix">


    <select v-model="selected" size="5">
        <option v-for="name of names">{{ name }}</option>
    </select>

    <label>Name: <input v-model="first"></label>
    <label>Surname: <input v-model="last"></label>

    <div class="buttons">
        <button @click="create">Create</button>
        <button @click="update">Update</button>
        <button @click="del">Delete</button>
    </div>

    </div>
</template>

<style>
input {
  display: block;
  margin-bottom: 10px;
}

select {
    float: left;
    margin: 0 1em 1em 0;
    width: 20em;
    font-size: 1.6rem;
}

.buttons {
  clear: both;
}

button + button {
  margin-left: 5px;
}
</style>