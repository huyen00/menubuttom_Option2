$(document).ready(function(){
  // $(".guide").hide();
  $(".close").click(function(){
    $(".guide").hide();
  });
  $(".guide").click(function(){
      $(".guide").hide();
  });
  $("#icon_guide").click(function(){
      $(".guide").show();
  });
});
// click info
$(".close").click(function(){
  $(".info").hide();
    
});
$(".info").click(function(){
    $(".info").hide();
    
});
$("#icon_info").click(function(){
    $(".info").show();
    
});
// click show map
$("#icon_map").click(function(){
  $(".map").show();
  
});
$(".close").click(function(){
  $(".map").hide();
    ;
});
$(".map").click(function(){
    $(".map").hide();
   
});
// click popup 
$(".popup").click(function(){
  $(".popup").hide();
});
$(".info_duan").click(function(){
  $(".info_duan").hide();
});
$(".info_infomation_image").click(function(){
  $(".info_infomation_image").hide();
});
$(".info_information").click(function(){
  $(".info_information").hide();
});
$(".image_tra").click(function(){
  $(".image_tra").hide();
});

// click video
$(document).ready(function(){
  $(".close").click(function(){
    $(".video").hide();
  });
  $(".video").click(function(){
      $(".video").hide();
  });
  $("#icon_video").click(function(){
      $(".video").show();
  });
});
// click form
$(document).ready(function(){
  $(".close").click(function(){
    $(".form").hide();
  });
  $(".form").click(function(){
      $(".form").hide();
  });
  $("#icon_form").click(function(){
      $(".form").show();
  });


  // xử lý menu icon sub
 
  $("#icon_menusub").click(function(){
    $(".menu_sub").slideToggle();
   
  });

  // xu lý show menu
   $('.arrow-left').click(function(event){
    $(".menu_tour").removeClass('show_menu_tour');
    $(".menu_tour").toggleClass('hide_menu_tour');
    $('.arrow-right').show();
    $('.arrow-left').hide();
   });
   $('.arrow-right').click(function(event){
    $(".menu_tour").removeClass('hide_menu_tour');
    $(".menu_tour").toggleClass('show_menu_tour');
    $('.arrow-left').show();
    $('.arrow-right').hide();
   })
});

// hs
$(document).ready(function(){
  $(".form").hide();
  $(".info_toancanh").click(function(){
    $(".form").hide();
  });
  $(".form").click(function(){
      $(".form").hide();
  });
  $("info_toancanh").click(function(){
      $(".form").show();
  });


});

