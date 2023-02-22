<template>
    <div>
        <h3 class="page_title">Overview</h3>
        <section>
            <items-sold>
                <!-- slot content -->
                <!-- <template #icon>
                    <span>&#128200</span>
                </template> -->
                <!-- shorthand for v-slot -->
                <!-- <template #default>
                    <span class="light_text">{{ quantityOfItemsSold }}</span>
                </template> -->
                <!-- <template v-slot:quantity>
                    <span class="light_text">{{ quantityOfItemsSold }}</span>
                </template> -->
            </items-sold>
            <sales-total>
                <!-- <template #icon>
                    <span>&#128176</span>
                </template>
                <template #default>
                    <span class="light_text">$ {{ totalSalesValue }}</span>
                </template> -->
            </sales-total>
            <best-seller>
                <!-- <template #icon>
                    <span>&#128293</span>
                </template>
                <template #default>
                    <span class="light_text">{{ bestSeller }}</span>
                </template> -->
            </best-seller>
        </section>
    </div>
</template>

<script>
import ItemsSold from "../components/ItemsSold.vue";
import BestSeller from "../components/BestSeller.vue";
import SalesTotal from "../components/SalesTotal.vue";

export default {
    name: "Overview",
    components: {
        ItemsSold,
        BestSeller,
        SalesTotal,
    },
    props: {
        quantityOfItemsSold: {
            type: Number,
        },
        totalSalesValue: {
            type: Number,
        },
        bestSeller: {
            type: String,
        },
    },
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
}
</style>
