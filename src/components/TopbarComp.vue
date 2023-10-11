<template>
    <div class="filter-menu-toggle text-left flex items-center">
        <button class="flex items-center">
            <span @click="$emit('togglenav')">
                <i class="fa fa-angle-double-left" style="font-size:16px"></i>
            </span>
        </button>
        <span class="pl-2">Filter</span>
    </div>
    <div class="text-right flex items-center justify-end">
        <p class="pr-3">
            <span class="text-gray-300">11</span>
                Pekerjaan
            <span class="text-gray-300">- Sort by :</span>
        </p>
        <select id="underline_select" class="block p-0 text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option value="released_date">Released Date</option> 
            <option value="xx1">xxxx</option>
            <option value="xx2">xxxx</option>
            <option value="xx3">xxxx</option>
        </select>
        <i class="fa fa-angle-down pl-1" style="font-size:16px"></i>
    </div>
</template>

<script>

export default {
  name: `TopbarComp`,
};
</script>
<style>

/* buat icon filter arrow left biar berubah jd ke kanan ketika filter menu ingin ditampilkan */
/* tapi masih blm kepake */
.filter-arrow {
    -webkit-transform:rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}

@media screen and (min-width: 1000px) {
    /* untuk hide toggle menu filter ketika layar lebih dari 1000px */
    .filter-menu-toggle {
        visibility: hidden;
        display: none;
    }
}
</style>
