<script lang="ts">

export default {
    name: 'employee-form',
    emits: ['add:employee'],
    props: {
        employeToUpdate: Object
    },
    data() {
        return {
            employee: {
                name: '',
                email: '',
            },
            error: false,
            success: false,
            submitting: false
        }
    },
    computed: {
        invalidName(): Boolean {
            return this.employee.name === ''? true : false
        },
        invalidMail(): Boolean {
            return this.employee.email === ''? true : false
        }
    },
    methods: {
        handleSubmitEmploye() {
            this.submitting = true;

            if(this.invalidName || this.invalidMail) {
                this.error = true
                return 
            }

            this.$emit('add:employee' , this.employee)
            this.$refs.first.focus()

            this.employee = {
                name: '',
                email: '',
            }

            this.error = false
            this.success = true
            this.submitting = false

        },
        clearStatus() {
           this.success = false
           this.error = false;
        },
        chargeSelectedEmployee() {
            if(employeToUpdate) {
                this.employee.name = employeToUpdate.name
                this.employee.mail = employeToUpdate.email
            }
        }
    },
}

</script>

<template>
    <div class="employe-form">
        <form @submit.prevent="handleSubmitEmploye">
            <label for="">Employee name</label>
            <input 
                ref="first"
                class="input" 
                type="text"
                :class="{'has-error': submitting && invalidName }" 
                v-model="employee.name"
                @focus="clearStatus"
                @keypress="clearStatus" >
            <br>         
            
            <label for="">Employee mail</label>
            <input  
                class="input" 
                type="text" 
                :class="{'has-error': submitting && invalidMail }" 
                v-model="employee.email"
                @focus="clearStatus"
                @keypress="clearStatus">
          
            <button class="btn is-primary">Ajouter employee</button>

        </form>
        <p class="success-message" v-if="success">Good , employee registered <span class="cross" @click="error = false">X</span></p>
        <p class="error-message" v-if="error && submitting ">There is an error <span class="cross" @click="error = false">X</span> </p>
    </div>
</template>


<style scoped>
.employe-form {
    width: 100%;
    margin: 0 auto;
}

form {
    margin-bottom: 2rem;
    width: 80%;
    margin: auto;
    padding: 3rem 0;
}

input {
    border: 1px solid black ;
    padding: 0.8rem;
    width: 80%;
}

[class*='-message'] {
    font-weight: 500;
}

.error-message {
    position: relative;
    color: #d33c40;
    border: 1px solid #d33c40 ;
    padding: 1rem;
}
.cross {
    position: absolute ;
    right: 1rem;
}
.success-message {
    position: relative;
    color: #32a95d;
    border: 1px solid #32a95d ;
    padding: 1rem;
}



</style>