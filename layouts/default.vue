<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  /* background-color: #1d202b; */
  background: rgb(49,50,56);
background: linear-gradient(170deg, rgba(49,50,56,1) 0%, rgba(29,31,42,1) 48%, rgba(21,23,25,1) 100%);
  height: 100%;
}
textarea:focus, input:focus{
    outline: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
