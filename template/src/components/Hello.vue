<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
		return {
			msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
		}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
	}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	font-size: 0.16rem;
}
</style>
