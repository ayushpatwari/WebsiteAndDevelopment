body {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: white ;
}

.single_job {
    width: 18.25vw;    
    height: 18.25vw;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgb(126, 121, 121); /* Optional: Add a border to visualize the box */
    box-shadow: 45px;
    background-color: rgba(255, 255, 255, 0.725);
    border-radius: 4%;
    padding: 0.3%;
}

.inner {    
    background-color: rgb(233, 193, 156);
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 4%;
    height:75%;
    padding-bottom:2vh;
    position: relative;

}

#firstTry {
    position: relative;
    background-color: white;
    width: 35%;
    height: 10%;
    border-radius: 500px;
    display: inline-flex;
    left: 5%;
    top: 5%;
    align-items: center;
    font-size: 1vw;
    overflow-wrap: break-word;
    justify-content: center;
} 

#bookmark {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    height: 15%;
    width:15%;
    border-radius: 500px;
    top: 2.5%;
    right: 2.5%;
}