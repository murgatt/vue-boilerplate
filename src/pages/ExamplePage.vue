<template>
	<div class="ExamplePage">
		This is a simple and awesome empty example page
		<router-link to="/">Return to index page</router-link>
		<example-component></example-component>
	</div>
</template>

<script>
	import ExampleComponent from '../components/ExampleComponent';

    export default {
        name: 'example-page',
		components: {
            ExampleComponent
        },
	    data() {
            return {
                
            }
	    },
	    methods: {
            
	    },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
	.ExamplePage {

	}
</style>
