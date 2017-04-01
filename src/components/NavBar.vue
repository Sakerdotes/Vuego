<template>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link class="navbar-brand" to="/">Dashboard</router-link>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/home">Home</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
    body {
        padding-top: 50px;
    }
</style>

<script>
    export default {}
</script>
