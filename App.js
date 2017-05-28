import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native";
import HTML from "react-native-simple-html";

export default class App extends React.Component {
  render() {
    const html = `
    <h2><span>Măng t&acirc;y xanh loại 1</span></h2>
    <p>Thời gian qua c&oacute; nhiều th&ocirc;ng tin cho rằng ăn măng t&acirc;y c&oacute; thể đẩy l&ugrave;i nhiều loại ung thư.&nbsp;Tuy chưa c&oacute; kết luận ch&iacute;nh thức nhưng quả thực măng t&acirc;y xanh rất ngon v&agrave; c&oacute; nhiều c&ocirc;ng dụng trong y học.</p>
    <p>Một nghi&ecirc;n cứu được c&ocirc;ng bố tr&ecirc;n KidsHealth cho biết rằng, những phụ nữ ti&ecirc;u thụ khoảng 400 microgram folate mỗi ng&agrave;y trước khi mang thai v&agrave; trong thời kỳ đầu mang thai sẽ l&agrave;m giảm đến 70% c&aacute;c nguy cơ khuyết tật trầm trọng li&ecirc;n quan đến ống thần kinh ở trẻ sơ sinh.Như vậy trong những th&aacute;ng đầu bạn n&ecirc;n ăn khoảng 200g măng t&acirc;y xanh<strong><em>.</em></strong></p>
    <p><img src="http://media.bizwebmedia.net/sites/99161/data/Upload/2015/4/mang_tay_xanh_loai_to_23_04.JPG" alt="Măng t&acirc;y xanh" /></p>
    <p><strong>Ph&ograve;ng chống suy gi&atilde;n tĩnh mạch</strong></p>
    <p>Nếu bạn đang bị suy gi&atilde;n tĩnh mạch th&igrave; măng t&acirc;y xanh c&oacute; c&ocirc;ng dụng&nbsp;l&agrave; một loại thực phẩm l&yacute; tưởng đ&aacute;ng để bổ sung v&agrave;o thực đơn h&agrave;ng ng&agrave;y, bởi&nbsp;<em>măng t&acirc;y</em>&nbsp;c&oacute; &nbsp;chứa rất nhiều hợp chất flavonoid c&oacute; t&ecirc;n l&agrave; rutin n&ecirc;n n&oacute; c&oacute; t&aacute;c dụng cải thiện tuần ho&agrave;n m&aacute;u, cũng cố c&aacute;c mao mạch v&agrave; duy tr&igrave; độ mềm dẻo &nbsp;của th&agrave;nh mạch. V&igrave; vậy, măng t&acirc;y xanh &nbsp;c&ograve;n được ứng dụng v&agrave;o điều trị c&aacute;c rối loạn chức năng tĩnh mạch, gi&atilde;n hay suy yếu tĩnh mạch.</p>
    <p><strong>Hỗ trợ đường ruột v&agrave; tốt cho tiết niệu</strong></p>
    <p>Do&nbsp;<strong>măng t&acirc;y</strong>&nbsp;chứa một loại carbohydrate l&agrave; inulin, chất n&agrave;y sau khi đi v&agrave;o dạ d&agrave;y c&oacute; c&ocirc;ng dụng&nbsp;gi&uacute;p sự hấp thu thức &nbsp;ăn xảy ra tốt hơn, giảm c&aacute;c nguy cơ dị ứng v&agrave; giảm nguy cơ ung thư ruột kết. Inulin rất quan trọng trong việc tạo điều kiện cho hệ thống ruột ho&agrave;n th&agrave;nh tốt chức năng v&agrave; n&oacute; cũng gi&uacute;p cho sự tăng trưởng của những vi khuẩn c&oacute; lợi ở đường ruột như: lactobacilli v&agrave; bifidobacteria. Ngo&agrave;i ra, trong măng t&acirc;y xanh chứa kh&aacute; nhiều chất xơ (180g măng t&acirc;y c&oacute; chứa đến 3,6g chất xơ) v&igrave; vậy m&agrave; n&oacute; gi&uacute;p nhuận tr&agrave;ng, chống t&aacute;o b&oacute;n&hellip;</p>
    <p>Trong nhiều trường hợp,&nbsp;<strong>c&ocirc;ng dụng của&nbsp;măng t&acirc;y</strong>&nbsp;cũng được sử dụng cho người thận yếu, đau b&agrave;ng quang v&agrave; suy mật bởi n&oacute; c&oacute; chứa acid amin asparagin - &nbsp;một chất gần giống như l&agrave; thuốc lợi tiểu tự nhi&ecirc;n l&agrave;m tăng tiểu tiện, giải ph&oacute;ng chất lỏng v&agrave; đẩy lượng muối dư thừa ra khỏi cơ thể. Điều n&agrave;y cũng đặc biệt c&oacute; lợi cho những người bị ph&ugrave; nề v&agrave; những người c&oacute; bệnh cao huyết &aacute;p.</p>
    <p><img src="http://media.bizwebmedia.net/Sites/99161/data/upload/2015/6/mang_tay.jpg?0" alt="Măng t&acirc;y xanh" /></p>
    <p><strong>Giảm nguy cơ tiểu đường tu&yacute;p 2</strong></p>
    <p>C&aacute;c nh&agrave; nghi&ecirc;n cứu tại Đại học Karachi ở Pakistan cũng ph&aacute;t hiện ra rằng, ăn<strong>&nbsp;</strong>măng t&acirc;y xanh c&oacute; thể gi&uacute;p kiểm so&aacute;t bệnh tiểu đường loại 2 bằng c&aacute;ch tăng cường sự tiết chế insulin, một hormone hấp thu đường glucose trong m&aacute;u. Hơn nữa,&nbsp;<strong>măng t&acirc;y</strong>&nbsp;cũng chứa nhiều c&aacute;c carbohydrate c&oacute; lợi gi&uacute;p ngăn chặn sự h&igrave;nh th&agrave;nh c&aacute;c cholesterol xấu trong m&aacute;u l&agrave; nguy cơ g&acirc;y b&eacute;o ph&igrave; v&agrave; bệnh tiểu đường tu&yacute;p 2.</p>
    <p><strong>Cải thiện chuyện chăn gối</strong></p>
    <p><strong>Măng t&acirc;y xanh</strong>&nbsp;chứa kh&aacute; nhiều loại vitamin v&agrave; kho&aacute;ng chất kh&aacute;c nhau, trong đ&oacute; c&oacute; vitamin P, vitamin C, mannan, choline, arginine&hellip; l&agrave; những chất &nbsp;kh&ocirc;ng những g&oacute;p phần sản xuất hormone t&igrave;nh dục testosterone m&agrave; c&ograve;n gi&uacute;p lưu lượng m&aacute;u lưu th&ocirc;ng về c&aacute;c cơ quan sinh dục cũng như c&aacute;c d&acirc;y thần kinh cảm ứng tăng mạnh. Từ đ&oacute;, n&oacute; c&oacute; t&aacute;c dụng điều trị chứng liệt dương, khắc phục trục trặc trong chuyện chăn gối ở đ&agrave;n &ocirc;ng. Tại &nbsp;Nhật,&nbsp;<em>măng t&acirc;y xanh</em>&nbsp;được xem l&agrave; một loại viagra tự nhi&ecirc;n cho đ&agrave;n &ocirc;ng, c&aacute;c nh&agrave; nghi&ecirc;n cứu cho rằng, ăn măng t&acirc;y li&ecirc;n tục trong v&ograve;ng ba ng&agrave;y c&oacute; thể cải thiện được sức khỏe t&igrave;nh dục.</p>
    <p>Hiện nay măng t&acirc;y xanh đ&atilde; được nhiều trang trại canh t&aacute;c hiệu quả,gi&aacute; th&agrave;nh kh&ocirc;ng c&ograve;n cao như trước,c&aacute;c b&agrave; nội trợ ho&agrave;n to&agrave;n c&oacute; thể bổ xung loại rau&nbsp;bổ dưỡng n&agrave;y v&agrave;o thực đơn hằng ng&agrave;y.&nbsp;<strong>C&ocirc;ng dụng của măng t&acirc;y</strong>&nbsp;c&oacute; lẽ kh&ocirc;ng c&oacute; nhiều điều phải b&agrave;n c&atilde;i nữa rồi.</p>
    <h3><span>C&aacute;ch chế biến măng t&acirc;y xanh</span></h3>
    <h4><span><strong>Măng t&acirc;y x&agrave;o thịt b&ograve;</strong>&nbsp;</span></h4>
    <p><img src="http://media.bizwebmedia.net/sites/99161/data/Upload/2015/4/mang_tay_xanh_xao_thit_bo.jpg" alt="c&aacute;ch chế biến măng t&acirc;y x&agrave;o thịt b&ograve;" /></p>
    <p><em>Măng t&acirc;y x&agrave;o thịt b&ograve; ngon miệng đưa cơm</em></p>
    <p>Chế biến:</p>
    <p>-Thịt b&ograve; cắt miếng vừa ăn,tẩm ướp ti&ecirc;u h&agrave;nh,mắm muối vừa ăn để ngấm 30p</p>
    <p>-Măng t&acirc;y rửa sạch cắt kh&uacute;c bằng đốt ng&oacute;n tay để r&aacute;o.</p>
    <p>-Đập tỏi phi thơm,đổ thịt v&agrave;o x&agrave;o trước,chỉ x&agrave;o t&aacute;i rồi ch&uacute;t ra.Cho măng t&acirc;y v&agrave;o x&agrave;o n&ecirc;m gia vị,đảo nhanh tay đến khi măng t&acirc;y gần ch&iacute;n th&igrave; ch&uacute;t nốt thịt b&ograve; v&agrave;o đảo tiếp.Thịt ch&iacute;n ch&uacute;t ra đĩa rắc ti&ecirc;u,vừng ăn n&oacute;ng. M&oacute;n&nbsp;<strong>măng t&acirc;y x&agrave;o thịt b&ograve;</strong>&nbsp;chuẩn l&agrave; phải đảm bảo: măng t&acirc;y được x&agrave;o vừa ch&iacute;n tới, gi&ograve;n sừn sựt, thịt b&ograve; mềm ngọt, gia vị tẩm ướp đậm đ&agrave;.</p>
    <h4><span><strong>S&uacute;p măng t&acirc;y</strong>&nbsp;</span></h4>
    <p><img src="http://media.bizwebmedia.net/Sites/99161/data/upload/2015/6/an_kieng_hoan_hao_voi_sup_mang_tay.jpg?0" alt="c&aacute;ch chế biến s&uacute;p măng t&acirc;y" /></p>
    <p><em>S&uacute;p măng t&acirc;y gi&uacute;p giảm c&acirc;n thần k&igrave;</em></p>
    <p>Chế biến :</p>
    <p>-Đun n&oacute;ng bơ rồi cho cần t&acirc;y, tỏi v&agrave; h&agrave;nh t&acirc;y v&agrave;o x&agrave;o khoảng 2 ph&uacute;t.</p>
    <p>-Cho tiếp măng t&acirc;y, m&ugrave;i băm v&agrave;o chảo, n&ecirc;m muối ti&ecirc;u vừa ăn.</p>
    <p>-Đổ nước d&ugrave;ng g&agrave; v&agrave;o nồi ninh c&ugrave;ng hỗn hợp măng t&acirc;y khoảng 20 - 25 ph&uacute;t với lửa nhỏ.</p>
    <p>-M&uacute;c măng v&agrave;o m&aacute;y xay sinh tố, xay nhuyễn với sữa.</p>
    <p>-Đổ măng t&acirc;y&nbsp;đ&atilde; xay nhuyễn ra b&aacute;t, trang tr&iacute; với một muỗng kem tươi, ăn n&oacute;ng. Vậy l&agrave; ch&uacute;ng ta đ&atilde; ho&agrave;n th&agrave;nh m&oacute;n&nbsp;<strong>s&uacute;p măng t&acirc;y</strong>&nbsp;ngon tuyệt rồi.</p>
    <p>Hi vọng với hai&nbsp;<strong>c&aacute;ch chế biến măng t&acirc;y</strong>&nbsp;,hai c&ocirc;ng dụng kh&aacute;c nhau,ch&uacute;c c&aacute;c chị em ngon miệng&nbsp;<img title="heart" src="http://thucphamcleverfood.bizwebvietnam.com/Extensions/ckeditor.4.0.1/plugins/smiley/images/heart.gif" alt="heart" width="20" height="20" />Ngo&agrave;i ra m&oacute;n măng t&acirc;y x&agrave;o&nbsp;<a href="http://cleverfood.com.vn/hai-san-tuoi-song-b2111121.html" target="_blank"><strong>hải sản</strong></a>&nbsp;cũng rất chất đ&oacute; ạ.</p>
    5:15:01 AM
    ss <h2><span>Măng t&acirc;y xanh loại 1</span></h2>
    <p>Thời gian qua c&oacute; nhiều th&ocirc;ng tin cho rằng ăn măng t&acirc;y c&oacute; thể đẩy l&ugrave;i nhiều loại ung thư.&nbsp;Tuy chưa c&oacute; kết luận ch&iacute;nh thức nhưng quả thực măng t&acirc;y xanh rất ngon v&agrave; c&oacute; nhiều c&ocirc;ng dụng trong y học.</p>
    <h3><span><span><span>C&ocirc;ng dụng của măng t&acirc;y</span></span></span></h3>
    <p><strong>C&oacute; lợi cho b&agrave; bầu v&agrave; thai nhi</strong></p>
    <p>Theo bảng số liệu được c&ocirc;ng bố tr&ecirc;n Whfoods, trong 180g&nbsp;<strong>măng t&acirc;y xanh</strong>&nbsp;c&oacute; chứa đến 268,2 microgam folate, chiếm 67% lượng folate cơ thể &nbsp;thai phụ cần mỗi ng&agrave;y. Đ&acirc;y l&agrave; chất c&oacute; &iacute;ch cho việc h&igrave;nh th&agrave;nh v&agrave; ph&aacute;t triển c&aacute;c tế b&agrave;o m&aacute;u của thai nhi v&agrave; l&agrave; chất cần thiết cho việc h&igrave;nh th&agrave;nh ống thần kinh thai nhi v&agrave; l&agrave;m giảm nguy cơ khuyết tật ống thần kinh khi trẻ ra đời.</p>
    <p>Một nghi&ecirc;n cứu được c&ocirc;ng bố tr&ecirc;n KidsHealth cho biết rằng, những phụ nữ ti&ecirc;u thụ khoảng 400 microgram folate mỗi ng&agrave;y trước khi mang thai v&agrave; trong thời kỳ đầu mang thai sẽ l&agrave;m giảm đến 70% c&aacute;c nguy cơ khuyết tật trầm trọng li&ecirc;n quan đến ống thần kinh ở trẻ sơ sinh.Như vậy trong những th&aacute;ng đầu bạn n&ecirc;n ăn khoảng 200g măng t&acirc;y xanh<strong><em>.</em></strong></p>
    <p><img src="http://media.bizwebmedia.net/sites/99161/data/Upload/2015/4/mang_tay_xanh_loai_to_23_04.JPG" alt="Măng t&acirc;y xanh" /></p>
    <p><strong>Ph&ograve;ng chống suy gi&atilde;n tĩnh mạch</strong></p>
    <p>Nếu bạn đang bị suy gi&atilde;n tĩnh mạch th&igrave; măng t&acirc;y xanh c&oacute; c&ocirc;ng dụng&nbsp;l&agrave; một loại thực phẩm l&yacute; tưởng đ&aacute;ng để bổ sung v&agrave;o thực đơn h&agrave;ng ng&agrave;y, bởi&nbsp;<em>măng t&acirc;y</em>&nbsp;c&oacute; &nbsp;chứa rất nhiều hợp chất flavonoid c&oacute; t&ecirc;n l&agrave; rutin n&ecirc;n n&oacute; c&oacute; t&aacute;c dụng cải thiện tuần ho&agrave;n m&aacute;u, cũng cố c&aacute;c mao mạch v&agrave; duy tr&igrave; độ mềm dẻo &nbsp;của th&agrave;nh mạch. V&igrave; vậy, măng t&acirc;y xanh &nbsp;c&ograve;n được ứng dụng v&agrave;o điều trị c&aacute;c rối loạn chức năng tĩnh mạch, gi&atilde;n hay suy yếu tĩnh mạch.</p>
    <p><strong>Hỗ trợ đường ruột v&agrave; tốt cho tiết niệu</strong></p>
    <p>Do&nbsp;<strong>măng t&acirc;y</strong>&nbsp;chứa một loại carbohydrate l&agrave; inulin, chất n&agrave;y sau khi đi v&agrave;o dạ d&agrave;y c&oacute; c&ocirc;ng dụng&nbsp;gi&uacute;p sự hấp thu thức &nbsp;ăn xảy ra tốt hơn, giảm c&aacute;c nguy cơ dị ứng v&agrave; giảm nguy cơ ung thư ruột kết. Inulin rất quan trọng trong việc tạo điều kiện cho hệ thống ruột ho&agrave;n th&agrave;nh tốt chức năng v&agrave; n&oacute; cũng gi&uacute;p cho sự tăng trưởng của những vi khuẩn c&oacute; lợi ở đường ruột như: lactobacilli v&agrave; bifidobacteria. Ngo&agrave;i ra, trong măng t&acirc;y xanh chứa kh&aacute; nhiều chất xơ (180g măng t&acirc;y c&oacute; chứa đến 3,6g chất xơ) v&igrave; vậy m&agrave; n&oacute; gi&uacute;p nhuận tr&agrave;ng, chống t&aacute;o b&oacute;n&hellip;</p>
    <p>Trong nhiều trường hợp,&nbsp;<strong>c&ocirc;ng dụng của&nbsp;măng t&acirc;y</strong>&nbsp;cũng được sử dụng cho người thận yếu, đau b&agrave;ng quang v&agrave; suy mật bởi n&oacute; c&oacute; chứa acid amin asparagin - &nbsp;một chất gần giống như l&agrave; thuốc lợi tiểu tự nhi&ecirc;n l&agrave;m tăng tiểu tiện, giải ph&oacute;ng chất lỏng v&agrave; đẩy lượng muối dư thừa ra khỏi cơ thể. Điều n&agrave;y cũng đặc biệt c&oacute; lợi cho những người bị ph&ugrave; nề v&agrave; những người c&oacute; bệnh cao huyết &aacute;p.</p>
    <p><img src="http://media.bizwebmedia.net/Sites/99161/data/upload/2015/6/mang_tay.jpg?0" alt="Măng t&acirc;y xanh" /></p>
    <p><strong>Giảm nguy cơ tiểu đường tu&yacute;p 2</strong></p>
    <p>C&aacute;c nh&agrave; nghi&ecirc;n cứu tại Đại học Karachi ở Pakistan cũng ph&aacute;t hiện ra rằng, ăn<strong>&nbsp;</strong>măng t&acirc;y xanh c&oacute; thể gi&uacute;p kiểm so&aacute;t bệnh tiểu đường loại 2 bằng c&aacute;ch tăng cường sự tiết chế insulin, một hormone hấp thu đường glucose trong m&aacute;u. Hơn nữa,&nbsp;<strong>măng t&acirc;y</strong>&nbsp;cũng chứa nhiều c&aacute;c carbohydrate c&oacute; lợi gi&uacute;p ngăn chặn sự h&igrave;nh th&agrave;nh c&aacute;c cholesterol xấu trong m&aacute;u l&agrave; nguy cơ g&acirc;y b&eacute;o ph&igrave; v&agrave; bệnh tiểu đường tu&yacute;p 2.</p>
    <p><strong>Cải thiện chuyện chăn gối</strong></p>
    <p><strong>Măng t&acirc;y xanh</strong>&nbsp;chứa kh&aacute; nhiều loại vitamin v&agrave; kho&aacute;ng chất kh&aacute;c nhau, trong đ&oacute; c&oacute; vitamin P, vitamin C, mannan, choline, arginine&hellip; l&agrave; những chất &nbsp;kh&ocirc;ng những g&oacute;p phần sản xuất hormone t&igrave;nh dục testosterone m&agrave; c&ograve;n gi&uacute;p lưu lượng m&aacute;u lưu th&ocirc;ng về c&aacute;c cơ quan sinh dục cũng như c&aacute;c d&acirc;y thần kinh cảm ứng tăng mạnh. Từ đ&oacute;, n&oacute; c&oacute; t&aacute;c dụng điều trị chứng liệt dương, khắc phục trục trặc trong chuyện chăn gối ở đ&agrave;n &ocirc;ng. Tại &nbsp;Nhật,&nbsp;<em>măng t&acirc;y xanh</em>&nbsp;được xem l&agrave; một loại viagra tự nhi&ecirc;n cho đ&agrave;n &ocirc;ng, c&aacute;c nh&agrave; nghi&ecirc;n cứu cho rằng, ăn măng t&acirc;y li&ecirc;n tục trong v&ograve;ng ba ng&agrave;y c&oacute; thể cải thiện được sức khỏe t&igrave;nh dục.</p>
    <p>Hiện nay măng t&acirc;y xanh đ&atilde; được nhiều trang trại canh t&aacute;c hiệu quả,gi&aacute; th&agrave;nh kh&ocirc;ng c&ograve;n cao như trước,c&aacute;c b&agrave; nội trợ ho&agrave;n to&agrave;n c&oacute; thể bổ xung loại rau&nbsp;bổ dưỡng n&agrave;y v&agrave;o thực đơn hằng ng&agrave;y.&nbsp;<strong>C&ocirc;ng dụng của măng t&acirc;y</strong>&nbsp;c&oacute; lẽ kh&ocirc;ng c&oacute; nhiều điều phải b&agrave;n c&atilde;i nữa rồi.</p>
    <h3><span>C&aacute;ch chế biến măng t&acirc;y xanh</span></h3>
    <h4><span><strong>Măng t&acirc;y x&agrave;o thịt b&ograve;</strong>&nbsp;</span></h4>
    <p><img src="http://media.bizwebmedia.net/sites/99161/data/Upload/2015/4/mang_tay_xanh_xao_thit_bo.jpg" alt="c&aacute;ch chế biến măng t&acirc;y x&agrave;o thịt b&ograve;" /></p>
    <p><em>Măng t&acirc;y x&agrave;o thịt b&ograve; ngon miệng đưa cơm</em></p>
    <p>Chế biến:</p>
    <p>-Thịt b&ograve; cắt miếng vừa ăn,tẩm ướp ti&ecirc;u h&agrave;nh,mắm muối vừa ăn để ngấm 30p</p>
    <p>-Măng t&acirc;y rửa sạch cắt kh&uacute;c bằng đốt ng&oacute;n tay để r&aacute;o.</p>
    <p>-Đập tỏi phi thơm,đổ thịt v&agrave;o x&agrave;o trước,chỉ x&agrave;o t&aacute;i rồi ch&uacute;t ra.Cho măng t&acirc;y v&agrave;o x&agrave;o n&ecirc;m gia vị,đảo nhanh tay đến khi măng t&acirc;y gần ch&iacute;n th&igrave; ch&uacute;t nốt thịt b&ograve; v&agrave;o đảo tiếp.Thịt ch&iacute;n ch&uacute;t ra đĩa rắc ti&ecirc;u,vừng ăn n&oacute;ng. M&oacute;n&nbsp;<strong>măng t&acirc;y x&agrave;o thịt b&ograve;</strong>&nbsp;chuẩn l&agrave; phải đảm bảo: măng t&acirc;y được x&agrave;o vừa ch&iacute;n tới, gi&ograve;n sừn sựt, thịt b&ograve; mềm ngọt, gia vị tẩm ướp đậm đ&agrave;.</p>
    <h4><span><strong>S&uacute;p măng t&acirc;y</strong>&nbsp;</span></h4>
    <p><img src="http://media.bizwebmedia.net/Sites/99161/data/upload/2015/6/an_kieng_hoan_hao_voi_sup_mang_tay.jpg?0" alt="c&aacute;ch chế biến s&uacute;p măng t&acirc;y" /></p>
    <p><em>S&uacute;p măng t&acirc;y gi&uacute;p giảm c&acirc;n thần k&igrave;</em></p>
    <p>Chế biến :</p>
    <p>-Đun n&oacute;ng bơ rồi cho cần t&acirc;y, tỏi v&agrave; h&agrave;nh t&acirc;y v&agrave;o x&agrave;o khoảng 2 ph&uacute;t.</p>
    <p>-Cho tiếp măng t&acirc;y, m&ugrave;i băm v&agrave;o chảo, n&ecirc;m muối ti&ecirc;u vừa ăn.</p>
    <p>-Đổ nước d&ugrave;ng g&agrave; v&agrave;o nồi ninh c&ugrave;ng hỗn hợp măng t&acirc;y khoảng 20 - 25 ph&uacute;t với lửa nhỏ.</p>
    <p>-M&uacute;c măng v&agrave;o m&aacute;y xay sinh tố, xay nhuyễn với sữa.</p>
    <p>-Đổ măng t&acirc;y&nbsp;đ&atilde; xay nhuyễn ra b&aacute;t, trang tr&iacute; với một muỗng kem tươi, ăn n&oacute;ng. Vậy l&agrave; ch&uacute;ng ta đ&atilde; ho&agrave;n th&agrave;nh m&oacute;n&nbsp;<strong>s&uacute;p măng t&acirc;y</strong>&nbsp;ngon tuyệt rồi.</p>
    <p>Hi vọng với hai&nbsp;<strong>c&aacute;ch chế biến măng t&acirc;y</strong>&nbsp;,hai c&ocirc;ng dụng kh&aacute;c nhau,ch&uacute;c c&aacute;c chị em ngon miệng&nbsp;<img title="heart" src="http://thucphamcleverfood.bizwebvietnam.com/Extensions/ckeditor.4.0.1/plugins/smiley/images/heart.gif" alt="heart" width="20" height="20" />Ngo&agrave;i ra m&oacute;n măng t&acirc;y x&agrave;o&nbsp;<a href="http://cleverfood.com.vn/hai-san-tuoi-song-b2111121.html" target="_blank"><strong>hải sản</strong></a>&nbsp;cũng rất chất đ&oacute; ạ.</p>
    `;

    return (
      <ScrollView style={styles.container}>
        <HTML
          html={html}
          htmlStyles={{
            img: { resizeMode: "cover" }
          }}
          imagesMaxWidth={300}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
