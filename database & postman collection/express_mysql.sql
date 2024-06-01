-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 31 Bulan Mei 2024 pada 15.53
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_mysql`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `services`
--

CREATE TABLE `services` (
  `id_services` char(36) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `services`
--

INSERT INTO `services` (`id_services`, `service_name`, `created_at`) VALUES
('cc3ebaab-4ef5-46b0-8262-ac4551395678', 'Dine In', '2024-05-31 20:43:20'),
('fe3ffe99-e7e9-492b-87c2-866f9fcb3377', 'Take Away', '2024-05-31 20:36:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_users` char(36) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `no_telp` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_users`, `full_name`, `role`, `no_telp`, `address`) VALUES
('51fd9173-daba-48bb-8bcb-661cdeea9033', 'Dinda Cantika Putri', 'Customer', '08124567', ' Mendut, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah'),
('e6b9bef9-5606-432e-ba60-f7deaceb7702', 'Herman', 'Customer', '08124567', 'Narijanselatan, Progowati, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56512'),
('e8e036f4-1e77-11ef-b4ad-c8e2658c4af0', 'Fajar Dwi Cahyo', 'Admin', '0812345', 'Jl. Namburan Kidul No.5, RT.14/RW.05, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id_services`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
