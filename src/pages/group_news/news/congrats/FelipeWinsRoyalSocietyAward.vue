 <template>
    <TripleColumna title="Felipe Herrera receives the Royal Society Wolfson Visiting Fellowship" date="2023-03-30">
        <template v-slot:contenido>
            <img src="/assets/group_news_images/royal_society.png" alt="" class="img-fluid">
            <!-- 
                | This is the content of the page.   |
                | You can use any HTML element here. |
                | Take this template and use it      |
                | for your own pages.                |
             -->

             <p class="my-3">
                Felipe was awarded the prestigious Royal Society Wolfson Visiting Fellowship to work in the 
                Department of Physics & Astronomy at the University of Exeter. During the Fellowship tenure, Felipe will work 
                in close collaboration with the experimental group of <a href="https://physics-astronomy.exeter.ac.uk/staff/wlbarnes?sm=wlbarnes" target="_blank">Bill Barnes</a>,
                to study molecular polariton physics and chemistry.               
            </p>
            
            <h3 class="my-3">About the Fellowship</h3>
            
            <p class="my-3">                 
                Royal Society Wolfson Visiting Fellowships provide an opportunity for talented international research leaders
                to undertake a flexible 12 month period of sabbatical leave in a UK university or research institution, to foster international collaborative links and enriching scientific research in the host organisation as well as the wider UK science base.
            </p>


        </template>
    </TripleColumna>
</template>

<script setup>
import TripleColumna from '@/components/TripleColumna.vue';

</script>