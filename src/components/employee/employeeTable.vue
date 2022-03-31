<script lang="ts">

export default {

    props: {
        employees: Array
    },

    data() {
        return {
            editing: null,
            cachedEmployee: null
        }
    },
    methods: {
        editMode(employee: any) {
            this.cachedEmployee = Object.assign({} , employee)
            this.editing = employee.id
        },
        editEmployee(employee) {
            console.log(employee)
            if(employee.name === '' || employee.mail === '') return 
            this.$emit('edit:employee' , employee.id , employee)
            this.editing = null
        },
        cancelEdit(employee) {
            Object.assign(employee , this.cachedEmployee)
            this.editing = null
        }
    }
}
</script>

<template>
    <div>
        <table class="w-full table mx-auto p-10">
            <thead>
                <tr>
                    <th>Employee name</th>
                    <th>Employee email</th>
                    <th spancol="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd:bg-white even:bg-slate-100" v-for="employe of this.employees" :key="employe.id">
                    <td v-if="editing === employe.id">
                        <input type="text" v-model="employe.name">
                    </td>
                    <td v-else >{{ employe.name }}</td>

                    <td v-if="editing === employe.id">
                        <input type="text" v-model="employe.email">
                    </td>
                    <td v-else>{{ employe.email }}</td>

                    <td v-if="editing === employe.id">
                        <button class="btn-modif edit" @click="editEmployee(employe)">Save</button>
                        <button class="muted-button btn-modif delete" @click="cancelEdit(employe)">Cancel</button>
                    </td>

                    <td v-else>
                        <button class="btn-modif edit" @click="editMode(employe)">Edit</button>
                        <button class="btn-modif delete" @click="$emit('delete:employe' , employe.id)" >Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
section{
    padding: 1rem;   
}

.btn-modif {
    padding: 0.3rem 1rem;
    border-radius: 3px;
}
.edit {
    background-color: rgb(221, 163, 54);
}
.delete {
    background-color: rgb(241, 93, 93);
}
</style>