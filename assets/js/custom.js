new WOW().init();

  $('.cl-logo-slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    speed: 5000,
    autoplay: true,

    cssEase: 'linear',
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
   
    ]
  });


  const b_form = document.getElementById("from2");

b_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("b_name").value || null;
  const email = document.getElementById("b_email").value || null;
  const phoneNo = document.getElementById("b_phone").value || null;
  const email_btn = document.getElementById("from2-btn");

  email_btn.classList.add("disabled_button");

  const data = { name, email, phoneNo };

  fetch("https://backend-develop.thecoredesigns.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        email_btn.classList.remove("disabled_button");
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      email_btn.classList.remove("disabled_button");
      document.getElementById("b_name").value = "";
      document.getElementById("b_email").value = "";
      document.getElementById("b_phone").value = "";
      this.location.href = "https://thewallstreetpublishers.com/thank_you.html";
    })
    .catch((error) => {
      email_btn.classList.remove("disabled_button");
      console.error("There was a problem with the fetch operation:", error);
    });
});

const p_form = document.getElementById("popup-from");

p_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("p_name").value || null;
  const email = document.getElementById("p_email").value || null;
  const phoneNo = document.getElementById("p_phone").value || null;
  const message = document.getElementById("p_message").value || null;
  const email_btn = document.getElementById("popup-form-btn");

  email_btn.classList.add("disabled_button");

  const data = { name, email, phoneNo, message };

  fetch("https://backend-develop.thecoredesigns.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        email_btn.classList.remove("disabled_button");
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
      email_btn.classList.remove("disabled_button");
      document.getElementById("p_name").value = "";
      document.getElementById("p_email").value = "";
      document.getElementById("p_phone").value = "";
      document.getElementById("p_message").value = "";
      this.location.href = "https://thewallstreetpublishers.com/thank_you.html";
    })
    .catch((error) => {
      email_btn.classList.remove("disabled_button");
      console.error("There was a problem with the fetch operation:", error);
    });
});
