<template>
    <listEvent txtTitle="Pilih Event Favorite"
        txtCaption="Tingkatkan skill digitalmu dan belajar dengan para mentor terbaik dan berpengalaman"
        kategori="Kategori" bootcamp="Bootcamp" webinar="Webinar" workshop="Workshop" jmlRating="5.0"
        titleEvent3="Bootcamp Intelligo Batch 3" titleEvent4="Bootcamp Intelligo Batch 4"
        titleEvent5="Bootcamp Intelligo Batch 5" hargaEvent="Rp.  3.000.000" txtSession="20 session"
        txtPeserta="120 peserta" daftarEvent="Daftar Sekarang" />
    <FooterComp />
</template>

<script>
    import ListEvent from '@/components/ListEvent'
    export default {
        name: 'eventView',
        components: {
            ListEvent
        }
    }
</script>