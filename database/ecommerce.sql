-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 04, 2024 at 10:43 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE IF NOT EXISTS `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `User_id` int(11) DEFAULT NULL,
  `Product_id` int(11) DEFAULT NULL,
  `Product_variant_id` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `Status` enum('Yes','No') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `User_id`, `Product_id`, `Product_variant_id`, `Quantity`, `Status`) VALUES
(39, 1, 379, NULL, 1, 'Yes'),
(40, 1, 391, NULL, 1, 'Yes'),
(34, 2, 401, NULL, 1, 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `url_slug` varchar(255) NOT NULL,
  `parent_cat_id` int(11) DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url_slug` (`url_slug`),
  KEY `parent_cat_id` (`parent_cat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `url_slug`, `parent_cat_id`, `status`) VALUES
(4, 'watches', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTR2Eoiw03g6kg9zy4KVUxbFps3GxmixalJFYyQHsZQ7RXAcyGsv-2IJ20YMmC9OSh2tBm23VaJROrCVHRmx1hkHtNrf6VK4Pb6sx5LrcMLV9b5egzHQB0j', 4, 'active'),
(3, 'CapsForWomen', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4frKi1dinluQwLHKNhRGIiE-OpEbDUgceHA&s', 3, 'active'),
(2, 'trimmers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0ylaveRBLn-QZZIjLbrGjVa9142Db_YFZA&s', 2, 'active'),
(1, 'girlglass', 'https://img.freepik.com/premium-psd/attractive-young-girl-with-short-hair-style-wearing-glasses-face-portrait-transparent-background_1284378-593.jpg', 1, 'active'),
(5, 'kids', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYQzZ7knhhc4MxVwkiraIdLcWROtqPHX5pQ&s', 5, 'active'),
(6, 'womens', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIqY-VTfppfkEmImpw0IH4vL-0g0ohMAvAQ&s', 6, 'active'),
(7, 'mens', 'https://www.justheadshots.photo/wp-content/uploads/2020/04/white-background-headshots-057.jpg', 7, 'active'),
(8, 'airpodes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTjeoxqCyQ77nBMRl-jLru7RC9zt08x4Qiw&s', 8, 'active'),
(9, 'girlbags', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTootBIMp1j5XxJsZkvbToVvWsCKGEzxwowJQ&s', 9, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
CREATE TABLE IF NOT EXISTS `discounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Coupon_code` varchar(255) DEFAULT NULL,
  `Discount_type` enum('fixed','rate') DEFAULT NULL,
  `Disocunt_value` double DEFAULT NULL,
  `Start_date` date DEFAULT NULL,
  `End_date` date DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Status` enum('active','inactive') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Order_number` int(255) DEFAULT NULL,
  `User_id` int(255) DEFAULT NULL,
  `Totalamount` double DEFAULT NULL,
  `Discountamount` double DEFAULT NULL,
  `Grossamount` double DEFAULT NULL,
  `Shippingamont` double DEFAULT NULL,
  `netamount` double DEFAULT NULL,
  `Status` enum('placed','processing','shipping','delivered') DEFAULT NULL,
  `Payment_status` enum('paid','not paid') DEFAULT NULL,
  `Payment_type` enum('netbanking','upi','card') DEFAULT NULL,
  `Payment_transaction_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

DROP TABLE IF EXISTS `order_products`;
CREATE TABLE IF NOT EXISTS `order_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Order_id` int(255) DEFAULT NULL,
  `Product_id` int(255) DEFAULT NULL,
  `Product_variant_id` int(255) DEFAULT NULL,
  `Product_name` varchar(255) DEFAULT NULL,
  `Color` varchar(255) DEFAULT NULL,
  `Size` varchar(255) DEFAULT NULL,
  `Price` double DEFAULT NULL,
  `Quantity` int(255) DEFAULT NULL,
  `Total_amount` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_shipping_addresses`
--

DROP TABLE IF EXISTS `order_shipping_addresses`;
CREATE TABLE IF NOT EXISTS `order_shipping_addresses` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Order_id` int(255) DEFAULT NULL,
  `Shipping_address_id` varchar(255) DEFAULT NULL,
  `Full_address` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Zip_code` int(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Product_name` varchar(255) DEFAULT NULL,
  `Url_slug` varchar(255) DEFAULT NULL,
  `category_id` int(255) DEFAULT NULL,
  `Description` text,
  `Price` varchar(255) DEFAULT NULL,
  `Stock_quantity` int(255) DEFAULT NULL,
  `Status` enum('active','inactive') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=494 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `Product_name`, `Url_slug`, `category_id`, `Description`, `Price`, `Stock_quantity`, `Status`) VALUES
