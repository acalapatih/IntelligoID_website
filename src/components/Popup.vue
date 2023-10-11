<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
			<button class="popup-close" @click="TogglePopup()">
				<i class="close-icon fa-solid fa-xmark"></i>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['TogglePopup']
}
</script>

<style scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
    width: 100%;
    height: 100%;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
}
.popup-inner {
	background: transparent;
	padding: 1rem;
	display: flex;
	align-items: flex-start;
	gap: 1rem;
}
.popup-close {
    border: none;
    color: white;
    background: transparent;
}
.close-icon {
    font-size: 2rem;
}
</style>