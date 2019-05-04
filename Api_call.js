// $(document).ready(function(){
    // $("#halo").hide();
   
    window.onload=function(){
        var x=document.getElementById("halo").getAttribute("value");
    console.log(x);
    $("#submit-btn").click(function () { 
        console.log("here");
        
        $("#halo").hide(1000);
        $("#submit-btn").hide(100);
        $("#showText").css("visibility","visible");
        
        // var btn=document.getElementById("#showText");
        // btn.style
    });

    $("#showText").click(function(){
        $("#halo").show(1000);
        $("#submit-btn").show(100);
        $("#showText").css("visibility","hidden");
    })
    
    let API_KEY="563492ad6f917000010000011cc41d4698dd4718807e4987f8c6750d";
    var xhr=new  XMLHttpRequest();
    xhr.open('GET',"https://api.pexels.com/v1/search?query=4k wallpaper");
    xhr. setRequestHeader("Authorization",API_KEY);
    xhr.onload=function(){
        // console.log(xhr.response);
        
        // if(this.status==200 & this.readyState==4){
            // $("#imgload").text(xhr.responseURL);

            var resp=JSON.parse(xhr.response)
            // window.onload=()=>{
                // data.photos[i].src.original
                // console.log(resp.photos[1].src.original);
                var arrVal=[];
                for(imgitem in resp.photos){
                    arrVal=resp.photos[imgitem].src.original;
                console.log(resp.photos[imgitem].src.original);
                var imgTag=document.createAttribute("img");
                // imgTag.href=resp.photos[imgitem].src.original;
                // document.getElementById("img-load").appendChild(imgTag);
                };
                /// img tag adding
                // document.getElementById("img-load").appendChild();
        // };
        // }
        // else{
        //     console.log(this.status);
            
        //     console.log("Fuck");
            
        // }
    }
    
    xhr.send();
    };
// });