(396, 'BROWN CHECK WOOL COAT', 'https://images.bestsellerclothing.in/data/only/04-oct-2024/112923101_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '7199', NULL, 'active'),
(423, 'GIRLS NAVY BLUE PRINTED T-SHIRT', 'https://images.bestsellerclothing.in/data/only-kids/7-sep-2022/153910701_g3.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '384', NULL, 'active'),
(394, 'OFF-WHITE PRINTED SHIRT', 'https://images.bestsellerclothing.in/data/only/29-july-2024/900811902_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2069', NULL, 'active'),
(421, 'GIRLS LIGHT PINK ANIMAL PRINT FIT & FLARE DRESS', 'https://images.bestsellerclothing.in/data/only-kids/04-feb-2023/260889601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '799', NULL, 'active'),
(422, 'BLUE FLORAL PRINT DRESS', 'https://images.bestsellerclothing.in/data/only-kids/19-sep-2022/260889501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '799', NULL, 'active'),
(419, 'WHITE CHECK PRINT CROPPED SHIRT', 'https://images.bestsellerclothing.in/data/only-kids/june-24-2022/227362201_g1.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '719', NULL, 'active'),
(420, 'WHITE COLOURBLOCKED CROP TOP', 'https://images.bestsellerclothing.in/data/only-kids/24-jan-2023/227361601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599', NULL, 'active'),
(392, 'DARK BLUE HIGH RISE PIPER SKINNY JEANS', 'https://images.bestsellerclothing.in/data/only/20-aug-2024/900722201_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2519', NULL, 'active'),
(418, 'BLACK HIGH RISE PAPERBAG WAIST JEANS', 'https://images.bestsellerclothing.in/data/only-kids/14-mar-2023/289874601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '799', NULL, 'active'),
(390, 'OFF-WHITE LOOSE FIT TEDDY JACKET', 'https://images.bestsellerclothing.in/data/only/04-oct-2024/112922701_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '6299', NULL, 'active'),
(417, 'GIRLS GREY MID RISE DENIM SKIRT', 'https://images.bestsellerclothing.in/data/only-kids/2-nov-2022/193922101_g3.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '799', NULL, 'active'),
(416, 'GIRLS BLUE SCHIFLLI DENIM TOP', 'https://images.bestsellerclothing.in/data/only-kids/9-mar-2023/148851001_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '679', NULL, 'active'),
(415, 'PACK OF 3 PRINTED SCRUNCHIES', 'https://images.bestsellerclothing.in/data/only-kids/2-nov-2022/155220901_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', NULL, NULL, 'active'),
(300, 'BROWN PADDED QUILTED GILET', 'https://images.bestsellerclothing.in/data/selected/07-oct-2024/114692105_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '7499', NULL, 'active'),
(299, 'BEIGE ORGANIC COTTON STRUCTURED POLO', 'https://images.bestsellerclothing.in/data/selected/05-aug-2024/284896202_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3499', NULL, 'active'),
(414, 'GIRLS BLUE MID RISE CHECK PRINT STRAIGHT FIT JEANS', 'https://images.bestsellerclothing.in/data/only-kids/19-sep-2022/289874901_g3.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '919', NULL, 'active'),
(413, 'GIRLS BLUE MID RISE MOM FIT JEANS', 'https://images.bestsellerclothing.in/data/only-kids/19-sep-2022/289874801_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '799', NULL, 'active'),
(493, 'BLACK QUILTED BAG', 'https://images.bestsellerclothing.in/data/only/10-jan-2023/284243501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 9, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1319', NULL, 'active'),
(412, 'GIRLS WHITE FLORAL TOP', 'https://images.bestsellerclothing.in/data/only-kids/04-feb-2023/118014201_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599', NULL, 'active'),
(293, 'GREEN COTTON KNITTED SHIRT', 'https://images.bestsellerclothing.in/data/selected/02-sep-2024/900741501_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3999', NULL, 'active'),
(492, 'BLACK STRIPED BEACH BAG', 'https://images.bestsellerclothing.in/data/only/march-25-2022/173779001_g2.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 9, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1119', NULL, 'active'),
(411, 'ORANGE RIBBED T-SHIRT', 'https://images.bestsellerclothing.in/data/only-kids/14-mar-2023/299444702_g3.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '449', NULL, 'active'),
(410, 'GIRLS GREEN T-SHIRT', 'https://images.bestsellerclothing.in/data/only-kids/04-feb-2023/105255501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '349', NULL, 'active'),
(291, 'LIGHT BLUE ORGANIC COTTON TAPERED JEANS', 'https://images.bestsellerclothing.in/data/selected/02-sep-2024/288481701_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '7999', NULL, 'active'),
(490, 'LIGHT BLUE QUILTED BAG', 'https://images.bestsellerclothing.in/data/only/08-mar-2022/253767801_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 9, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1399', NULL, 'active'),
(290, 'BROWN ORGANIC COTTON CLASSIC OVERSHIRT', 'https://images.bestsellerclothing.in/data/selected/24-july-2024/156131101_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '4999', NULL, 'active'),
(491, 'BLUE CROCHET BAG', 'https://images.bestsellerclothing.in/data/only/24-feb-2022/253768403_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 9, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1119', NULL, 'active'),
(409, 'GIRLS BEIGE OVERALLS', 'https://images.bestsellerclothing.in/data/only-kids/04-feb-2023/127831501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '799', NULL, 'active'),
(289, 'DARK GREEN JERSEY BOMBER JACKET', 'https://images.bestsellerclothing.in/data/selected/07-oct-2024/280618104_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '5499', NULL, 'active'),
(489, 'PINK CHERRY TOTE BAG', 'https://images.bestsellerclothing.in/data/only/08-mar-2022/242722404_g2.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 9, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '519', NULL, 'active'),
(288, 'WHITE OVERSIZED LOGO PRINT T-SHIRT', 'https://images.bestsellerclothing.in/data/selected/26-july-2024/900821002_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1999', NULL, 'active'),
(488, 'GREEN CROCHET BAG', 'https://images.bestsellerclothing.in/data/only/24-feb-2022/253768404_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 9, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1119', NULL, 'active'),
(408, 'BLUE MID RISE PRINTED WIDE LEG JEANS', 'https://images.bestsellerclothing.in/data/only-kids/24-jan-2023/279441601_g2.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '919', NULL, 'active'),
(407, 'DARK BLUE HIGH RISE CARROT FIT JEANS', 'https://images.bestsellerclothing.in/data/only-kids/14-mar-2023/155222002_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '759', NULL, 'active'),
(287, 'BLUE MID RISE STRAIGHT FIT JEANS', 'https://images.bestsellerclothing.in/data/selected/02-sep-2024/900737801_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '5999', NULL, 'active'),
(487, 'FUCHSIA RIBBED BEANIE', 'https://images.bestsellerclothing.in/data/only/8-aug-2023/237168701_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599', NULL, 'active'),
(286, 'BLACK TEXTURED COTTON SHIRT', 'https://images.bestsellerclothing.in/data/selected/02-sep-2024/900822101_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3499', NULL, 'active'),
(406, 'GIRLS BLACK HIGH NECK LONG PUFFER JACKET', 'https://images.bestsellerclothing.in/data/only-kids/28-apr-2023/128819801_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1199', NULL, 'active'),
(424, 'GIRLS GREEN FOIL PRINT T-SHIRT', 'https://images.bestsellerclothing.in/data/only-kids/19-sep-2022/155221601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '719', NULL, 'active'),
(285, 'BROWN CORDUROY STRAIGHT FIT PANTS', 'https://images.bestsellerclothing.in/data/selected/24-july-2024/156813205_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '4999', NULL, 'active'),
(405, 'GIRLS GREEN FLORAL T-SHIRT', 'https://images.bestsellerclothing.in/data/only-kids/28-apr-2023/108870501_g3.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '404', NULL, 'active'),
(284, 'DARK BLUE HYBRID PADDED JACKET', 'https://images.bestsellerclothing.in/data/selected/07-oct-2024/286956301_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '15999', NULL, 'active'),
(400, 'DARK GREEN FITTED PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/116897801_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2969', NULL, 'active'),
(404, 'GIRLS LIGHT BLUE HIGH RISE BALLOON FIT JEANS', 'https://images.bestsellerclothing.in/data/only-kids/28-apr-2023/120043301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1199', NULL, 'active'),
(283, 'LIGHT BLUE MID RISE STRAIGHT FIT JEANS', 'https://images.bestsellerclothing.in/data/selected/02-sep-2024/900737901_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '6999', NULL, 'active'),
(399, 'BLACK APPLIQU PRINT T-SHIRT', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/900750701_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1349', NULL, 'active'),
(403, 'GIRLS RED PIPING CO-ORD SET JOGGERS', 'https://images.bestsellerclothing.in/data/only-kids/28-apr-2023/155222301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '679', NULL, 'active'),
(398, 'WHITE UTILITY SHIRT DRESS', 'https://images.bestsellerclothing.in/data/only/29-july-2024/900879701_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '4049', NULL, 'active'),
(282, 'OLIVE CUBAN COLLAR COTTON SHIRT', 'https://images.bestsellerclothing.in/data/selected/16-aug-2024/900821502_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3299', NULL, 'active'),
(402, 'GIRLS GREEN COLOURBLOCKED PULLOVER', 'https://images.bestsellerclothing.in/data/only-kids/28-apr-2023/289673101_g3.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '719', NULL, 'active'),
(281, 'BEIGE KNITTED FULL SLEEVES POLO', 'https://images.bestsellerclothing.in/data/selected/16-aug-2024/284896101_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3299', NULL, 'active'),
(397, 'WHITE DONALD DUCK PRINT SHIRT', 'https://images.bestsellerclothing.in/data/only/05-aug-2024/900869601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3599', NULL, 'active'),
(401, 'GIRLS BLACK LAYERED FLORAL SHORT SKIRT', 'https://images.bestsellerclothing.in/data/only-kids/28-apr-2023/153908601_g2.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 5, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '719', NULL, 'active'),
(391, 'PINK CROPPED FITTED POLO', 'https://images.bestsellerclothing.in/data/only/16-aug-2024/901023503_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1349', NULL, 'active'),
(304, 'BLACK ORGANIC COTTON PERFORMANCE SHIRT', 'https://images.bestsellerclothing.in/data/selected/16-aug-2024/143821101_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '4999', NULL, 'active'),
(303, 'BLUE ORGANIC COTTON OVERSIZED T-SHIRT', 'https://images.bestsellerclothing.in/data/selected/24-july-2024/240738708_01.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1799', NULL, 'active'),
(302, 'LIGHT GREY LOW RISE WASHED SLIM FIT JEANS', 'https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736901_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '6999', NULL, 'active'),
(301, 'WHITE CUBAN COLLAR COTTON SHIRT', 'https://images.bestsellerclothing.in/data/selected/16-aug-2024/900821501_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3299', NULL, 'active'),
(298, 'BROWN LINEN SHIRT', 'https://images.bestsellerclothing.in/data/selected/24-sep-2024/900800803_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3999', NULL, 'active'),
(297, 'GREEN CORDUROY STRAIGHT FIT PANTS', 'https://images.bestsellerclothing.in/data/selected/24-july-2024/156813206_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '4999', NULL, 'active'),
(296, 'GREY MID RISE WASHED SLIM FIT JEANS', 'https://images.bestsellerclothing.in/data/selected/24-sep-2024/900736001_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '5999', NULL, 'active'),
(295, 'BLACK NYLON BLEND TAILORED TROUSERS', 'https://images.bestsellerclothing.in/data/selected/16-aug-2024/114899801_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '6499', NULL, 'active'),
(294, 'DARK BROWN JERSEY BOMBER JACKET', 'https://images.bestsellerclothing.in/data/selected/07-oct-2024/280618105_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '5499', NULL, 'active'),
(292, 'RED KNITTED FULL SLEEVES POLO', 'https://images.bestsellerclothing.in/data/selected/16-aug-2024/284896102_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto', 7, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3299', NULL, 'active'),
(393, 'DARK PINK BELTED SHIRT DRESS', 'https://images.bestsellerclothing.in/data/only/20-aug-2024/900810201_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3869', NULL, 'active'),
(278, 'Apple AirPods Pro (Studio Performance)', '/Assests/products/airpodes/boat58.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '279.00', 35, 'active'),
(276, 'Beats Fit Pro (Green)', '/Assests/products/airpodes/boat56.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 40, 'active'),
(277, 'Apple AirPods (Gen 3 - Special)', '/Assests/products/airpodes/boat57.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '179.00', 50, 'active'),
(274, 'Beats Studio3 Wireless (Blue)', '/Assests/products/airpodes/boat54.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '349.99', 25, 'active'),
(275, 'Apple AirPods Max (Complete Edition)', '/Assests/products/airpodes/boat55.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '649.00', 15, 'active'),
(273, 'Apple AirPods Pro (Elite Edition)', '/Assests/products/airpodes/boat53.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '329.00', 30, 'active'),
(272, 'Apple AirPods (Sport Performance)', '/Assests/products/airpodes/boat52.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 60, 'active'),
(271, 'Beats Flex (White)', '/Assests/products/airpodes/boat51.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '69.99', 150, 'active'),
(270, 'Apple AirPods Max (Design Edition)', '/Assests/products/airpodes/boat50.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599.00', 20, 'active'),
(269, 'Beats Solo3 Wireless (Limited Edition)', '/Assests/products/airpodes/boat49.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '299.00', 25, 'active'),
(268, 'Apple AirPods Pro (Next Gen)', '/Assests/products/airpodes/boat48.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '329.00', 30, 'active'),
(267, 'Beats Fit Pro (Limited Edition)', '/Assests/products/airpodes/boat47.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 45, 'active'),
(266, 'Apple AirPods (Ultimate Edition)', '/Assests/products/airpodes/boat46.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 75, 'active'),
(265, 'Beats Powerbeats Pro (Limited Edition)', '/Assests/products/airpodes/boat45.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '249.00', 35, 'active'),
(264, 'Apple AirPods Max (Sport Edition)', '/Assests/products/airpodes/boat44.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599.00', 20, 'active'),
(263, 'Beats Studio Buds (Black)', '/Assests/products/airpodes/boat43.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '149.99', 60, 'active'),
(262, 'Apple AirPods Pro (Fitness Edition)', '/Assests/products/airpodes/boat42.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '279.00', 40, 'active'),
(261, 'Beats Solo Pro (Special Edition)', '/Assests/products/airpodes/boat41.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '299.00', 30, 'active'),
(260, 'Apple AirPods Pro (Comfort Edition)', '/Assests/products/airpodes/boat40.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '259.00', 50, 'active'),
(259, 'Apple AirPods (Gen 3 - Bundle)', '/Assests/products/airpodes/boat39.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '179.00', 70, 'active'),
(258, 'Beats Flex (Blue)', '/Assests/products/airpodes/boat38.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '69.99', 100, 'active'),
(256, 'Beats Powerbeats High-Performance (Black)', '/Assests/products/airpodes/boat36.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 85, 'active'),
(257, 'Apple AirPods Max (Ultra)', '/Assests/products/airpodes/boat37.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '649.00', 25, 'active'),
(255, 'Apple AirPods Pro (Studio Edition)', '/Assests/products/airpodes/boat35.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '299.00', 35, 'active'),
(254, 'Beats Fit Pro (Pink)', '/Assests/products/airpodes/boat34.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 90, 'active'),
(253, 'Apple AirPods Pro (Travel Edition)', '/Assests/products/airpodes/boat33.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '279.00', 40, 'active'),
(252, 'Beats Studio3 Wireless (White)', '/Assests/products/airpodes/boat32.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '349.99', 30, 'active'),
(251, 'Apple AirPods Max (Limited Edition)', '/Assests/products/airpodes/boat31.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '649.00', 25, 'active'),
(250, 'Apple AirPods (Pro Performance)', '/Assests/products/airpodes/boat30.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 60, 'active'),
(249, 'Beats Solo3 Wireless (Black)', '/Assests/products/airpodes/boat29.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '299.00', 50, 'active'),
(248, 'Apple AirPods Pro (Custom Edition)', '/Assests/products/airpodes/boat28.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '329.00', 30, 'active'),
(247, 'Beats Powerbeats Pro (White)', '/Assests/products/airpodes/boat27.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '249.00', 40, 'active'),
(246, 'Apple AirPods Pro (Bundle)', '/Assests/products/airpodes/boat26.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '299.00', 45, 'active'),
(245, 'Beats Flex (Red)', '/Assests/products/airpodes/boat25.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '69.99', 150, 'active'),
(244, 'Apple AirPods Max (Green)', '/Assests/products/airpodes/boat24.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599.00', 30, 'active'),
(243, 'Beats Studio Buds (White)', '/Assests/products/airpodes/boat23.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '149.99', 80, 'active'),
(242, 'Apple AirPods Pro (2022)', '/Assests/products/airpodes/boat22.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '279.00', 50, 'active'),
(241, 'Apple AirPods (Gen 2)', '/Assests/products/airpodes/boat21.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '159.00', 100, 'active'),
(240, 'Apple AirPods Pro (Sport)', '/Assests/products/airpodes/boat20.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '259.00', 65, 'active'),
(239, 'Beats Powerbeats Pro (Black)', '/Assests/products/airpodes/boat19.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '249.00', 55, 'active'),
(238, 'Apple AirPods Max (Rose Gold)', '/Assests/products/airpodes/boat18.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599.00', 20, 'active'),
(236, 'Apple AirPods Pro (White)', '/Assests/products/airpodes/boat16.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '249.00', 65, 'active'),
(237, 'Beats Studio3 Wireless (Black)', '/Assests/products/airpodes/boat17.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '349.99', 40, 'active'),
(235, 'Beats Solo Pro (Red)', '/Assests/products/airpodes/boat15.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '299.00', 50, 'active'),
(234, 'Apple AirPods (Wireless Charging Case)', '/Assests/products/airpodes/boat14.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '159.00', 90, 'active'),
(233, 'Beats Flex (Black)', '/Assests/products/airpodes/boat13.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '69.99', 150, 'active');
INSERT INTO `products` (`id`, `Product_name`, `Url_slug`, `category_id`, `Description`, `Price`, `Stock_quantity`, `Status`) VALUES
(232, 'Apple AirPods Max (Silver)', '/Assests/products/airpodes/boat12.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '549.00', 30, 'active'),
(231, 'Apple AirPods Pro (Black)', '/Assests/products/airpodes/boat11.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '249.00', 75, 'active'),
(230, 'Beats Studio Buds (Red)', '/Assests/products/airpodes/boat10.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '149.99', 110, 'active'),
(229, 'Apple AirPods (Limited Edition)', '/Assests/products/airpodes/boat61.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 60, 'active'),
(228, 'Apple AirPods Pro (Sports Edition)', '/Assests/products/airpodes/boat8.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '259.00', 70, 'active'),
(225, 'Apple AirPods (2nd Generation)', '/Assests/products/airpodes/boat5.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '129.00', 150, 'active'),
(226, 'Beats Fit Pro by Apple', '/Assests/products/airpodes/boat6.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 90, 'active'),
(227, 'Apple AirPods Max (Space Gray)', '/Assests/products/airpodes/boat7.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '549.00', 40, 'active'),
(224, 'Apple AirPods Pro (1st Generation)', '/Assests/products/airpodes/boat4.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 80, 'active'),
(223, 'Apple AirPods Max', '/Assests/products/airpodes/boat3.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '549.00', 50, 'active'),
(222, 'Apple AirPods (3rd Generation)', '/Assests/products/airpodes/boat2.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '179.00', 120, 'active'),
(221, 'Apple AirPods Pro (2nd Generation)', '/Assests/products/airpodes/boat1.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '249.00', 100, 'active'),
(279, 'Beats Powerbeats (Special Edition)', '/Assests/products/airpodes/boat59.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 50, 'active'),
(280, 'Apple AirPods (Bundle Edition)', '/Assests/products/airpodes/boat60.webp', 8, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '199.00', 60, 'active'),
(395, 'BLUE HOLE KNIT PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/112435201_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2519', NULL, 'active'),
(389, 'BEIGE CUT-WORK PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/112435101_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2519', NULL, 'active'),
(388, 'PINK CUT-OUT FIT & FLARE DRESS', 'https://images.bestsellerclothing.in/data/only/29-july-2024/900880001_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '5399', NULL, 'active'),
(387, 'LIGHT BLUE HIGH RISE ERIN STRAIGHT FIT JEANS', 'https://images.bestsellerclothing.in/data/only/29-july-2024/900723001_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3599', NULL, 'active'),
(386, 'MICKEY WHITE TEXTURED T-SHIRT', 'https://images.bestsellerclothing.in/data/only/06-aug-2024/900712401_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1799', NULL, 'active'),
(385, 'BLACK SHIMMER PRINTED SHIRT', 'https://images.bestsellerclothing.in/data/only/16-aug-2024/900880501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3149', NULL, 'active'),
(384, 'BLACK VARSITY BOMBER JACKET', 'https://images.bestsellerclothing.in/data/only/04-oct-2024/112922302_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '5849', NULL, 'active'),
(383, 'PINK COLOURBLOCKED FUZZY PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/112435001_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3599', NULL, 'active'),
(382, 'WHITE EMBROIDERED HEART COTTON SHIRT', 'https://images.bestsellerclothing.in/data/only-updation/18-sep-2024/900880601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2699', NULL, 'active'),
(381, 'RED PRINTED CROPPED T-SHIRT', 'https://images.bestsellerclothing.in/data/only/09-july-2024/900751801_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1799', NULL, 'active'),
(380, 'BEIGE FLORAL MIDI DRESS', 'https://images.bestsellerclothing.in/data/only/05-aug-2024/901011701_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3599', NULL, 'active'),
(379, 'BLUE HIGH RISE ERIN STRAIGHT FIT JEANS', 'https://images.bestsellerclothing.in/data/only/02-sep-2024/900687601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3329', NULL, 'active'),
(378, 'NAVY BLUE VARSITY BOMBER JACKET', 'https://images.bestsellerclothing.in/data/only/04-oct-2024/112922301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '5849', NULL, 'active'),
(377, 'BEIGE JACQUARD KNIT TOP', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/900783901_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1799', NULL, 'active'),
(376, 'BLACK HIGH NECK FUZZY PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/112434702_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2969', NULL, 'active'),
(375, 'DARK OLIVE BELTED MIDI DRESS', 'https://images.bestsellerclothing.in/data/only/05-aug-2024/900739101_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3869', NULL, 'active'),
(374, 'YELLOW PRINTED VISCOSE SHIRT', 'https://images.bestsellerclothing.in/data/only/01-aug-2024/900811502_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2519', NULL, 'active'),
(373, 'BEIGE HIGH RISE STRAIGHT FIT PANTS', 'https://images.bestsellerclothing.in/data/only/09-july-2024/112437401_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2699', NULL, 'active'),
(372, 'BLACK LOW BACK STRAPPY MINI DRESS', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/270192001_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3149', NULL, 'active'),
(371, 'PINK O-NECK PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/195148001_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2969', NULL, 'active'),
(370, 'YELLOW FUZZY HIGH NECK PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/112434701_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2969', NULL, 'active'),
(369, 'MULTI-COLOUR PRINTED CREPE TOP', 'https://images.bestsellerclothing.in/data/only/29-july-2024/900813903_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1619', NULL, 'active'),
(368, 'BLACK EMBROIDERED DETAIL SHIRT', 'https://images.bestsellerclothing.in/data/only/17-july-2024/900818101_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2969', NULL, 'active'),
(367, 'DARK OLIVE HIGH RISE CO-ORD SET PANTS', 'https://images.bestsellerclothing.in/data/only/05-aug-2024/900753601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3329', NULL, 'active'),
(366, 'YELLOW CABLE KNIT HIGH NECK PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/117062602_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3329', NULL, 'active'),
(365, 'PINK RIB-KNIT PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/112434601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2519', NULL, 'active'),
(364, 'PURPLE PRINTED CROPPED SHIRT', 'https://images.bestsellerclothing.in/data/only/24-sep-2024/900880301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3149', NULL, 'active'),
(363, 'KETNIPZ WHITE PRINTED POLO', 'https://images.bestsellerclothing.in/data/only/04-sep-2024/900870901_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2069', NULL, 'active'),
(362, 'BLACK MID RISE FLARED JEANS', 'https://images.bestsellerclothing.in/data/only/09-july-2024/112431701_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1999', NULL, 'active'),
(361, 'BLUE HIGH RISE WIDE LEG JEANS', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/900496601_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3419', NULL, 'active'),
(360, 'PINK RHINESTONE DETAIL PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/112434501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '2969', NULL, 'active'),
(359, 'BEIGE PRINTED PUFF-SLEEVES MIDI DRESS', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/900725701_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3599', NULL, 'active'),
(358, 'BROWN RIB-KNIT CO-ORD SET PULLOVER', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/116898301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3329', NULL, 'active'),
(357, 'MICKEY WHITE PRINTED SHIRT', 'https://images.bestsellerclothing.in/data/only/06-aug-2024/900712101_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3599', NULL, 'active'),
(356, 'BLACK ACID WASHED PRINTED COTTON T-SHIRT', 'https://images.bestsellerclothing.in/data/only/16-aug-2024/273127401_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1169', NULL, 'active'),
(355, 'DARK BLUE HIGH RISE WIDE LEG JEANS', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/900496101_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3419', NULL, 'active'),
(354, 'BEIGE JACQUARD KNIT PULLOVER', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/112434401_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '3329', NULL, 'active'),
(353, 'BEIGE PRINTED RELAXED FIT T-SHIRT', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/900750401_g4.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 6, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1619', NULL, 'active'),
(486, 'GREEN COLOURBLOCKED RIB-KNIT BEANIE', 'https://images.bestsellerclothing.in/data/only/23-aug-2023/237169503_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599', NULL, 'active'),
(485, 'PINK COLOURBLOCKED RIB-KNIT BEANIE', 'https://images.bestsellerclothing.in/data/only/23-aug-2023/237169501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599', NULL, 'active'),
(484, 'YELLOW STRIPED RIB-KNIT BEANIE', 'https://images.bestsellerclothing.in/data/only/23-aug-2023/237169201_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '519', NULL, 'active'),
(483, 'BLACK CHECK TWILL CAP', 'https://images.bestsellerclothing.in/data/only/23-aug-2023/237170301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '719', NULL, 'active'),
(482, 'LIGHT GREEN KNIT BEANIE', 'https://images.bestsellerclothing.in/data/only/8-aug-2023/237169302_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '519', NULL, 'active'),
(481, 'WHITE CHECK TWILL CAP', 'https://images.bestsellerclothing.in/data/only/23-aug-2023/237169801_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '719', NULL, 'active'),
(480, 'GREEN STRIPED RIB-KNIT BEANIE', 'https://images.bestsellerclothing.in/data/only/23-aug-2023/237169202_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '519', NULL, 'active'),
(479, 'LIGHT BLUE KNIT BEANIE', 'https://images.bestsellerclothing.in/data/only/8-aug-2023/237169301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '519', NULL, 'active'),
(478, 'FUCHSIA ABSTRACT PRINT BEANIE', 'https://images.bestsellerclothing.in/data/only/23-aug-2023/237169401_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '519', NULL, 'active'),
(477, 'ORANGE RIBBED BEANIE', 'https://images.bestsellerclothing.in/data/only/8-aug-2023/237168703_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599', NULL, 'active'),
(476, 'GREEN RIBBED BEANIE', 'https://images.bestsellerclothing.in/data/only/8-aug-2023/237168702_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '599', NULL, 'active'),
(475, 'PINK POM-POM KNITTED BEANIE', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/112432401_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1349', NULL, 'active'),
(474, 'MULTI-COLOUR KNITTED BEANIE', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/112432201_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1349', NULL, 'active'),
(473, 'MICKEY RED CAP', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/900896201_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1169', NULL, 'active'),
(472, 'BEIGE RIB-KNIT BEANIE', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/285158505_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1349', NULL, 'active'),
(471, 'PINK COLOURBLOCKED KNITTED BEANIE', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/112431901_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1349', NULL, 'active'),
(470, 'KETNIPZ WHITE EMBROIDERED TWILL CAP', 'https://images.bestsellerclothing.in/data/only/04-sep-2024/901008101_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1169', NULL, 'active'),
(469, 'KETNIPZ BLACK EMBROIDERED TWILL CAP', 'https://images.bestsellerclothing.in/data/only/04-sep-2024/901008501_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1169', NULL, 'active'),
(468, 'WHITE CABLE KNIT BEANIE', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/112432301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1349', NULL, 'active'),
(467, 'MICKEY PINK PRINTED CAP', 'https://images.bestsellerclothing.in/data/only/06-sep-2024/900896301_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '1169', NULL, 'active'),
(466, 'PURPLE EMBROIDERED TWILL CAP', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/901026801_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '899', NULL, 'active'),
(465, 'WHITE EMBROIDERED TWILL CAP', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/901026901_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '899', NULL, 'active'),
(464, 'ORANGE EMBROIDERED TWILL CAP', 'https://images.bestsellerclothing.in/data/only/30-sep-2024/901027001_g0.jpg?width=380&height=500&mode=fill&fill=blur&format=auto', 3, 'Step out in style with this stunning black dress, perfect for any occasion. Tailored from premium fabric, this dress offers a sleek and flattering fit that highlights your silhouette. With its classic design and modern details, it\'s ideal for both formal events and casual outings.', '899', NULL, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `product_ratings`
--

DROP TABLE IF EXISTS `product_ratings`;
CREATE TABLE IF NOT EXISTS `product_ratings` (
  `rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `rating` tinyint(1) DEFAULT NULL,
  `review` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rating_id`)
) ENGINE=MyISAM AUTO_INCREMENT=162 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_ratings`
--

INSERT INTO `product_ratings` (`rating_id`, `product_id`, `user_id`, `rating`, `review`, `created_at`) VALUES
(1, 221, 1, 5, 'Amazing product! High quality and fast delivery.', '2024-10-18 05:04:08'),
(2, 233, 2, 4, 'Good product but took a bit long to arrive.', '2024-10-18 05:04:08'),
(3, 245, 3, 3, 'Average, expected more for the price.', '2024-10-18 05:04:08'),
(4, 256, 4, 5, 'Exceeded expectations. Highly recommend!', '2024-10-18 05:04:08'),
(5, 278, 5, 2, 'Not very satisfied with the material quality.', '2024-10-18 05:04:08'),
(6, 289, 6, 4, 'Good value for money, would buy again.', '2024-10-18 05:04:08'),
(7, 301, 7, 1, 'Terrible experience. Product arrived damaged.', '2024-10-18 05:04:08'),
(8, 312, 8, 5, 'Top-notch! Will definitely purchase again.', '2024-10-18 05:04:08'),
(9, 323, 9, 4, 'Overall, a good product.', '2024-10-18 05:04:08'),
(10, 334, 10, 3, 'It’s okay, nothing special.', '2024-10-18 05:04:08'),
(11, 345, 11, 5, 'Fantastic product, highly recommend!', '2024-10-18 05:04:08'),
(12, 356, 12, 4, 'Great value for the price.', '2024-10-18 05:04:08'),
(13, 367, 13, 2, 'Not what I expected, disappointed.', '2024-10-18 05:04:08'),
(14, 378, 14, 5, 'Perfect! Just what I was looking for.', '2024-10-18 05:04:08'),
(15, 389, 15, 3, 'It’s decent, but could be better.', '2024-10-18 05:04:08'),
(16, 400, 16, 4, 'Good quality, fast delivery.', '2024-10-18 05:04:08'),
(17, 411, 17, 5, 'Absolutely love it, will buy again!', '2024-10-18 05:04:08'),
(18, 422, 18, 1, 'Poor quality, very unhappy with the purchase.', '2024-10-18 05:04:08'),
(19, 433, 19, 3, 'Mediocre product, does the job.', '2024-10-18 05:04:08'),
(20, 444, 20, 4, 'Good product, would recommend.', '2024-10-18 05:04:08'),
(21, 455, 21, 2, 'Not as advertised, disappointed.', '2024-10-18 05:04:08'),
(22, 466, 22, 5, 'Amazing quality, very satisfied.', '2024-10-18 05:04:08'),
(23, 477, 23, 3, 'It’s okay, nothing special.', '2024-10-18 05:04:08'),
(24, 488, 24, 4, 'Overall satisfied with the product.', '2024-10-18 05:04:08'),
(25, 493, 25, 5, 'Best purchase I’ve made in a while.', '2024-10-18 05:04:08'),
(26, 221, 1, 5, 'Amazing product! High quality and fast delivery.', '2024-10-18 05:05:46'),
(27, 221, 2, 4, 'Good product but took a bit long to arrive.', '2024-10-18 05:05:46'),
(28, 221, 3, 3, 'Average, expected more for the price.', '2024-10-18 05:05:46'),
(29, 221, 4, 5, 'Exceeded expectations. Highly recommend!', '2024-10-18 05:05:46'),
(30, 233, 5, 4, 'Good product but not perfect.', '2024-10-18 05:05:46'),
(31, 233, 6, 5, 'Fantastic quality! Will buy again.', '2024-10-18 05:05:46'),
(32, 233, 7, 3, 'Decent product, does the job.', '2024-10-18 05:05:46'),
(33, 233, 8, 2, 'Not very satisfied with the quality.', '2024-10-18 05:05:46'),
(34, 233, 9, 1, 'Terrible experience, would not recommend.', '2024-10-18 05:05:46'),
(35, 245, 10, 5, 'Excellent! Very happy with my purchase.', '2024-10-18 05:05:46'),
(36, 245, 11, 4, 'Great value for money.', '2024-10-18 05:05:46'),
(37, 245, 12, 3, 'It’s okay, nothing special.', '2024-10-18 05:05:46'),
(38, 245, 13, 4, 'Would buy again, solid product.', '2024-10-18 05:05:46'),
(39, 256, 14, 5, 'Perfect for my needs, love it!', '2024-10-18 05:05:46'),
(40, 256, 15, 4, 'Very good, but has some minor flaws.', '2024-10-18 05:05:46'),
(41, 256, 16, 3, 'Mediocre performance, expected better.', '2024-10-18 05:05:46'),
(42, 256, 17, 2, 'Not impressed, might return it.', '2024-10-18 05:05:46'),
(43, 278, 18, 2, 'Disappointed with the quality.', '2024-10-18 05:05:46'),
(44, 278, 19, 3, 'Average, it works but not great.', '2024-10-18 05:05:46'),
(45, 278, 20, 4, 'Good for the price, happy with it.', '2024-10-18 05:05:46'),
(46, 278, 21, 5, 'Fantastic product, highly recommend!', '2024-10-18 05:05:46'),
(47, 289, 22, 1, 'Arrived damaged, very unhappy.', '2024-10-18 05:05:46'),
(48, 289, 23, 4, 'Good product, fast shipping.', '2024-10-18 05:05:46'),
(49, 289, 24, 5, 'Love it! Will definitely buy more.', '2024-10-18 05:05:46'),
(50, 289, 25, 3, 'Not as expected, but okay.', '2024-10-18 05:05:46'),
(51, 301, 26, 5, 'Amazing! Exceeded my expectations.', '2024-10-18 05:05:46'),
(52, 301, 27, 4, 'Good product, but some improvements needed.', '2024-10-18 05:05:46'),
(53, 301, 28, 3, 'It works, but could be better.', '2024-10-18 05:05:46'),
(54, 301, 29, 2, 'Not very impressed, expected more.', '2024-10-18 05:05:46'),
(55, 312, 30, 5, 'Absolutely love it! Highly recommend.', '2024-10-18 05:05:46'),
(56, 312, 31, 4, 'Very satisfied with my purchase.', '2024-10-18 05:05:46'),
(57, 312, 32, 3, 'Okay product, not the best.', '2024-10-18 05:05:46'),
(58, 312, 33, 2, 'Disappointed, it didn’t meet my expectations.', '2024-10-18 05:05:46'),
(59, 323, 34, 5, 'Top-notch product, will buy again!', '2024-10-18 05:05:46'),
(60, 323, 35, 4, 'Good quality, very pleased.', '2024-10-18 05:05:46'),
(61, 323, 36, 3, 'Average product, does the job.', '2024-10-18 05:05:46'),
(62, 323, 37, 2, 'Not worth the price, disappointing.', '2024-10-18 05:05:46'),
(63, 334, 38, 5, 'Fantastic! Love this product.', '2024-10-18 05:05:46'),
(64, 334, 39, 4, 'Great product, fast delivery.', '2024-10-18 05:05:46'),
(65, 334, 40, 3, 'Decent product but has some issues.', '2024-10-18 05:05:46'),
(66, 334, 41, 1, 'Terrible, would not recommend.', '2024-10-18 05:05:46'),
(67, 345, 42, 5, 'Absolutely perfect!', '2024-10-18 05:05:46'),
(68, 345, 43, 4, 'Very good quality.', '2024-10-18 05:05:46'),
(69, 345, 44, 3, 'It’s okay, nothing special.', '2024-10-18 05:05:46'),
(70, 345, 45, 2, 'Not what I expected.', '2024-10-18 05:05:46'),
(71, 356, 46, 5, 'Excellent product, highly recommend!', '2024-10-18 05:05:46'),
(72, 356, 47, 4, 'Very satisfied with my purchase.', '2024-10-18 05:05:46'),
(73, 356, 48, 3, 'Okay but could be better.', '2024-10-18 05:05:46'),
(74, 356, 49, 1, 'Not good at all, very unhappy.', '2024-10-18 05:05:46'),
(75, 367, 50, 5, 'Amazing quality, worth every penny!', '2024-10-18 05:05:46'),
(76, 367, 51, 4, 'Good overall, would buy again.', '2024-10-18 05:05:46'),
(77, 367, 52, 2, 'Not great, had some issues.', '2024-10-18 05:05:46'),
(78, 367, 53, 3, 'Decent product but nothing special.', '2024-10-18 05:05:46'),
(79, 378, 54, 5, 'Perfect fit for my needs!', '2024-10-18 05:05:46'),
(80, 378, 55, 4, 'Good quality, happy with my purchase.', '2024-10-18 05:05:46'),
(81, 378, 56, 3, 'It works, but not as expected.', '2024-10-18 05:05:46'),
(82, 378, 57, 2, 'Disappointed with the performance.', '2024-10-18 05:05:46'),
(83, 389, 58, 4, 'Good value for money.', '2024-10-18 05:05:46'),
(84, 389, 59, 5, 'Absolutely love it!', '2024-10-18 05:05:46'),
(85, 389, 60, 3, 'Okay, does the job.', '2024-10-18 05:05:46'),
(86, 389, 61, 1, 'Not worth the money.', '2024-10-18 05:05:46'),
(87, 400, 62, 5, 'Fantastic product!', '2024-10-18 05:05:46'),
(88, 400, 63, 4, 'Very happy with my purchase.', '2024-10-18 05:05:46'),
(89, 400, 64, 3, 'Decent product, would recommend.', '2024-10-18 05:05:46'),
(90, 400, 65, 2, 'Not what I expected, might return it.', '2024-10-18 05:05:46'),
(91, 411, 66, 5, 'Highly recommend! Great quality.', '2024-10-18 05:05:46'),
(92, 411, 67, 4, 'Good product, would buy again.', '2024-10-18 05:05:46'),
(93, 411, 68, 3, 'Average, nothing special.', '2024-10-18 05:05:46'),
(94, 411, 69, 2, 'Disappointed with the quality.', '2024-10-18 05:05:46'),
(95, 422, 70, 1, 'Poor quality, very unhappy.', '2024-10-18 05:05:46'),
(96, 422, 71, 5, 'Excellent product, highly recommend!', '2024-10-18 05:05:46'),
(97, 422, 72, 4, 'Very satisfied, will buy again.', '2024-10-18 05:05:46'),
(98, 422, 73, 3, 'Okay, but could be better.', '2024-10-18 05:05:46'),
(99, 422, 74, 2, 'Not impressed at all.', '2024-10-18 05:05:46'),
(100, 433, 75, 4, 'Good product overall.', '2024-10-18 05:05:46'),
(101, 433, 76, 5, 'Love this! Will buy again.', '2024-10-18 05:05:46'),
(102, 433, 77, 3, 'Mediocre, expected more.', '2024-10-18 05:05:46'),
(103, 433, 78, 2, 'Not great, would not recommend.', '2024-10-18 05:05:46'),
(104, 444, 79, 5, 'Fantastic! Highly recommend.', '2024-10-18 05:05:46'),
(105, 444, 80, 4, 'Good quality, happy with it.', '2024-10-18 05:05:46'),
(106, 444, 81, 1, 'Terrible, not worth it.', '2024-10-18 05:05:46'),
(107, 444, 82, 3, 'Decent, but has its flaws.', '2024-10-18 05:05:46'),
(108, 455, 83, 5, 'Amazing! Just what I wanted.', '2024-10-18 05:05:46'),
(109, 455, 84, 4, 'Good product, satisfied.', '2024-10-18 05:05:46'),
(110, 455, 85, 3, 'Okay, does the job.', '2024-10-18 05:05:46'),
(111, 455, 86, 2, 'Not what I expected.', '2024-10-18 05:05:46'),
(112, 466, 87, 5, 'Top quality, very pleased!', '2024-10-18 05:05:46'),
(113, 466, 88, 4, 'Great product, will buy again.', '2024-10-18 05:05:46'),
(114, 466, 89, 3, 'It works, but could be improved.', '2024-10-18 05:05:46'),
(115, 466, 90, 2, 'Not satisfied, might return it.', '2024-10-18 05:05:46'),
(116, 477, 91, 1, 'Arrived broken, very unhappy.', '2024-10-18 05:05:46'),
(117, 477, 92, 5, 'Fantastic! Will buy again.', '2024-10-18 05:05:46'),
(118, 477, 93, 4, 'Good quality for the price.', '2024-10-18 05:05:46'),
(119, 477, 94, 3, 'Okay, but nothing special.', '2024-10-18 05:05:46'),
(120, 477, 95, 2, 'Disappointed with my purchase.', '2024-10-18 05:05:46'),
(121, 488, 96, 5, 'Best product I’ve bought!', '2024-10-18 05:05:46'),
(122, 488, 97, 4, 'Very happy, would buy again.', '2024-10-18 05:05:46'),
(123, 488, 98, 3, 'It’s okay, but has some flaws.', '2024-10-18 05:05:46'),
(124, 488, 99, 1, 'Not worth the money.', '2024-10-18 05:05:46'),
(125, 493, 100, 5, 'Absolutely love it, highly recommend!', '2024-10-18 05:05:46'),
(126, 493, 101, 4, 'Good product, fast delivery.', '2024-10-18 05:05:46'),
(127, 493, 102, 3, 'Decent, but could be better.', '2024-10-18 05:05:46'),
(128, 493, 103, 2, 'Not very impressed with the quality.', '2024-10-18 05:05:46'),
(153, 282, 1, 4, 'new comment for it ', '2024-10-19 12:04:19'),
(152, 282, 1, 3, 'good product i give 3 start ', '2024-10-19 12:01:52'),
(154, 353, 1, 4, 'nice product i give 4 star', '2024-10-19 12:07:28'),
(155, 281, 1, 2, 'its good but not as much ', '2024-10-19 12:18:28'),
(156, 281, 1, 1, 'its good', '2024-10-19 12:20:12'),
(157, 281, 1, 2, 'it good product ', '2024-10-19 12:21:55'),
(158, 283, 1, 4, 'pent is to good i like it so much ', '2024-10-19 12:24:13'),
(159, 354, 2, 2, 'its good product ', '2024-10-22 08:53:18'),
(160, 354, 2, 1, 'not good at much ', '2024-10-22 08:54:35'),
(161, 282, 2, 3, 'good product ', '2024-10-22 09:32:19');

-- --------------------------------------------------------

--
-- Table structure for table `product_variants`
--

DROP TABLE IF EXISTS `product_variants`;
CREATE TABLE IF NOT EXISTS `product_variants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Product_id` int(255) NOT NULL,
  `Color` varchar(255) NOT NULL,
  `Size` varchar(255) DEFAULT NULL,
  `Price` varchar(255) NOT NULL,
  `Stock_quantity` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=289 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_variants`
--

INSERT INTO `product_variants` (`id`, `Product_id`, `Color`, `Size`, `Price`, `Stock_quantity`) VALUES
(1, 1, 'Black', 'M', '24.99', 50),
(2, 1, 'White', 'L', '24.99', 40),
(3, 2, 'Blue', '32', '49.99', 25),
(4, 2, 'Black', '34', '49.99', 20),
(5, 3, 'Red', 'S', '29.99', 30),
(6, 3, 'Yellow', 'M', '29.99', 20),
(7, 4, 'Pink', 'One Size', '19.99', 15),
(8, 4, 'White', 'One Size', '19.99', 10),
(9, 5, 'Green', 'One Size', '9.99', 50),
(10, 5, 'Blue', 'One Size', '9.99', 40),
(11, 6, 'Black', 'M', '59.99', 25),
(12, 6, 'Brown', 'L', '59.99', 15),
(13, 7, 'Gray', '8', '79.99', 20),
(14, 7, 'Blue', '9', '79.99', 15),
(15, 8, 'Silver', 'One Size', '199.99', 5),
(16, 8, 'Gold', 'One Size', '199.99', 3),
(17, 9, 'Pink', 'One Size', '29.99', 25),
(18, 9, 'Blue', 'One Size', '29.99', 20),
(19, 10, 'Green', 'One Size', '15.99', 40),
(20, 10, 'Yellow', 'One Size', '15.99', 30),
(21, 11, 'Blue', 'One Size', '49.99', 20),
(22, 11, 'Black', 'One Size', '49.99', 15),
(23, 12, 'Brown', 'M', '99.99', 10),
(24, 12, 'Black', 'L', '99.99', 8),
(25, 13, 'White', 'S', '19.99', 30),
(26, 13, 'Gray', 'M', '19.99', 25),
(27, 14, 'Blue', 'One Size', '14.99', 50),
(28, 14, 'Red', 'One Size', '14.99', 45),
(29, 15, 'Black', 'M', '59.99', 20),
(30, 15, 'Brown', 'L', '59.99', 15),
(31, 16, 'White', 'M', '34.99', 40),
(32, 16, 'Gray', 'L', '34.99', 30),
(33, 17, 'Black', '8', '89.99', 10),
(34, 17, 'Red', '9', '89.99', 8),
(35, 18, 'Green', 'One Size', '29.99', 25),
(36, 18, 'Blue', 'One Size', '29.99', 20),
(37, 19, 'Brown', 'One Size', '99.99', 10),
(38, 19, 'Black', 'One Size', '99.99', 5),
(39, 20, 'Pink', 'One Size', '19.99', 40),
(40, 20, 'Blue', 'One Size', '19.99', 35),
(41, 21, 'Black', '10', '59.99', 25),
(42, 21, 'Blue', '11', '59.99', 20),
(43, 22, 'Red', 'S', '39.99', 30),
(44, 22, 'Green', 'M', '39.99', 25),
(45, 23, 'Yellow', 'One Size', '14.99', 50),
(46, 23, 'Green', 'One Size', '14.99', 45),
(47, 24, 'Blue', 'M', '59.99', 30),
(48, 24, 'Black', 'L', '59.99', 25),
(49, 25, 'Pink', 'One Size', '29.99', 40),
(50, 25, 'White', 'One Size', '29.99', 35),
(51, 26, 'Red', 'S', '79.99', 10),
(52, 26, 'Blue', 'M', '79.99', 8),
(53, 27, 'Black', 'One Size', '199.99', 5),
(54, 27, 'Gold', 'One Size', '199.99', 3),
(55, 28, 'Green', 'M', '29.99', 20),
(56, 28, 'Blue', 'L', '29.99', 15),
(57, 29, 'Brown', 'One Size', '99.99', 10),
(58, 29, 'Black', 'One Size', '99.99', 8),
(59, 30, 'Yellow', 'One Size', '19.99', 25),
(60, 30, 'Green', 'One Size', '19.99', 20),
(61, 31, 'Black', 'M', '89.99', 15),
(62, 31, 'Blue', 'L', '89.99', 10),
(63, 32, 'Red', 'One Size', '39.99', 30),
(64, 32, 'Green', 'One Size', '39.99', 25),
(65, 33, 'Black', '10', '99.99', 20),
(66, 33, 'Gray', '11', '99.99', 15),
(67, 34, 'Blue', 'M', '69.99', 10),
(68, 34, 'Gray', 'L', '69.99', 8),
(69, 35, 'Pink', 'One Size', '24.99', 30),
(70, 35, 'White', 'One Size', '24.99', 20),
(71, 36, 'Yellow', 'One Size', '19.99', 40),
(72, 36, 'Green', 'One Size', '19.99', 35),
(73, 37, 'Red', 'S', '59.99', 20),
(74, 37, 'Blue', 'M', '59.99', 15),
(75, 38, 'Black', '10', '119.99', 10),
(76, 38, 'Gray', '11', '119.99', 8),
(77, 39, 'Green', 'One Size', '29.99', 25),
(78, 39, 'Blue', 'One Size', '29.99', 20),
(79, 40, 'Yellow', 'S', '49.99', 40),
(80, 40, 'Red', 'M', '49.99', 30),
(81, 41, 'Black', '10', '59.99', 25),
(82, 41, 'Gray', '11', '59.99', 20),
(83, 42, 'Blue', 'One Size', '24.99', 30),
(84, 42, 'Green', 'One Size', '24.99', 25),
(85, 43, 'Black', 'One Size', '29.99', 15),
(86, 43, 'Gray', 'One Size', '29.99', 10),
(87, 44, 'Red', 'M', '69.99', 30),
(88, 44, 'Blue', 'L', '69.99', 25),
(89, 45, 'Pink', 'One Size', '29.99', 15),
(90, 45, 'White', 'One Size', '29.99', 10),
(91, 46, 'Green', 'M', '29.99', 25),
(92, 46, 'Blue', 'L', '29.99', 20),
(93, 47, 'Red', '10', '59.99', 15),
(94, 47, 'Gray', '11', '59.99', 10),
(95, 48, 'Black', 'One Size', '24.99', 20),
(96, 48, 'Green', 'One Size', '24.99', 15),
(97, 49, 'Blue', 'M', '39.99', 25),
(98, 49, 'Gray', 'L', '39.99', 20),
(99, 50, 'Yellow', 'One Size', '29.99', 30),
(100, 50, 'Green', 'One Size', '29.99', 25),
(281, 265, 'Charcoal', 'Medium', '249.00', 40),
(280, 264, 'Charcoal', 'Small', '249.00', 50),
(279, 263, 'Coral', 'Large', '249.00', 30),
(278, 262, 'Coral', 'Medium', '249.00', 40),
(277, 261, 'Coral', 'Small', '249.00', 50),
(276, 260, 'Olive', 'Large', '249.00', 30),
(275, 259, 'Olive', 'Medium', '249.00', 40),
(274, 258, 'Olive', 'Small', '249.00', 50),
(273, 257, 'Teal', 'Large', '249.00', 30),
(272, 256, 'Teal', 'Medium', '249.00', 40),
(271, 255, 'Teal', 'Small', '249.00', 50),
(270, 254, 'Beige', 'Large', '249.00', 30),
(269, 253, 'Beige', 'Medium', '249.00', 40),
(268, 252, 'Beige', 'Small', '249.00', 50),
(267, 251, 'Brown', 'Large', '249.00', 30),
(266, 250, 'Brown', 'Medium', '249.00', 40),
(265, 249, 'Brown', 'Small', '249.00', 50),
(264, 248, 'Magenta', 'Large', '249.00', 30),
(263, 247, 'Magenta', 'Medium', '249.00', 40),
(262, 246, 'Magenta', 'Small', '249.00', 50),
(261, 245, 'Cyan', 'Large', '249.00', 30),
(260, 244, 'Cyan', 'Medium', '249.00', 40),
(259, 243, 'Cyan', 'Small', '249.00', 50),
(258, 242, 'Purple', 'Large', '249.00', 30),
(257, 241, 'Purple', 'Medium', '249.00', 40),
(256, 240, 'Purple', 'Small', '249.00', 50),
(255, 239, 'Gray', 'Large', '249.00', 30),
(254, 238, 'Gray', 'Medium', '249.00', 40),
(253, 237, 'Gray', 'Small', '249.00', 50),
(252, 236, 'Orange', 'Large', '249.00', 30),
(251, 235, 'Orange', 'Medium', '249.00', 40),
(250, 234, 'Orange', 'Small', '249.00', 50),
(249, 233, 'Yellow', 'Large', '249.00', 30),
(248, 232, 'Yellow', 'Medium', '249.00', 40),
(247, 231, 'Yellow', 'Small', '249.00', 50),
(246, 230, 'Green', 'Large', '249.00', 30),
(245, 229, 'Green', 'Medium', '249.00', 40),
(244, 228, 'Green', 'Small', '249.00', 50),
(243, 227, 'Pink', 'Large', '249.00', 30),
(242, 226, 'Pink', 'Medium', '249.00', 40),
(241, 225, 'Pink', 'Small', '249.00', 50),
(240, 224, 'Blue', 'Large', '249.00', 30),
(239, 223, 'Blue', 'Medium', '249.00', 40),
(238, 222, 'Blue', 'Small', '249.00', 50),
(237, 221, 'Red', 'Large', '249.00', 30),
(236, 220, 'Red', 'Medium', '249.00', 40),
(235, 219, 'Red', 'Small', '249.00', 50),
(234, 218, 'Black', 'Large', '249.00', 30),
(233, 217, 'Black', 'Medium', '249.00', 40),
(232, 216, 'Black', 'Small', '249.00', 50),
(231, 215, 'White', 'Large', '249.00', 30),
(230, 214, 'White', 'Medium', '249.00', 40),
(229, 213, 'White', 'Small', '249.00', 50),
(283, 267, 'Mint', 'Small', '249.00', 50),
(284, 268, 'Mint', 'Medium', '249.00', 40),
(285, 269, 'Mint', 'Large', '249.00', 30),
(286, 270, 'Ivory', 'Small', '249.00', 50),
(287, 271, 'Ivory', 'Medium', '249.00', 40),
(288, 272, 'Ivory', 'Large', '249.00', 30);

-- --------------------------------------------------------

--
-- Table structure for table `shipping_addresses`
--

DROP TABLE IF EXISTS `shipping_addresses`;
CREATE TABLE IF NOT EXISTS `shipping_addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `User_id` int(255) DEFAULT NULL,
  `Full_address` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `City` varchar(25) DEFAULT NULL,
  `zip_code` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Role_id` int(255) DEFAULT NULL,
  `Fullname` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Phone_number` varchar(255) DEFAULT NULL,
  `Status` enum('active','inactive','block') NOT NULL,
  `token` varchar(64) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `Full_address` varchar(255) NOT NULL,
  `State` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `zip_code` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Role_id`, `Fullname`, `Email`, `Password`, `Phone_number`, `Status`, `token`, `profile_image`, `Full_address`, `State`, `City`, `zip_code`) VALUES
(1, 1, 'jon adam', 'demo@gmail.com', '2901', '+91 4567654563', 'active', 'ca4f987b1dfc58a6f8658cbc7dfe2e23f3f4b676e03a56b9bcf680588cf77e4b', 'Assets\\userProfile\\1.jpg', 'Railway Colony, Bharvad Vado, Botad, Gujarat', 'gujarat', 'botad', 364710),
(2, 1, 'priyank chahuan', 'priyank123@gmail.com', '2901', '+1 1234567654', 'active', '12d39c2a94dd38f87e0b9a3e32af111d6b135c3ccda00ac1405f37807b8cf573', 'Assets\\userProfile\\2.jpg', 'Hermann Park Drive, Houston, TX, USA', 'textas', 'hustom', 45673);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE IF NOT EXISTS `user_roles` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Role_name` varchar(255) DEFAULT NULL,
  `Created_at` timestamp NULL DEFAULT NULL,
  `Updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
CREATE TABLE IF NOT EXISTS `wishlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `User_id` int(255) DEFAULT NULL,
  `Product_id` int(255) DEFAULT NULL,
  `Product_variant_id` int(255) DEFAULT NULL,
  `Status` enum('Yes','No') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `User_id`, `Product_id`, `Product_variant_id`, `Status`) VALUES
(23, NULL, 221, NULL, 'Yes'),
(36, 1, 365, NULL, 'Yes'),
(31, 2, 401, NULL, 'Yes'),
(30, 1, 293, NULL, 'Yes'),
(29, 1, 287, NULL, 'Yes');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
