var storiyan = document.querySelector("#main #card #storiyan");
var storyBg = document.querySelector("#full-screen");
var closeBtn = document.querySelector("#card .ri-close-line");
var volume = document.querySelector("#volume")
var volumeUp = document.querySelector("#card #volume #volumeUp");
var volumeMute = document.querySelector("#card #volume #volumeMute");
var arr = [
  {
    dp: "https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVhcnRofGVufDB8fDB8fHww",
    story:
      "video.mp4",
    storyFileType: "video",
  },
  {
    dp: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
    story:
      "https://videos.pexels.com/video-files/5512609/5512609-hd_1080_1920_25fps.mp4",
    storyFileType: "video",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1vZGVsfGVufDB8fDB8fHww",
    storyFileType: "image",
  },

  {
    dp: "https://images.unsplash.com/photo-1636041241614-34cca8be1e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG1vZGVsfGVufDB8fDB8fHww",
    storyFileType: "image",
  },

  {
    dp: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsJTIwYXZhdGFyfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    storyFileType: "image",
  },

  {
    dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
    storyFileType: "image",
  },

  {
    dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwxfDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8fHww",
    storyFileType: "image",
  },

  {
    dp: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww",
    storyFileType: "image",
  },

  {
    dp: "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1674323926044-5ca4d52e49cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXN0cm9ub215fGVufDB8MXwwfHx8MA%3D%3D",
    storyFileType: "image",
  },

  {
    dp: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1518807413368-45b75d428695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFzdHJvbm9teXxlbnwwfDF8MHx8fDA%3D",
    storyFileType: "image",
  },

  {
    dp: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1693698470070-431d76651b0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWUlMjBkcm9uZXxlbnwwfDF8MHx8fDA%3D",
    storyFileType: "image",
  },

  {
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1577110668630-c7e3e9b3acd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWUlMjBkcm9uZXxlbnwwfDF8MHx8fDA%3D",
    storyFileType: "image",
  },
];

function dpshower() {

  var clutter = "";

  arr.forEach(function (elem, idx) {
    clutter += `<div class="story"><img id ="${idx}" src="${elem.dp}" alt=""></div>`;
  });

  storiyan.innerHTML = clutter;
};
dpshower();

function storyshower() {
  storiyan.addEventListener("click", function (dets) {

    if (arr[dets.target.id].storyFileType == "image") {
      storyBg.innerHTML = ``;
      storyBg.style.transform = "scale(1)";
      storyBg.style.transition = "transform 0.3s ease-in-out";
      storyBg.style.backgroundImage = `url(${arr[dets.target.id].story})`;
      closeBtn.style.transform = "scale(1)";
      closeBtn.style.transition = "transform 0.5s ease-in-out";
      volume.style.transform = "scale(0)";
      volume.style.transition = "transform 0.5s ease-in-out";
    }
    else {
      storyBg.innerHTML = `<video loop autoplay src="${arr[dets.target.id].story}"></video>`;
      var storyVideo = document.querySelector("#full-screen video");
      storyBg.style.transform = "scale(1)";
      storyBg.style.transition = "transform 0.3s ease-in-out";
      storyVideo.style.display = "block";
      storyVideo.style.transform = "scale(1)";
      storyVideo.style.transition = "transform 0.3s ease-in-out";
      storyBg.style.backgroundImage = ``;
      closeBtn.style.transform = "scale(1)";
      closeBtn.style.transition = "transform 0.5s ease-in-out";
      volume.style.transform = "scale(1)";
      volume.style.transition = "transform 0.5s ease-in-out";
    }

  });

  closeBtn.addEventListener("click", function () {
    storyBg.style.transform = "scale(0)";
    storyBg.style.transition = "transform 0.3s ease-in-out";
    closeBtn.style.transform = "scale(0)";
    closeBtn.style.transition = "transform 0.2s ease-in-out";
    volume.style.transform = "scale(0)";
    volume.style.transition = "transform 0.2s ease-in-out";
    const video = document.querySelector("#full-screen video");
    if (video) {
      video.pause();
      video.currentTime = 0; // Optional: reset to start
    }
setTimeout(function(){
      volumeUp.style.display="block";
      volumeMute.style.display="none";
},100);
  });

  var check = 0;
  volume.addEventListener("click", function () {
    console.log("Volume button clicked");
    const video = document.querySelector("#full-screen video");
    if (check == 0) {
      volumeUp.style.display="none";
      volumeMute.style.display="block";
      if (video) {
        video.volume = 0;
        check++;
      }
    }
    else {
      volumeUp.style.display="block";
      volumeMute.style.display="none";
      if (video) {
        video.volume = 1;
        check = 0;
      }
    }
  })

};
storyshower();

function post(){
  var icon = document.querySelector("#card #container #icon");
  var like = document.querySelector("#card #container #icon #like");
var like2 = document.querySelector("#like2");
var post = document.querySelector("#card #container img");
var flag = 0;
like.addEventListener("click", function () {
  if (flag == 0) {
    like.style.color = "red";
    like2.style.opacity="1";
    like2.style.transform="translate(-50%, -1200px)";
    like2.style.transition= "transform 5s ease-in-out";
    like2.style.zIndex = "1";
    flag = 1;
  } 
  
  else {
    like.style.color = "black";
    like2.style.opacity="0";
    like2.style.transform="translate(-50%, -50%)";
    like2.style.transition= "none";
    like2.style.zIndex = "-1";
    flag = 0;
  }
  
});


post.addEventListener("dblclick", function () {
  if (flag == 0) {
    like.style.color = "red";
    like2.style.opacity="1";
    like2.style.transform="translate(-50%, -1200px)";
    like2.style.transition= "transform 5s ease-in-out";
    like2.style.zIndex = "12";
    flag = 1;
  } 
  
  else {
    like.style.color = "black";
    like2.style.opacity="0";
    like2.style.transform="translate(-50%, -50%)";
    like2.style.transition= "none";
    like2.style.zIndex = "-1";
    flag = 0;
  }
  
});
};
post();