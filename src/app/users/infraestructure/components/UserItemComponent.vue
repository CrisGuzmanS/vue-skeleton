<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    <font-awesome-icon icon="fa-solid fa-user" /> {{ user.name() }}
                </div>
                <div class="col-12">
                    <hr>
                    <button class="btn btn-outline-danger" v-on:click="onDeleteUser()">
                        <font-awesome-icon icon="fa-solid fa-times"/>
                        eliminar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {defineComponent} from '@vue/runtime-core'

export default defineComponent({

    methods: {
        onDeleteUser(){
            console.log('onDeleteUser()');
            this.$emit('userDeleted', this.user)
        }
    },

    props: [
        'user'
    ]
})
</script>