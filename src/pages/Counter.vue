<template>
    <div class="wrapper" id="dashboard-wrapper">
        <h1 class="page-title">
            Clicked:
            <small> {{ $store.state.count }} </small>
            times.
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </h1>

    </div>
</template>

<style>
    .page-title {
        padding-top: 50px;
    }
</style>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: mapMutations([
            'increment',
            'decrement'
        ])
    }
</script>