var array_list = [
  // 0
  {
    title_list : "Thông tin khu nguyên liệu A",
    content_list: "Là khu nguyên liệu đã  và đang cho thu hoạch ổn định (gồm nhiều cây 3-7 năm tuổi, ngoài ra có các khu vực đang phát triển cây con độ tuổi 1,5 - 2,5 năm tuổi). Diện tích khoảng 10ha"
   
    
  },
  // 1
  {
    title_list : "Thông tin khu nguyên liệu B",
    content_list: "Là khu mới phát triển (gồm nhiều cây con độ tuổi dưới 1 năm tới 2 năm tuổi), đây là khu nguyên liệu của thành viên HTX, mà trong đó thành viên được hỗ trợ giống, kỹ thuật, bao tiêu thu mua... tạo vùng nguyên liệu ổn định lâu dài cũng như tạo công ăn việc làm cho nhân dân địa phương. Diện tích khoảng 6ha."
   
  
  },
  // 2
  {
    title_list : "Thông tin khu cây trồng lâu năm",
    content_list: "Khu gồm cây trà mẹ, lâu năm tuổi (cây 10-20 năm tuổi) vừa cung cấp hoa vừa cung cấp quả, hạt giống cũng như phôi chiết. Khu cây lâu năm tuổi kết hợp một số khu vực khu nguyên liệu A là nguồn cung cấp chính cây con cho cả khu vực nguyên liệu xung quanh khác."
   
   
  
  },
  // 3
  {
    title_list : "Thông tin khu Vườn Ươm",
    content_list: "Khu vườn ươm là nơi nhân giống, tạo sự chủ động nguồn cung cho HTX cũng như vùng nguyên liệu được bền vững."
   
   
  
  },
  
  // 4
  {
    title_list : "Thông tin Nhà thu mua",
    content_list: "Nhà ở của chủ cơ sở kinh doanh kèm chức năng thu mua nguyên liệu của thành viên HTX cũng như nhân dân quanh vùng"
  },
  // 5
  {
    title_list : "Thông tin Nhà Trưng bày sản phẩm",
    content_list: "Khu tổ hợp nhà trưng bày sản phẩm gồm khu trưng bày, khu xưởng sấy, kho và tiếp giáp khu vườn ươm.Đây là điểm giới thiệu và bán sản phẩm OCOP thứ 3/5 điểm giới thiệu và bán sản phẩm OCOP trên địa bàn tỉnh được hỗ trợ theo QĐ 1656/QĐ-UBND ngày 19 tháng 8 năm 2020 của UBND tỉnh đã khai trương và đi vào hoạt động "
    
   
  
  },
  // 6
  {
    title_list : "",
    content_list: "Đây là đường 293 (hướng đi về chùa Tây Yên Tử - chùa Hạ) tuyến đường Hoằng dương phật pháp kết nối địa danh tâm linh, lịch sử giữa thành phố Bắc Giang và vùng đất Tây Yên Tử"
  },
  // 7
  {
    title_list : "",
    content_list: "Đây là đường 293 (hướng đi về tp Bắc Giang) tuyến đường Hoằng dương phật pháp kết nối địa danh tâm linh, lịch sử giữa thành phố Bắc Giang và vùng đất Tây Yên Tử"
  },
  // 8 : A1
  {
    title_list : "Những cây 5 - 7 năm tuổi",
    content_list: "Cây đang thu hoạch và có thể là cây giống bố mẹ Cây cho thu hoạch cả hoa và lá Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 9:A2
  {
    title_list : "Cây trà 6 năm tuổi",
    content_list: "Cây đang thu hoạch và có thể là cây giống bố mẹ Cây cho thu hoạch cả hoa và lá Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 10 :A3
  {
    title_list : "Cây 7 năm tuổi",
    content_list: "Cây đang thu hoạch và có thể là cây giống bố mẹ Cây cho thu hoạch cả hoa và lá Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 11:
  {
    title_list : "Cây 1 tuổi rưỡi",
    content_list: "Cây được trồng mở rộng diện tích hoặc thêm vào những cây trồng loại khác đã được phá bỏ. Cây cho thu hoạch lá ngay từ độ tuổi này. Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 12 : B1
  {
    title_list : "Cây hơn 1 năm tuổi",
    content_list: "Cây mới được trồng bên khu vườn mới của thành viên HTX Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 13 : B2
  {
    title_list : "Cây 1 năm tuổi",
    content_list: "Cây mới được trồng bên khu vườn mới của thành viên HTX Do đặc tính cây ưa bóng râm nên có thể trồng xen canh bên cạnh cây vải (đặc sản địa phương đang có), nhã... mà không phải phá cây trồng cũ đang có trên mặt bằng."
  },
  // 14
  {
    title_list : "Dược liệu khác",
    content_list: "Đây là mặt hàng cũng nằm trong danh mục được kiểm định và được có mặt trong gian hàng"
  },
  // 15
  {
    title_list : "Thông tin máy sấy lạnh",
    content_list: "Sấy lạnh là phương pháp sấy bằng tác nhân là không khí rất khô ở nhiệt độ thấp hơn nhiệt độ sấy thông thường. Dải nhiệt độ sấy từ 35-600C, độ ẩm không khí sấy vào khoảng 10-30%. Quá trình sấy được tiến hành ở áp suất khí quyển. Máy sấy lạnh được cấu thành bởi một máy bơm nhiệt được đặt trong một tủ sấy hoặc một hầm sấy tùy theo quy mô. Máy bơm nhiệt có một đầu nóng và một đầu lạnh. Đầu nóng sẽ cung cấp nhiệt lượng cho tác nhân sấy, còn đầu lạnh dùng để tách ẩm cho không khí sấy. Do đó, máy sấy lạnh còn gọi là máy sấy bơm nhiệt. "
  },
  // 16
  {
    title_list : "Thông tin máy sấy thăng hoa",
    content_list: "Sấy thăng hoa hay sấy đông khô: Đây là phương pháp sấy ưu việt nhất trong tất cả phương pháp sấy hiện nay. Sấy thăng hoa (freeze drying) là một kỹ thuật còn được gọi là “làm khô lạnh”. Trong đó sản phẩm được sấy khô qua quá trình thăng hoa của nước dưới nhiệt độ và áp suất thấp. Nước trong sản phẩm được đông lạnh thành đá sau đó được loại bỏ trực tiếp ra khỏi sản phẩm bằng cách hóa hơi. Điều này được thực hiện trong môi trường chân không."
  },

  
];


var array_info = [
  {
    title_info: "Thông tin sản phẩm Trà Loại 1",
    content_info: "Trà loại 1 là ....<br> 1...<br> 2.... <br>3..."
    
   
    
  },
  {
    title_info : "Thông tin sản phẩm Trà Loại 2",
    content_info: "Trà loại 2 là ....<br> 1...<br> 2.... <br>3..."
   
  
  },
  {
    title_info : "Thông tin sản phẩm Trà Loại 3",
    content_info: "Trà loại 3 là ....<br> 1...<br> 2.... <br>3..."
   
   
  
  },
  {
    title_info : "Giới thiệu về HTX Lựu Chanh",
    content_info: "- Loại hình doanh nghiệp: Hợp Tác Xã<br> - Người đại diện: Hà Thị Chanh<br>- Địa chỉ: Thôn Nhân Lý, xã Trường Sơn, huyện  Lục Nam, tỉnh Bắc Giang<br>- Điện thoại: 0962.831.385<br>- Email: duoclieutamduc@gmail.com<br>Hợp tác xã sản xuất cây dược liệu Lựu Chanh được thành lập đầu năm 2017 với ngành nghề chính là trồng và chế biến sản xuất dược liệu mà trong đó trà hoa vàng là sản phẩm chủ lực chính, sản phẩm được công nhận và xếp loại OCOP 4* sao.<br>Với sự cố gắng vượt qua rất nhiều khó khăn trở ngại cũng như không ngừng học hỏi áp dụng những biện pháp nâng cao hiệu quả, hiện nay, tổng diện tích trồng cây chè hoa vàng của hợp tác xã khoảng trên 10ha, có vườn ươn cây giống để cung cấp cho các địa phương.<br>Ngày 19/12/2020 tại thôn Nhân Lý, xã Trường Sơn, huyện Lục Nam, Hợp tác xã sản xuất cây dược liệu Lựu Chanh xã Trường Sơn long trọng tổ chức buổi khai trương điểm giới thiệu và bán sản phẩm OCOP và các đặc sản vùng miền của tỉnh Bắc Giang.<br>Với vị trí rất thuận lợi nằm trên con đường (Đường 293) tuyến đường Hoằng dương phật pháp kết nối những địa danh tâm linh, lịch sử giữa thành phố Bắc Giang và vùng đất Tây Yên Tử linh thiêng, huyền bí. <br>Điểm giới thiệu và bán sản phẩm OCOP (của HTX sản xuất cây dược liệu Lựu Chanh xã Trường Sơn ) được khai trương hứa hẹn sẽ tạo ra chuỗi liên kết giữa các chủ thể sản xuất và nhà phân phối sản phẩm OCOP, góp phần quan trọng trong việc giới thiệu, quảng bá các sản phẩm OCOP của tỉnh nói chung và sản phẩm OCOP của huyện Lục Nam nói riêng; đồng thời, là điểm đến để nhân dân trong tỉnh và du khách có thể đến tham quan, mua sắm các sản phẩm hàng hoá chủ lực, đặc trưng của các vùng miền trong và ngoài tỉnh, đáp ứng các tiêu chuẩn về quy trình sản xuất, mẫu mã bao bì, xuất xứ nguồn gốc và chất lượng sản phẩm OCOP.<br>Đây là điểm giới thiệu và bán sản phẩm OCOP thứ 3/5 điểm giới thiệu và bán sản phẩm OCOP trên địa bàn tỉnh được hỗ trợ theo QĐ 1656/QĐ-UBND ngày 19 tháng 8 năm 2020 của UBND tỉnh đã khai trương và đi vào hoạt động (sau điểm giới thiệu và bán sản phẩm OCOP FRESH FOOD tại 454  Lê Lợi, TP Bắc Giang; điểm trưng bày và bán sản phẩm OCOP tại thị trấn Bích Động huyện Việt Yên).",
   images:[
    
      {
      image:'assets/img/image_2.jpg'
      },{
        image:'assets/img/image_3.jpg'
      }
   ]
   
  
  },
  {
    title_info : "Giới Thiệu về cây Trà Hoa Vàng",
    content_info: "Trà hoa vàng hay còn gọi là Kim hoa trà, Chè rừng, Hải đường vàng, là một cây có giá trị làm cảnh và là loại thảo dược quý. Cây có nguồn gốc bản địa phân bố ở một vài vùng núi phía bắc nước ta. Theo nghiên cứu khoa học hiện đại, Trà hoa vàng là loài dược liệu rất quý, trà có chứa hơn 400 hoạt chất và trong đó quý giá là các saponin, tea polyphenol và các nguyên tố như Selenium (Se), Germannium (Ge), Kalium (K), Kẽm (Zn), Molypden (Mo), Vanadium (V), Mangan (Mn) và các vitamin B1, B2, C. Trà Hoa Vàng được giới y học nghiên cứu rất nhiều và đã được ứng dụng trên nhiều quốc gia như Mỹ,Trung Quốc, Pháp, Nhật Bản, Việt Nam ... <br> Nước sắc lá trà có tác dụng hạ huyết áp rõ ràng và tác dụng được duy trì trong thời gian tương đối dài. Trong lá trà có những hoạt chất làm giảm tổng hàm lượng lipit trong huyếtthanh máu, giảm lượng cholesterol mật độ thấp (cholesterol xấu) và tăng lượng cholesterol mật độ cao (cholesterol tốt). Nước sắc lá trà có tác dụng ức chế sự tụ tập của tiểu cầu, chống sự hình thành huyết khối gây tắc nghẽn mạch máu. Phòng ngừa ung bướu và ức chế sự phát triển của các khối u khác. Giải độc gan và thận, ngăn ngừa xơ vữa động mạnh máu. Ức chế và tiêu diệt vi khuẩn. Ngoài ra, lá chè còn có tác dụng chống viêm, chống dị ứng và duy trì trạng thái bình thường của tuyến giáp. Cây Trà Hoa Vàng ngày nay rất được nhiều người ưa chuộng trồng để làm cảnh và dùng làm trà như một loại thảo dược dùng để dưỡng sinh.<br> 2Trà hoa vàng của Hợp tác xã đã đạt chuẩn OCOP 4 sao và là sản phẩm tiêu biểu cấp Tỉnh 2019, cấp khu vực 2020 và toàn quốc 2021. <br>3Sản phẩm được trồng hữu cơ không dùng thuốc bảo vệ thực vật và  phân bón hoá học. Mỗi năm chỉ ra hoa 1 lần vào tháng 10 đến tháng 12 âm lịch hàng năm. Thu hoạch vào buổi sáng để giữ được hoạt chất quý của trà không bị ảnh hưởng bởi ánh nằng mặt trời. Không thu hái vào trời mưa để thu được những bông trà thơm ngon nhất. Trà được chế biến bằng quy trình sấy công nghệ cao, hiện đại nhất hiện tại sấy thăng hoa, trà khô ở nhiệt độ -40 độ C để đảm bảo giữ được nguyên dược tính hoạt chất quý của trà.",

    images:[
    
      {
      image:'assets/img/image_info_1.jpg'
      },{
        image:'assets/img/logo_trahoavang.jpg'
      }
   ]
  
  },
  
];

// xử lý popup

function showform(data){
 
  document.getElementById('popup_').style.display = "flex";

  $("#title_form").html(data.title_list);
  $("#content_form").html(data.content_list);
}
// show info tra
function show_info(data){
  document.getElementById('info_information').style.display = "flex";
  $("#title_info_general").html(data.title_info);
  $("#content_info_general").html(data.content_info);
  
  
}
function show_image(){
  document.getElementById('image_tra').style.display = "flex";

   document.getElementById('info_information').style.display = "none";
}
function close_info_tra(){
  document.getElementById('image_tra').style.display = "none";
  document.getElementById('info_information').style.display = "flex";
}
function close_info(){
  document.getElementById('info_information').style.display = "none";
}
function show_htx(data){
  document.getElementById('info_duan').style.display = "flex";
 
 
  $("#title_info_duan").html(data.title_info);
  $("#content_info_duan").html(data.content_info);
}
function show_image_duan(){
  document.getElementById('info_infomation_image').style.display = "flex";
  document.getElementById('info_duan').style.display = "none";
}

function close_image_duan(){
  document.getElementById('info_infomation_image').style.display = "none";
  document.getElementById('info_duan').style.display = "flex";
}
function close_duan(){
  document.getElementById('info_duan').style.display = "none";
  $(".info").css("display","block");
}

// popup info image tra
function show_htx_tra(data){
  document.getElementById('info_duan_tra').style.display = "flex";
 
 
  $("#title_info_duan_tra").html(data.title_info);
  $("#content_info_duan_tra").html(data.content_info);
}
function show_image_duan_tra(){
  document.getElementById('info_infomation_image_2').style.display = "flex";
  document.getElementById('info_duan').style.display = "none";
  document.getElementById('info_duan_tra').style.display = "none";
}
function close_duan_tra(){
  document.getElementById('info_duan_tra').style.display = "none";
  $(".info").css("display","block");
}
function close_image_duan_tra(){
  document.getElementById('info_infomation_image_2').style.display = "none";
  document.getElementById('info_duan_tra').style.display = "flex";
}

// xử lý voice 
(function ($) {
  embedpano({
      xml: "tour.xml",
      target: "pano",
      html5: "only",
      mobilescale: 1.0,
      initvars: {
        array_list_xml: array_list,
        array_info_xml:array_info,
      },
      passQueryParameters: true,
      onready: krpanoReady
  });

  function krpanoReady(krpano) {
      $("#icon_unmute").hide();
      $("#icon_unmute").on("click", function (e) {
          e.preventDefault();
          console.log(krpano);
          $("#icon_mute").show();
          $("#icon_unmute").hide();
          krpano.call("resumesound()");
      });
      $("#icon_mute").on("click", function (e) {
        e.preventDefault();
        console.log(krpano);
        $("#icon_unmute").show();
        $("#icon_mute").hide();
        krpano.call("pause_sound()");
    });
    // mute ở mobile
    $("#icon_unmute1").hide();
    $("#icon_unmute1").on("click", function (e) {
      e.preventDefault();
      console.log(krpano);
      $("#icon_mute1").show();
      $("#icon_unmute1").hide();
      krpano.call("resumesound()");
  });
  $("#icon_mute1").on("click", function (e) {
    e.preventDefault();
    console.log(krpano);
    $("#icon_unmute1").show();
    $("#icon_mute1").hide();
    krpano.call("pause_sound()");
  });
  // rotate mobile
  $("#icon_unrotate1").hide();
  $("#icon_rotate1").on("click",function(e){
    $("#icon_unrotate1").show();
    $("#icon_rotate1").hide();
    krpano.call("toggleRotate()");
  });
  $("#icon_unrotate1").on("click",function(e){
    $("#icon_unrotate1").hide();
    $("#icon_rotate1").show();
    krpano.call("toggleRotate()");
  });
 
  // menu_bottom
  $('.arrow-left').click(function(event){
		
		$(".menu_sliderbar").removeClass('show_menu_tour');
		$(".logo_tour").css("display","block");
		$(".logo_tour").addClass("transform_logo");
		$(".menu_sliderbar").toggleClass('hide_menu_tour');
		$('.arrow-right').show();
		$('.arrow-left').hide();
	});
	$('.arrow-right').click(function(event){
		$(".logo_tour").css("display","none");
		 $(".menu_sliderbar").removeClass('hide_menu_tour');
		$(".menu_sliderbar").toggleClass('show_menu_tour');
		$('.arrow-left').show();
		$('.arrow-right').hide();
	});
	$("#close_menu_bottom").click(function(){
		$(".menu_bottom").slideToggle();
		$(".thumblist").hide();
		$("#show_menu_bottom").show();
	});
	$("#show_menu_bottom").click(function(){
		$(".menu_bottom").slideToggle();
		$("#show_menu_bottom").hide();
		
	});
  // show thumblist
	$("#show_thumbs").click(function(){
		$(".thumblist").slideToggle();
	});

    // next scene
    $("#next_scene").click(function(){
		  krpano.call("nextscene()");
    });
    $("#prev_scene").click(function(){
		  krpano.call("prevscene()");
    });
    // xu ly VR
    $("#icon_VR").on("click", function(e){
      krpano.call("webvr.enterVR()");
    });
    // xử lý tắt bật xoay
    $("#icon_unrotate").hide();
    $("#icon_rotate").on("click",function(e){
      $("#icon_unrotate").show();
      $("#icon_rotate").hide();
      krpano.call("toggleRotate()");
    });
    $("#icon_unrotate").on("click",function(e){
      $("#icon_unrotate").hide();
      $("#icon_rotate").show();
      krpano.call("toggleRotate()");
    });

    // xu ly scene
    
    $("#icon_back").on("click",function(e){
      krpano.call("back_scene()");
    });
    // xu ly show/hide hotspot
    $("#hotspot_open").hide();
    $("#hotspot_Close").on("click",function(e){
      $("#hotspot_open").show();
      $("#hotspot_Close").hide();
      krpano.call("hideallhotspots()");
    });
    $("#hotspot_open").on("click",function(e){
      $("#hotspot_open").hide();
      $("#hotspot_Close").show();
      krpano.call("showallhotspot()");
    });
    $(".slick-slide.slick-current").click(function(e){
      krpano.call("loadscene_with_name()");
     
    });
   
    // xu ly active khi click
  $(".item").click(function(e){
    var link_scene = $(this).attr('id');
    console.log(link_scene);
   
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
      
    });
    var elems = document.querySelectorAll(".active_menu");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active_menu");
      
      });
     
    $(this).addClass("active");
    $(this).removeClass("active_menu");
    //console.log($(this).attr('id'));
    let target_active_menu = "#" + $(this).attr('id')
    var elems_active_menu = document.querySelectorAll(target_active_menu);
      [].forEach.call(elems_active_menu, function(el) {
        el.classList.add("active_menu");
      
      });
    krpano.call("load_scene(" +link_scene + ")");
   
  });

  // xu lys show scene menu
  $(".item_sub").click(function(e){
    var link_scene = $(this).attr('id');
   
    var elems = document.querySelectorAll(".active_menu");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active_menu");
      
    });
    var elems_thumbs = document.querySelectorAll(".active");
    [].forEach.call(elems_thumbs, function(el) {
      el.classList.remove("active");
      
    });
    let target_active = "#" + $(this).attr('id');
    var elem_active = document.querySelectorAll(target_active);
    [].forEach.call(elem_active, function(el) {
      el.classList.add("active");
    
    });
    $(this).addClass("active_menu");
    $(this).removeClass("active");
 
    krpano.call("load_scene(" +link_scene + ")");
  });
  // xu ly minimap
  $(".panWrapper").mousedown(function(e){
    e.preventDefault();
  
   $(".panWrapper").hide();
    krpano.call("showmap()");
    
  });
 

   
  }
})(jQuery);

// xử lý fullscreen
function toggleFullscreen() {
if (!document.fullscreenElement &&    // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
} else {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
}
// xử lý share link
const button = document.querySelector('#icon_sharelink')
button.onclick = () => {
navigator.clipboard.writeText(window.location.href);
}

// xử lý quay trở lại scene trước
function changepano(panoName)
{
var krpano = document.getElementById("krpanoSWFObject1");
krpano.call("loadscene(" + panoName + ");");
}



// xư lý thumbs list
$(document).ready(function(){
  $(".button_close").click(function(){
    $(".popup").hide();
  });
  
  
  
});


// xu ly minimap
$(".panWrapper").mousedown(function(e){
  e.preventDefault();

 $(".panWrapper").hide();
  krpano.call("showmap()");
  
});

