<template>
  <section class="home">
    <div class="container d-flex justify-content-center align-items-center flex-column h-50">
        <div class="row">
            <div class="col d-flex justify-content-center movable">
                <div>

                    <h1>Hi! I'm Sibongile Rwayi</h1>
                    <h2>An aspiring web developer</h2>
                </div>
            </div>
                    <div class="d-flex justify-content-evenly buttons">
                        <button class="btn btn-style">View Projects</button>
                        <button class="btn btn-style">Download CV</button>
                    </div>
            <div>

            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'HomeDetails'
}
</script>

<style>

h1, h2 {
    color: white;

}


.movable {
   background-color: rgba(7, 7, 7, 0.74);
   padding: 10px 25px ;
   position: relative;
   border-radius: 20px  ;
   top: 200px;
}



@media (min-width: 00px) {
    .movable {
        width: 40%;
    }
}

.buttons {
    position: relative;
    top: 210px ;
}

.btn-style {
    border: 2px solid white !important;
    color: white !important;
    background-color:#1eb8b8 !important;
}

.btn-style:hover {
    background-color: none !important;
}
 




</style>


