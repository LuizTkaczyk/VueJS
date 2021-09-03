<template>
<section>
    <div class="container">
        <div class="row">

            <div class="col-5  text-center principal-news" >
                <h2>Confira as principais noticias</h2>
            </div>
            <div class="col-5 offset-2 text-center principal-news">
                <h2>Confira o pc do Luiz !!</h2>
            </div>

        </div>
    </div>
</section>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

section{
    margin-top: 25px;

}

.container .row{
    height: 300px;
}

.container .row .col-5:first-child{
    background-color: rgba(0, 0, 0, 0.555) ;
    background-image: url('../assets/street.jpg');
    background-repeat: round;
    background-size: 100%;
   
}

.container .row .col-5:nth-child(2){
    background-image: url('../assets/tekken.jpg');
    background-size: 100%;
    background-repeat: round;
    background-color: rgba(0, 0, 0, 0.555);
   
}

h2{
    margin: 25% 0;
    color: rgb(200, 233, 110);
    background-color: rgba(0, 0, 0, 0.479);
    padding: 10px;
    border-radius: 10px;


}

.principal-news{
    cursor: pointer;
}

</style>