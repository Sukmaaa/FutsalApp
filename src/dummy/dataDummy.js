export default class DataValue {
  static dataPlan = {
      data: [
          {
              week: "Week 1",
              date: "April 2022", 
              data: ["Toko Butik", "RS Melati", "Tony's Farma"]
          },
          {
              week: "Week 2",
              date: "April 2022", 
              data: ["Maulana's Bakery", "RS Melati", "Tony's Farma"]
          },
          {
              week: "Week 3",
              date: "April 2022", 
              data: ["Penguin Computer", "RS Melati", "Maulana's Bakery"]
          },
          {
              week: "Week 4",
              date: "April 2022", 
              data: ["Fauzy's Restorant", "Penguin Computer", "Tony's Farma"]
          },
      ]
  }

  static dataSurvey = {
      data: [
          {
              nama_produk: "Rivanol",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbd-9Dxu59gJ2v5q3FR5f9IwaP9aAcPtTXA&usqp=CAU", 
              type: "TPI",
              jumlah: 26
          },
          {
              nama_produk: "Sanmol",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0JUj-Rg-8QUUYC-RWjZ4uTNcgB4ZjYeQXw&usqp=CAU",
              type: "Kompetitor",
              jumlah: 102
          },
          {
              nama_produk: "Hotin",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhGCO8zN-rqsMure8ta9i1jYbjA_S3hipZQ&usqp=CAU", 
              type: "Kompetitor",
              jumlah: 67
          },
          {
              nama_produk: "Proris",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPZPTGU52Act3WIuL_yQEHNVNRZO-oshR6A&usqp=CAU", 
              type: "Kompetitor",
              jumlah: 34
          },
      ]
  }

  static dataToko = {
      data: [
          {
              id: 1,
              name: "Toko Butik Budi"
          },
          {
              id: 2,
              name: "Bakery Cake Maulana"
          },
          {
              id: 3,
              name: "Fauzy's Restorant Padang"
          },
          {
              id: 4,
              name: "Tony's Pizza"
          },
      ]
  }

  static users = {
      data: [
          {
              id: 1,
              role: "admin",
              fullname: "Admin",
              password: "admin123",
              email: "admin@gmail.com",
          }, 
          {
              id: 2,
              role: "user",
              fullname: "Sukma Aspriliyawan",
              password: "sukma123",
              email: "sukma@gmail.com",
          }
      ]
  }

  static report = {
      data: [
          {
              id: 1,
              waktu_perjalanan: 8,
              tanggal: "",
              absensi: [
                  {
                      kehadiran: "", // Hadir, Sakit, Cuti, Meeting, Event dll
                      ijin_hari: "" // Half Day, Full Day
                  }
              ]

          }
      ]
  }
}