<template>
    <div id="aside" v-if="open" class="w-auto border-1 p-4 rounded-xl"> 
        <div class="filter flex justify-between">
            <div class="flex gap-x-2">
                <img src="../assets/Icon-filter.png" alt="" class="w-4 h-4 mt-1">
                <p class="m-0">Filter</p>
            </div>
            <a href="" class="text-gray-300 m-0 no-underline">Reset</a>
        </div>

        <div id="Tipe-perkerjaan" class="mt-3 my-4">
            <h5 class="mb-2">Tipe Pekerjaan</h5>
            <ul
                class="w-auto text-sm font-medium text-[#023047] bg-white rounded-lg flex flex-col gap-y-3 pl-0">
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="teal-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="teal-checkbox"
                            class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intership</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="purple-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="purple-checkbox"
                            class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Freelance</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="angular-checkbox"
                            class="py-2 ml-2 w-full text-sm font-medium text-[#023047] dark:text-gray-300">Fulltime</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="laravel-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="laravel-checkbox"
                            class="py-2 ml-2 w-full text-sm font-medium text-[#023047] dark:text-gray-300">Partime</label>
                    </div>
                </li>
            </ul>
        </div>

        <div id="Sistem" class="mt-3">
            <h5 class="mb-2">Sistem</h5>
            <ul
                class="w-auto text-sm font-medium text-[#023047] bg-white rounded-lg flex flex-col gap-y-3 pl-0">
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="teal-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="teal-checkbox"
                            class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">WFA/WFH</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="purple-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="purple-checkbox"
                            class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">WFO</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="angular-checkbox"
                            class="py-2 ml-2 w-full text-sm font-medium text-[#023047] dark:text-gray-300">Hybird</label>
                    </div>
                </li>
            </ul>
        </div>

        <div id="Daerah" class="mt-3">
            <h5 class="mb-2">Daerah</h5>
            <ul
                class="w-auto text-sm font-medium text-[#023047] bg-white rounded-lg flex flex-col gap-y-3 pl-0">
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="teal-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="teal-checkbox"
                            class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jawa
                            Barat</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="purple-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="purple-checkbox"
                            class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jawa
                            Tengah</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="angular-checkbox"
                            class="py-2 ml-2 w-full text-sm font-medium text-[#023047] dark:text-gray-300">Jawa
                            Timur</label>
                    </div>
                </li>
            </ul>
        </div>

        <div id="Pengalaman" class="mt-3">
            <h5 class="mb-2">Pengalaman</h5>
            <ul
                class="w-auto text-sm font-medium text-[#023047] bg-white rounded-lg flex flex-col gap-y-3 pl-0">
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="teal-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="teal-checkbox"
                            class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">0 - 1
                            Tahun</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="purple-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="purple-checkbox"
                            class="py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1 - 3
                            Tahun</label>
                    </div>
                </li>
                <li class="w-full rounded-lg border border-gray-200 dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox" type="checkbox" value=""
                            class="w-4 h-4 text-[#023047] bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="angular-checkbox"
                            class="py-2 ml-2 w-full text-sm font-medium text-[#023047] dark:text-gray-300">3+
                            Tahun</label>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>

export default {
  name: `SidebarComp`,
  props: [
    'open'
  ],
};
</script>

<style>

#aside {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

@media only screen and (max-width: 980px) {
  #aside {
    margin-right: 1rem;
  }
}
</style>