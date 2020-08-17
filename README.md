# masa

masa is a small javascript library to format date in Indonesian language. It takes inspiration from [momentjs](https://github.com/moment/moment), but a lot smaller and with specific functionality for date formatting in Bahasa Indonesia.

masa adalah pustaka javascript sederhana untuk memformat tanggal dalam bahasa Indonesia. Pustaka ini mengambil inspirasi dari [momentjs](https://github.com/moment/moment), namun ukurannya jauh lebih kecil dengan fungsi spesifik untuk memformat tanggal.

## Kenapa pustaka ini dibuat?

Memformat tanggal adalah hal yang cukup sering dilakukan oleh para developer, terutama frontend developer. Solusi yang sudah ada dan mungkin paling dikenal adalah [momentjs](https://github.com/moment/moment). Namun rasanya jika hanya sekedar untuk memformat tanggal, pustaka [momentjs](https://github.com/moment/moment) terlalu besar karena saking lengkapnya fitur yang tersedia, dan tentu saja ini akan menambah ukuran bundle aplikasi secara tidak perlu.

## Cara Penggunaan

```bash
npm install masa
```

```javascript
import { masa } from 'masa';

// menampilkan tanggal hari ini dengan format default `D MMMM YYYY`
masa().format(); // 17 Agustus 2020
masa(new Date()).format(); // 17 Agustus 2020

masa('2020-02-02').format('D/M/YY'); // 2/2/20

masa(new Date('2020-11-15')).format('[hari] dddd, [tanggal] D MMMM YYYY'); // hari Minggu, tanggal 15 November 2020
```

|         | Token | Output                                          |
| ------: | ----- | ----------------------------------------------- |
|    Hari | dd    | Mg Sn Sl Rb Km Jm Sb                            |
|         | ddd   | Min Sen Sel Rab Kam Jum Sab                     |
|         | dddd  | Minggu Senin Selasa Rabu Kamis Jumat Sabtu      |
| Tanggal | D     | 1 2 3 ... 30 31                                 |
|         | DD    | 01 02 03 ... 30 31                              |
|   Bulan | M     | 1 2 3 ... 11 12                                 |
|         | MM    | 01 02 03 ... 11 12                              |
|         | MMM   | Jan Feb Mar Apr Mei Jun Jul Agt Sep Okt Nov Des |
|         | MMMM  | Januari Februari Maret ... November Desember    |
|   Tahun | YY    | 98 99 19 20                                     |
|         | YYYY  | 1998 1999 2019 2020 1999                        |

Untuk kata yang ingin disisipkan kepada output bisa dimasukkan kedalam string format dengan diapit kurung siku, misal `[hari] dddd, [tanggal] D [bulan] MMMM [tahun] YYYY`
