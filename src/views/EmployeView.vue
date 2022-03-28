<script lang="ts">
import EmployeeTable from '@/components/employee/employeeTable.vue'
import EmployeeFormVue from '@/components/employee/employeeForm.vue'
export default {
    components: {
        EmployeeTable,
        EmployeeFormVue
    },

    data() {
        return {
            employees: [],
            employeToUpdate: Object
        }
    },
    mounted() {
        this.getEmployee()
    },

    methods: {
        async addEmployee(employee: any) {
            try {
                const postuser = await fetch('https://jsonplaceholder.typicode.com/users' , {
                    method: 'POST',
                    body: JSON.stringify(employee),
                    headers: { 'Content-type' : 'application/json; charset=UTF-8' }
                })
                const response = await postuser.json()
                this.employees = [...this.employees , response]
            } catch (error) {
                console.log(error)   
            }

        },
        async updateEmployee( id: number , employee: any) {
            // this.employees = this.employees.map(employee =>
            //     employee.id === id ? updatedEmployee : employee
            // )
            try {
                const updateUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}` , {
                    method: 'PUT',
                    body: employee,
                    headers: { 'Content-type' : 'application/json; charset=UTF-8' }
                })
                const data = await updateUser.json()
                console.log(data)
                this.employees = [ ...this.employees , data ]
                console.log(this.employees)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteEmployee(id: number) {
            const index = this.employees.findIndex( (employ)=> employ.id === id)
            this.employees.splice(index , 1)
            
            try {
                await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                    method: 'DELETE'
                })
                this.employees = this.epmployees.filter(employee => employee.id !== id)
            } catch (error) {
                
            }

        }, 
        async getEmployee() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                this.employees = data
            } catch (error) {
                console.log(error)
            }
        }
    },
}

</script>

<template>
    <section>

        <EmployeeFormVue @add:employee="addEmployee" :employeToUpdate="updateEmployee"  />

        <EmployeeTable 
            :employees="employees" 
            @delete:employe="deleteEmployee"
            @edit:employe="updateEmployee"/>

    </section>
</template>

<style scoped>
    section{
        padding: 1rem;   
    }
</style>